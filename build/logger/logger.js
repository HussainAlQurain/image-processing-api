'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const logger = (req, res, next) => {
    let url = req.url
    let u_ip = req.ip
    console.log(`${url} was visited: ${u_ip}`)
    next()
}
exports.default = logger
