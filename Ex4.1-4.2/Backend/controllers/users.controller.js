// create a new user
const Users = require('../models/user.models')
const bcrypt = require('bcrypt')
const createUser = async (req, res) => {
    try {
        const { username, password } = req.body
        
    } catch (error) {
        console.log(error)
    }
}


module.exports = { createUser }