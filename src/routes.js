const express = require('express')
const router = express.Router()
const controller = require('./controller')


router.post('/register', controller.userRegister)

router.put("/update-user/:id", controller.updateUser);
router.get("/list-users",controller.listUser);
router.delete("/delete-user/:id", controller.deletUser)



router.get('/',async (req, res) => {
    res.send("Servidor funcionando !!")
})

module.exports = router