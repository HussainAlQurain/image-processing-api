import * as imgUtil from '../util/imageProcessing';
const sharp = require('sharp');
const path = require('path');

const BUILD_DIR = __dirname;

describe('Image processing suite', (): void => {
    it('expects the format to be jpeg, jpg or png.', () => {
        const extensions = ['.jpeg', '.jpg', '.png'];
        const filePath = path.resolve(
            BUILD_DIR,
            '..',
            'images',
            'encenadaport.jpg'
        );
        const fileExt = imgUtil.getFileExtension(filePath);
        expect(extensions).toContain(fileExt);
    });

    it('expects the image to be resized to 200x200', async (): Promise<void> => {
        const imgPath = path.resolve(
            BUILD_DIR,
            '..',
            'images',
            'encenadaport.jpg'
        );
        const resizedImg = await imgUtil.resizeImg(imgPath, 200, 200);
        const metadata = await sharp(resizedImg).metadata();
        expect(metadata.width === 200 && metadata.height === 200).toBeTruthy();
    });
    it('expects getImage function to return path string to the file processed.', async (): Promise<void> => {
        const imgPath = await imgUtil.getImage('fjord', 200, 200);
        expect(imgPath).toEqual(jasmine.any(String));
    });
});
