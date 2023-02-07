import express from 'express';
import { getImage } from '../../util/imageProcessing';
const Path = require('path');
const fs = require('fs');

const images = express.Router();
images.get('/', async (req, res) => {
    
    let filename = req.query.filename;
    let w = req.query.width;
    let h = req.query.height;

    //serve the original image
    if(filename != undefined && w == undefined && h== undefined){
        try{
            let imagePath = Path.join(__dirname, '../../images/' + filename + '.jpg');

            return fs.readFile(imagePath, (err: Error, content: JSON) => {
                res.end(content);
            })
        }
        catch(err: unknown){
            return res.send(err);
        }
    }
    try{
    //check if width and height of number type.
        let width = Number(w);
        let height = Number(h);
    //make sure all parameters are entered & server the cropped image
    if(filename == undefined || width == undefined || height == undefined){
        res.send('<h1>Use query for filename to resize an image. use this example: http://localhost:3000/api/images?filename=fjord&width=200&height=200<br/>Or use only filename to display original: http://localhost:3000/api/images?filename=fjord</h1><br/><br/><h2 style="color:#eb4034">Available images are:<br/>encenadaport<br/>fjord<br/>icelandwaterfall<br/>palmtunnel<br/>santamonica</h2>');
    }
    else{
        try{
            let imagePath = await getImage(filename as string, width as unknown as number, height as unknown as number);
            imagePath = String(imagePath);
            fs.readFile(imagePath, (err: Error, content: JSON) => {
                res.end(content);
            })
        }
        catch(err: unknown){
            res.send(`width and height should be numbers: ${err}`);
        }

    }


    }
    catch(err: unknown){
        res.send(err);
    }

});

export default images;