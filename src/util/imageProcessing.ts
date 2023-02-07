const sharp = require('sharp');
const fs = require('fs');
const Path = require('path');

const getFileExtension = (filePath: string): string => {
    return Path.extname(filePath);
};


const resizeImg = async (file: string, width: number, height: number): Promise<Buffer> => {
    try {
        
        const file_name = Path.basename(file);
        const resized = await sharp(file)
        .resize(width, height)
        .jpeg({quality: 90})
        .toBuffer();

        const outputFile = Path.join(__dirname, `../images/processed/edited_${width}x${height}_` + file_name);
        //save the file in the directory processed
        await fs.promises.writeFile(outputFile, resized);
        
        return resized;
    } catch (err: unknown) {
        throw `${err}\n`;
    }
};

const getImage = async (imageName: string, width: number, height: number): Promise<string | void> => {
    try{
        //check if image was processed before and exists in processed folder.
        const filePath = Path.join(__dirname, `../images/processed/edited_${width}x${height}_` + imageName + '.jpg');
        try {
            await fs.promises.access(filePath);
            //if file exists return the path.
            return filePath;
        } catch (err) {
            //if file doesn't exist, create it using the function resizeImg
            await resizeImg(Path.join(__dirname, '../images/' + imageName + '.jpg'), width, height);
            return filePath;
        }
    } catch(err: unknown){
        throw `${err}\n`;
    }
}

export { getFileExtension, resizeImg, getImage };