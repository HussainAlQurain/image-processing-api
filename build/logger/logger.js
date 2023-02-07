"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = (req, res, next) => {
    const url = req.url;
    const u_ip = req.ip;
    console.log(`${url} was visited: ${u_ip}`);
    next();
};
exports.default = logger;
