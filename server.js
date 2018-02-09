const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const path = require('path')

/**
 * Check API resource and skip first middleware for specific resource
 * @param {*} req HTTP Request object
 * @param {*} res HTTP Response object
 * @param {*} next Method executes next middleware
 */
const checkResource = (req, res, next) => {
    if (req.path === '/api/cookies') {
        return next();
    }
    next()
}

app.all('*', checkResource)

/**
 * Sets Specific CORS Reponse headers
 * @param {*} req HTTP Request object
 * @param {*} res HTTP Response object
 * @param {*} next Method executes next middleware
 */
const specificCors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://www.w3schools.com")
    res.header("Access-Control-Allow-Credentials", "true")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
}

/**
 * Sets General CORS Response headers
 * @param {*} req HTTP Request object
 * @param {*} res HTTP Response object
 * @param {*} next Method executes next middleware
 */
const genCors = (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
}

app.use('*', genCors)

app.use('/docs', express.static(path.join(__dirname, 'docs')))

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