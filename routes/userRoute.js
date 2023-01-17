const { loginController, registerController } = require("../controllers/userController")

const express = required('express')

//router object
const router = express.Router()

//router
// Post Login User
router.post('/login', loginController );

// Post Register User
router.post('/register', registerController);

module.exports = router