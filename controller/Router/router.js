const express = require("express")
const router = express.Router()
const createAdmin = require("../Adminsetup")

router.route("/createadmin").post(createAdmin)

module.exports=router