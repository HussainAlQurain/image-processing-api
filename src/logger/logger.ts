import express from 'express';
const logger = (
    req: express.Request,
    res: express.Response,
    next: Function
): void => {
    const url = req.url;
    const u_ip = req.ip;
    console.log(`${url} was visited: ${u_ip}`);
    next();
};

export default logger;
