const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Read the image file and convert to data URL
  const imgPath = path.join(__dirname, 'public/profile.png');
  const imgBuffer = fs.readFileSync(imgPath);
  const imgBase64 = imgBuffer.toString('base64');
  const dataUrl = `data:image/png;base64,${imgBase64}`;

  const results = await page.evaluate(async (dataUrl) => {
    const chars = " .:-=+*#%@".split("");
    const sizes = [400, 280, 220];
    const data = {};

    const img = new Image();
    img.src = dataUrl;
    await new Promise((resolve) => img.onload = resolve);

    for (const size of sizes) {
      const canvasWidth = size;
      const canvasHeight = size;
      const offscreen = document.createElement("canvas");
      const offCtx = offscreen.getContext("2d");
      offscreen.width = canvasWidth;
      offscreen.height = canvasHeight;

      const scale = 0.8;
      const imgAspect = img.width / img.height;

      let drawHeight = canvasHeight * scale;
      let drawWidth = drawHeight * imgAspect;

      if (drawWidth > canvasWidth * scale) {
        drawWidth = canvasWidth * scale;
        drawHeight = drawWidth / imgAspect;
      }

      const offsetX = (canvasWidth - drawWidth) / 2;
      const offsetY = (canvasHeight - drawHeight) / 2;

      offCtx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      const imageData = offCtx.getImageData(0, 0, canvasWidth, canvasHeight);
      const pixels = imageData.data;

      const particles = [];
      const isMobileSize = size <= 280;
      const fontSize = isMobileSize ? 5 : 7;
      const colGap = fontSize * 0.7; 
      const rowGap = fontSize * 1.1;

      for (let y = 0; y < canvasHeight; y += rowGap) {
        for (let x = 0; x < canvasWidth; x += colGap) {
          const i = (Math.floor(y) * canvasWidth + Math.floor(x)) * 4;
          const a = pixels[i + 3];

          if (a > 128) {
            const r = pixels[i];
            const g = pixels[i + 1];
            const b = pixels[i + 2];
            const brightness = (r + g + b) / (3 * 255);

            const charIndex = Math.floor(brightness * (chars.length - 1));
            const char = chars[charIndex];

            particles.push({
              x: Number(x.toFixed(1)),
              y: Number(y.toFixed(1)),
              char: char,
              alpha: Number((0.4 + brightness * 0.6).toFixed(2))
            });
          }
        }
      }
      data[size] = particles;
    }
    return data;
  }, dataUrl);

  const output = `export const asciiData = ${JSON.stringify(results)};`;
  fs.writeFileSync(path.join(__dirname, 'src/assets/asciiData.js'), output);
  
  console.log('ASCII data generated successfully.');
  await browser.close();
})();
