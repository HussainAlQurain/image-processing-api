import express from 'express';
import images from './api/images';
const routes = express.Router();

routes.get('/', (req, res) => {
    res.status(200).send('Welcome to my Image processing API');
})

routes.use('/images', images);
export default routes;