import express from 'express';
const logger = (req: express.Request, res: express.Response, next: Function): void => {
    let url = req.url;
    let u_ip = req.ip;
    console.log(`${url} was visited: ${u_ip}`);
    next();
}



export default logger;