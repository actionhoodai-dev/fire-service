import { Jimp } from 'jimp';

async function cleanImage(inputPath, outputPath) {
  try {
    console.log(`\n---------------------------------------`);
    console.log(`Reading image: ${inputPath}`);
    const image = await Jimp.read(inputPath);
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    console.log(`Loaded size: ${width}x${height}`);

    // 1. Automatically detect the primary checkerboard colors by sampling a 40x40 area in the top-left
    const colorMap = {};
    for (let y = 2; y < 42; y++) {
      for (let x = 2; x < 42; x++) {
        const idx = (x + y * width) * 4;
        const r = image.bitmap.data[idx];
        const g = image.bitmap.data[idx + 1];
        const b = image.bitmap.data[idx + 2];
        
        // Quantize colors slightly to group noisy/compressed pixels
        const qr = Math.round(r / 6) * 6;
        const qg = Math.round(g / 6) * 6;
        const qb = Math.round(b / 6) * 6;
        const key = `${qr},${qg},${qb}`;
        
        colorMap[key] = (colorMap[key] || 0) + 1;
      }
    }

    // Get the top 4 most frequent colors in the corner area (representing the grid squares)
    const bgColors = Object.entries(colorMap)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 4)
      .map(([key]) => {
        const [r, g, b] = key.split(',').map(Number);
        return { r, g, b };
      });

    console.log('Detected background grid colors:', bgColors);

    // 2. Perform border-initiated BFS flood-fill
    const visited = new Uint8Array(width * height);
    const queue = [];

    // Push all border pixels to seed the flood fill
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

      // Match against the detected background colors with a tight tolerance
      const matchesBg = bgColors.some(c => Math.abs(c.r - r) < 18 && Math.abs(c.g - g) < 18 && Math.abs(c.b - b) < 18);
      
      // Safety guards: Never key out red (canister/hydrant/bell) or saturated yellow labels
      const isRed = (r - g > 25) && (r - b > 25) && r > 65;
      const isYellowLabel = r > 160 && g > 160 && b < 100; // typical yellow label warning text
      const isDarkProductDetail = r < 75 && g < 75 && b < 75 && !matchesBg; // preserve dark details inside object

      if (matchesBg && !isRed && !isYellowLabel && !isDarkProductDetail) {
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

    console.log(`BFS Flood-Fill finished. Made ${transparentCount} pixels transparent.`);

    // 3. Global scan keyout for remaining isolated background grid cells in internal holes (like chain loops)
    let stage2Count = 0;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (x + y * width) * 4;
        if (image.bitmap.data[idx + 3] === 0) continue; // Skip already transparent

        const r = image.bitmap.data[idx];
        const g = image.bitmap.data[idx + 1];
        const b = image.bitmap.data[idx + 2];

        const matchesBg = bgColors.some(c => Math.abs(c.r - r) < 15 && Math.abs(c.g - g) < 15 && Math.abs(c.b - b) < 15);
        const isRed = (r - g > 30) && (r - b > 30) && r > 80;
        const isYellow = r > 170 && g > 170 && b < 100;
        const isDarkDetail = r < 80 && g < 80 && b < 80;

        if (matchesBg && !isRed && !isYellow && !isDarkDetail) {
          image.bitmap.data[idx + 3] = 0;
          stage2Count++;
        }
      }
    }
    console.log(`Stage 2 Global Scan complete. Keyed out ${stage2Count} internal grid pixels.`);

    // Save output image
    console.log(`Writing result to: ${outputPath}`);
    await image.write(outputPath);
    console.log(`Successfully completed background removal for: ${outputPath}`);
  } catch (err) {
    console.error(`Error processing image ${inputPath}:`, err);
  }
}

async function run() {
  // 1. Fire Alarm pull station (light grid)
  const alarmIn = 'C:\\Users\\ELCOT\\.gemini\\antigravity\\brain\\990e1a20-19e3-4cf9-bbbb-16305e4d1630\\media__1780817998118.jpg';
  const alarmOut = 'd:\\fire\\public\\hero_detector.png';
  await cleanImage(alarmIn, alarmOut);

  // 2. Fire Hydrant (light grid)
  const hydrantIn = 'C:\\Users\\ELCOT\\.gemini\\antigravity\\brain\\990e1a20-19e3-4cf9-bbbb-16305e4d1630\\media__1780818012990.jpg';
  const hydrantOut = 'd:\\fire\\public\\hero_hydrant.png';
  await cleanImage(hydrantIn, hydrantOut);

  // 3. Fire Extinguisher (dark grid)
  const extinguisherIn = 'C:\\Users\\ELCOT\\.gemini\\antigravity\\brain\\990e1a20-19e3-4cf9-bbbb-16305e4d1630\\media__1780818179129.jpg';
  const extinguisherOut = 'd:\\fire\\public\\hero_extinguisher.png';
  await cleanImage(extinguisherIn, extinguisherOut);
}

run();
