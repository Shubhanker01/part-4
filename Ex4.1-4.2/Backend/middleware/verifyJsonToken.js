const jwt = require('jsonwebtoken')
const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.status(404).json({ message: "Token is not present" })
    jwt.verify(token, process.env.SECRET, (err, user) => {
        if (err) {
            return res.status(400).json({ message: "Invalid Token" })
            
        }
        req.user = user
    })
    next()

}

module.exports = { verifyToken }