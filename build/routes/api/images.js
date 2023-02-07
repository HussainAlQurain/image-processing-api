"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageProcessing_1 = require("../../util/imageProcessing");
const Path = require('path');
const fs = require('fs');
const images = express_1.default.Router();
images.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filename = req.query.filename;
    let w = req.query.width;
    let h = req.query.height;
    //serve the original image
    if (filename != undefined && w == undefined && h == undefined) {
        try {
            let imagePath = Path.join(__dirname, '../../images/' + filename + '.jpg');
            return fs.readFile(imagePath, (err, content) => {
                res.end(content);
            });
        }
        catch (err) {
            return res.send(err);
        }
    }
    try {
        //check if width and height of number type.
        let width = Number(w);
        let height = Number(h);
        //make sure all parameters are entered & server the cropped image
        if (filename == undefined ||
            width == undefined ||
            height == undefined) {
            res.send('<h1>Use query for filename to resize an image. use this example: http://localhost:3000/api/images?filename=fjord&width=200&height=200<br/>Or use only filename to display original: http://localhost:3000/api/images?filename=fjord</h1><br/><br/><h2 style="color:#eb4034">Available images are:<br/>encenadaport<br/>fjord<br/>icelandwaterfall<br/>palmtunnel<br/>santamonica</h2>');
        }
        else {
            try {
                let imagePath = yield (0, imageProcessing_1.getImage)(filename, width, height);
                imagePath = String(imagePath);
                fs.readFile(imagePath, (err, content) => {
                    res.end(content);
                });
            }
            catch (err) {
                res.send(`width and height should be numbers: ${err}`);
            }
        }
    }
    catch (err) {
        res.send(err);
    }
}));
exports.default = images;
