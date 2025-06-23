// create a new user
const Users = require('../models/user.models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const createUser = async (req, res) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            return res.status(400).json({ message: "Please enter full details" })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        let user = await Users.create({
            username: username,
            password: hashedPassword
        })

        jwt.sign({ name: username, id: user._id }, process.env.SECRET, { expiresIn: '1h' }, function (err, token) {
            if (err) {
                return res.status(500).json({ message: "Some error occured" })
            }
            return res.status(200).json({ message: "User successfully entered", token: token })
        })


    } catch (error) {
        if (error.errors.username.kind == 'minlength') {
            return res.status(400).json({ message: "Mininum length of password or username should be atleast 3" })
        }
    }
}

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            return res.status(402).json({ message: "Please enter full details" })
        }
        const user = await Users.findOne({ username: username })
        if (!user) {
            return res.status(402).json({ message: "Invalid credentials" })
        }
        let compare = await bcrypt.compare(password, user.password)
        if (!compare) {
            return res.status(402).json({ message: "Invalid password" })
        }

        jwt.sign({ name: username, id: user._id }, process.env.SECRET, { expiresIn: '1h' }, function (err, token) {
            if (err) {
                return res.status(500).json({ message: "Some error occured" })
            }
            return res.status(200).json({ message: "User successfully entered", token: token })
        })


    } catch (error) {
        console.log(error)
    }
}


module.exports = { createUser, loginUser }