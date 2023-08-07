const express = require("express")
const {getUser , createUser , deleteUser} = require('../controllers/userController')
const user = express.Router()

// =======>get method<=======
user.get('/', getUser);

// =======>post method<=======
user.post('/', createUser);

// =======>delete method<=======
user.delete('/:id', deleteUser);



module.exports = user
