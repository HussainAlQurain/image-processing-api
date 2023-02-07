'use strict'
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value)
                  })
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value))
                } catch (e) {
                    reject(e)
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value))
                } catch (e) {
                    reject(e)
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected)
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            )
        })
    }
Object.defineProperty(exports, '__esModule', { value: true })
exports.getImage = exports.resizeImg = exports.getFileExtension = void 0
const sharp = require('sharp')
const fs = require('fs')
const Path = require('path')
const getFileExtension = (filePath) => {
    return Path.extname(filePath)
}
exports.getFileExtension = getFileExtension
const resizeImg = (file, width, height) =>
    __awaiter(void 0, void 0, void 0, function* () {
        try {
            const file_name = Path.basename(file)
            const resized = yield sharp(file)
                .resize(width, height)
                .jpeg({ quality: 90 })
                .toBuffer()
            const outputFile = Path.join(
                __dirname,
                `../images/processed/edited_${width}x${height}_` + file_name
            )
            //save the file in the directory processed
            yield fs.promises.writeFile(outputFile, resized)
            return resized
        } catch (err) {
            throw `${err}\n`
        }
    })
exports.resizeImg = resizeImg
const getImage = (imageName, width, height) =>
    __awaiter(void 0, void 0, void 0, function* () {
        try {
            //check if image was processed before and exists in processed folder.
            const filePath = Path.join(
                __dirname,
                `../images/processed/edited_${width}x${height}_` +
                    imageName +
                    '.jpg'
            )
            try {
                yield fs.promises.access(filePath)
                //if file exists return the path.
                return filePath
            } catch (err) {
                //if file doesn't exist, create it using the function resizeImg
                yield resizeImg(
                    Path.join(__dirname, '../images/' + imageName + '.jpg'),
                    width,
                    height
                )
                return filePath
            }
        } catch (err) {
            throw `${err}\n`
        }
    })
exports.getImage = getImage
