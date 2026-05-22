import { Jimp } from 'jimp';

async function removeWhiteBg(inputPath, outputPath, minVal = 245) {
  try {
    console.log('Reading image:', inputPath);
    const image = await Jimp.read(inputPath);
    
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    console.log(`Loaded: ${width}x${height}`);

    const visited = new Uint8Array(width * height);
    const queue = [];

    // Initialize BFS from all border pixels
    for (let x = 0; x < width; x++) {
      queue.push({ x, y: 0 });
      queue.push({ x, y: height - 1 });
      visited[x] = 1;
      visited[x + (height - 1) * width] = 1;
    }
    for (let y = 1; y < height - 1; y++) {
      queue.push({ x: 0, y });
      queue.push({ x: width - 1, y });
      visited[y * width] = 1;
      visited[(width - 1) + y * width] = 1;
    }

    let transparentCount = 0;
    let head = 0;

    while (head < queue.length) {
      const { x, y } = queue[head++];
      
      const idx = (x + y * width) * 4;
      const r = image.bitmap.data[idx];
      const g = image.bitmap.data[idx + 1];
      const b = image.bitmap.data[idx + 2];

      // Check if this pixel is near-white or light grey background
      const isBg = r >= minVal && g >= minVal && b >= minVal && Math.abs(r - g) < 15 && Math.abs(g - b) < 15;

      if (isBg) {
        image.bitmap.data[idx + 3] = 0; // Make transparent
        transparentCount++;

        const neighbors = [
          { x: x - 1, y },
          { x: x + 1, y },
          { x, y: y - 1 },
          { x, y: y + 1 }
        ];

        for (const n of neighbors) {
          if (n.x >= 0 && n.x < width && n.y >= 0 && n.y < height) {
            const nIdx = n.x + n.y * width;
            if (!visited[nIdx]) {
              visited[nIdx] = 1;
              queue.push(n);
            }
          }
        }
      }
    }

    console.log(`BFS processed. Made ${transparentCount} pixels transparent.`);
    console.log(`Writing transparent image to: ${outputPath}`);
    await image.write(outputPath);
    console.log('Background removed successfully!');
  } catch (err) {
    console.error('Error processing background removal:', err);
  }
}

async function main() {
  const detectorIn = 'C:\\Users\\ELCOT\\.gemini\\antigravity\\brain\\990e1a20-19e3-4cf9-bbbb-16305e4d1630\\smoke_detector_1779471970739.png';
  const detectorOut = 'd:\\fire\\public\\hero_detector.png';
  console.log('\n--- Processing Smoke Detector ---');
  // Smoke detector background is ~235, so minVal=225 is perfect
  await removeWhiteBg(detectorIn, detectorOut, 225);

  const hydrantIn = 'C:\\Users\\ELCOT\\.gemini\\antigravity\\brain\\990e1a20-19e3-4cf9-bbbb-16305e4d1630\\fire_hydrant_1779471992011.png';
  const hydrantOut = 'd:\\fire\\public\\hero_hydrant.png';
  console.log('\n--- Processing Fire Hydrant ---');
  await removeWhiteBg(hydrantIn, hydrantOut, 245);
}

main().catch(console.error);
