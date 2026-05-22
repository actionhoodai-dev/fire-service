import { Jimp } from 'jimp';

async function processImage() {
  try {
    const inputPath = 'C:\\Users\\ELCOT\\.gemini\\antigravity\\brain\\990e1a20-19e3-4cf9-bbbb-16305e4d1630\\media__1779468754978.jpg';
    const outputPath = 'd:\\fire\\public\\hero_extinguisher.png';

    console.log('Reading image:', inputPath);
    const image = await Jimp.read(inputPath);
    
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    console.log(`Image loaded successfully: ${width}x${height}`);

    const visited = new Uint8Array(width * height);
    const queue = [];

    // Stage 1: BFS Flood-Fill from the outer edges to remove main background and border shadows
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

      // Check if this pixel looks like checkerboard background (white/grey) or border shadow
      const isWhite = r > 200 && g > 200 && b > 200;
      const isGrey = r > 170 && g > 170 && b > 170 && Math.abs(r - g) < 20 && Math.abs(g - b) < 20;
      const isShadow = r > 110 && g > 110 && b > 110 && Math.abs(r - g) < 30 && Math.abs(g - b) < 30; // faint shadow on grid
      
      // Protect strong colors and dark details
      const isRed = (r - g > 20) && (r - b > 20) && r > 70;
      const isBlack = r < 75 && g < 75 && b < 75;

      if ((isWhite || isGrey || isShadow) && !isRed && !isBlack) {
        image.bitmap.data[idx + 3] = 0;
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

    console.log(`Stage 1 (BFS Flood-Fill) complete. Made ${transparentCount} pixels transparent.`);

    // Stage 2: Global scan to clear remaining isolated checkerboard squares in internal loops (e.g. metal pin loops)
    let stage2Count = 0;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (x + y * width) * 4;
        
        // Skip pixels that are already transparent
        if (image.bitmap.data[idx + 3] === 0) continue;

        const r = image.bitmap.data[idx];
        const g = image.bitmap.data[idx + 1];
        const b = image.bitmap.data[idx + 2];

        // Match perfectly neutral checkerboard pixels (both grey and white squares)
        const isNeutralWhite = r >= 250 && g >= 250 && b >= 250 && Math.abs(r - g) <= 2 && Math.abs(g - b) <= 2;
        const isNeutralGrey = r >= 225 && r <= 236 && g >= 225 && g <= 236 && b >= 225 && b <= 236 && Math.abs(r - g) <= 2 && Math.abs(g - b) <= 2;

        if (isNeutralWhite || isNeutralGrey) {
          image.bitmap.data[idx + 3] = 0;
          stage2Count++;
        }
      }
    }

    console.log(`Stage 2 (Global Scan Keyout) complete. Made ${stage2Count} pixels transparent.`);
    console.log(`Total transparent pixels: ${transparentCount + stage2Count} out of ${width * height} (${((transparentCount + stage2Count) / (width * height) * 100).toFixed(2)}%)`);

    // Write the clean transparent image to the public directory
    console.log('Writing clean image to:', outputPath);
    await image.write(outputPath);
    console.log('Image processing completed successfully!');
  } catch (err) {
    console.error('Error during image processing:', err);
  }
}

processImage();
