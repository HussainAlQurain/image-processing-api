'use strict'
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod }
    }
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express'))
const index_1 = __importDefault(require('./routes/index'))
const logger_1 = __importDefault(require('./logger/logger'))
const app = (0, express_1.default)()
const port = 3000
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
const middleware = [logger_1.default, index_1.default]
app.listen(port, 'localhost', () => {
    console.log(`server started at http://localhost:${port};`)
})
app.use('/api', middleware)
app.get('/', (req, res) => {
    res.send('Please use route /api/images')
})
exports.default = app
