import express from 'express';
import routes from './routes/index';
import logger from './logger/logger';
const app = express();
const port = 3000;
/*
res.cookie()
res.clearCookie()
res.redirect()
res.sendStatus(code)
res.sendFile(path)
res.send(body)
|
req.ip
req.cookies.name
req.path
req.subdomains
req.params()
*/

const middleware = [logger, routes];

app.listen(port, 'localhost', () => {
    console.log(`server started at http://localhost:${port};`);
});

app.use('/api', middleware);

app.get('/', (req: express.Request, res: express.Response): void => {
    res.send('Please use route /api/images');
});

export default app;
