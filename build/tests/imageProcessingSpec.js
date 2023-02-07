"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const imgUtil = __importStar(require("../util/imageProcessing"));
const sharp = require('sharp');
const path = require('path');
const BUILD_DIR = __dirname;
describe('Image processing suite', () => {
    it('expects the format to be jpeg, jpg or png.', () => {
        const extensions = ['.jpeg', '.jpg', '.png'];
        const filePath = path.resolve(BUILD_DIR, '..', 'images', 'encenadaport.jpg');
        const fileExt = imgUtil.getFileExtension(filePath);
        expect(extensions).toContain(fileExt);
    });
    it('expects the image to be resized to 200x200', () => __awaiter(void 0, void 0, void 0, function* () {
        const imgPath = path.resolve(BUILD_DIR, '..', 'images', 'encenadaport.jpg');
        const resizedImg = yield imgUtil.resizeImg(imgPath, 200, 200);
        const metadata = yield sharp(resizedImg).metadata();
        expect(metadata.width === 200 && metadata.height === 200).toBeTruthy();
    }));
    it('expects getImage function to return path string to the file processed.', () => __awaiter(void 0, void 0, void 0, function* () {
        const imgPath = yield imgUtil.getImage('fjord', 200, 200);
        expect(imgPath).toEqual(jasmine.any(String));
    }));
});
