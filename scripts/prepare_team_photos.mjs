import sharp from "sharp";
import fs from "fs";
import path from "path";

const teamDir = "public/team";
if (!fs.existsSync(teamDir)) {
  fs.mkdirSync(teamDir, { recursive: true });
}

async function refinePhotos() {
  console.log("Refining close-up professional team portraits...");

  // 1. Dr. Saurabh Dixit: Clean crop + inpaint circle corners with white brick wall background
  const sBuf = await sharp("Dr. Saurabh Dixit.jpeg")
    .extract({ left: 140, top: 465, width: 290, height: 290 })
    .resize(600, 600)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { data, info } = sBuf;
  // Corner pixels where y < 140 and color is dark (circle boundary)
  for (let y = 0; y < 160; y++) {
    for (let x = 0; x < info.width; x++) {
      // Check top-left corner and top-right corner
      if (x < 180 || x > 420) {
        const idx = (y * info.width + x) * info.channels;
        const r = data[idx], g = data[idx+1], b = data[idx+2];
        const brightness = (r + g + b) / 3;
        // If it's part of the dark circle border/outside
        if (brightness < 90) {
          // Sample a nearby wall pixel (e.g. from x=280, y=50)
          const sampleX = 260 + (x % 40);
          const sampleY = 40 + (y % 40);
          const sampleIdx = (sampleY * info.width + sampleX) * info.channels;
          data[idx] = data[sampleIdx];
          data[idx+1] = data[sampleIdx+1];
          data[idx+2] = data[sampleIdx+2];
        }
      }
    }
  }

  await sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } })
    .jpeg({ quality: 95 })
    .toFile(path.join(teamDir, "dr-saurabh-dixit.jpg"));
  console.log("✓ Refined dr-saurabh-dixit.jpg with seamless background");

  // 2. Dr. Uzma Dixit: Crop shifted slightly right to eliminate poster text
  await sharp("Dr. Uzama Dixit.jpeg")
    .extract({ left: 590, top: 125, width: 600, height: 600 })
    .resize(600, 600, { fit: "cover" })
    .jpeg({ quality: 95 })
    .toFile(path.join(teamDir, "dr-uzma-dixit.jpg"));
  console.log("✓ Refined dr-uzma-dixit.jpg");

  // 3. Raghav Jha: Refined framing
  await sharp("Dr. Raghav Jha.jpeg")
    .extract({ left: 230, top: 215, width: 440, height: 440 })
    .resize(600, 600, { fit: "cover" })
    .jpeg({ quality: 95 })
    .toFile(path.join(teamDir, "raghav-jha.jpg"));
  console.log("✓ Refined raghav-jha.jpg");
}

refinePhotos().catch(console.error);
