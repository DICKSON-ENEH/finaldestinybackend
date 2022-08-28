const verifiedEmail = require("../utils/emails")
const crypto = require("crypto")
const bcrypt = require("bcrypt")
const adminModel = require("../models/adminModel")




const  createAdmin = async(req, res)=>{
    try {
        const {companyName, email, password, phone, adminName}= req.body

        const salt = await bcrypt.genSalt(10)

        const hashed = await bcrypt.hash(password, salt)

    const user = await adminModel.create({
        companyName, email, password:hashed, phone, adminName
    })

    verifiedEmail(email, user)

    res.status(200).json({ message: "Please check your mail to continue" });
    } catch (error) {
        
    }
}
module.exports=createAdmin