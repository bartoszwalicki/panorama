const fs = require("fs-extra");
const path = require("path");
const sharp = require("sharp");

const SRC_DIR = "src/assets/panoramas";
const THUMB_DIR = "src/assets/panoramas-thumbnails/";
const THUMB_SQUARE_SIZE = 350;

const generateCubeFaceThumbnail = (sourceFilePath, webPOptions, outputPath) => {
  try {
    sharp(sourceFilePath)
      .resize(THUMB_SQUARE_SIZE, THUMB_SQUARE_SIZE)
      .webp(webPOptions)
      .toFile(outputPath);
  } catch (e) {
    console.error("Error when generating thumbnail: ", outputThumbnail, e);
  }
};

const generateEquirectangularThumbnail = (
  sourceFilePath,
  webPOptions,
  outputPath
) => {
  try {
    const image = sharp(sourceFilePath);

    image.metadata().then((metadata) => {
      const { width, height } = metadata;
      const thumbnailExtractRatio = 0.6;
      const extractSize = Math.round(height * thumbnailExtractRatio);
      const widthStartingPoint =
        Math.round(width / 2) - Math.round(extractSize / 2);
      const heightStartingPoint =
        Math.round(height / 2) - Math.round(extractSize / 2);

      return image
        .extract({
          height: extractSize,
          width: extractSize,
          left: widthStartingPoint,
          top: heightStartingPoint,
        })
        .resize(THUMB_SQUARE_SIZE, THUMB_SQUARE_SIZE)
        .webp(webPOptions)
        .toFile(outputPath);
    });
  } catch (e) {
    console.error("Error when generating thumbnail: ", outputThumbnail, e);
  }
};

fs.ensureDirSync(THUMB_DIR);

fs.readdir(SRC_DIR, (err, folders) => {
  if (err) {
    console.error("Error reading source directory:", err);
    return;
  }

  folders.forEach((folder) => {
    const folderPath = path.join(SRC_DIR, folder);
    const stat = fs.lstatSync(folderPath);
    const webPOptions = {
      effort: 6,
      quality: 65,
    };

    if (stat.isDirectory()) {
      const folderName = path.basename(folder);
      const outputThumbnail = path.join(THUMB_DIR, `${folderName}.webp`);
      const cubeFacePanoramaPath = path.join(folderPath, "pano_0.jpg");
      const equirectangularPanoramaPath = path.join(folderPath, "panorama.jpg");

      if (fs.existsSync(outputThumbnail)) {
        console.log("Existing. Skipping generating: ", folderName);
        return;
      }

      if (fs.existsSync(cubeFacePanoramaPath)) {
        generateCubeFaceThumbnail(
          cubeFacePanoramaPath,
          webPOptions,
          outputThumbnail
        );
      } else if (fs.existsSync(equirectangularPanoramaPath)) {
        generateEquirectangularThumbnail(
          equirectangularPanoramaPath,
          webPOptions,
          outputThumbnail
        );
      } else {
        console.warn("No panorama file detected with path: ", folderPath);
      }
    }
  });
});
