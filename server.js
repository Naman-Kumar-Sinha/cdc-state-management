const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

/**
 * 
 * Checks for specific API resource (route) and skips the first middleware
 * @param {any} req 
 * @param {any} res 
 * @param {any} next 
 * @returns 
 */
const checkResource = (req, res, next) => {
    if (req.path === '/api/cookies') {
        return next();
    }
    next()
}

app.all('*', checkResource)
/**
 * 
 * Specific CORS
 * @param {any} req 
 * @param {any} res 
 * @param {any} next 
 */
const specificCors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://www.w3schools.com")
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
}
/**
 * 
 * General CORS
 * @param {any} req 
 * @param {any} res 
 * @param {any} next 
 */
const genCors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
}

app.use('*', genCors)

app.use(cookieParser())

app.get('/api', (req, res, next) => {
    res.cookie('sampleCookie', 'Naman', { httpOnly: true })
    res.send('Press F12 and inspect cookies now')
})

app.get('/api/cookies', specificCors, (req, res, next) => {
    let obj = req.cookies
    res.json(obj)
})

app.get('/api/text', (req, res, next) => {
    res.send('There you are!')
})

app.listen(process.env.port || process.env.PORT || 80, () => console.log('Cross Domain Cookie State Management app listening on port 80!'))