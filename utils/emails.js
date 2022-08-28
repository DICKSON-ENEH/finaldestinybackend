const {google} = require("googleapis")
const nodemailer = require("nodemailer")

const crypto = require("crypto")
const jwt = require("jsonwebtoken")

const CLIENT_ID= "1038789164916-qlk62c5r2fkosr6hcans5np1q9sadr0a.apps.googleusercontent.com"

const CLIENT_SECRET = "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"

const REDIRECT_URL=
"https://developers.google.com/oauthplayground" 

const TOKEN = "1//04gBGzLsaoAXCCgYIARAAGAQSNwF-L9IreLvgQZyAjKsjayW-rfD6GoDQYnKK6-nRHsThnN2CZk9xVN1ux3K6p7AQUW0j7tMmeww"


const  OAuth2 = google.auth.OAuth2
 const oAuth2Client = new OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URL
 )

 oAuth2Client.setCredentials({
    refresh_token:TOKEN
 })

 const verifyEmail = async(email, user)=>{
    try {
         const getToken = crypto.randomBytes(4).toString("hex")

         const token = jwt.sign({getToken}, "herewego", {
            expiresIn:"1d"
         })

         const accessToken = await oAuth2Client.getAccessToken()

         const transport = nodemailer.createTransport({
            service:"gmail",
            auth:{
                type:"OAuth2",
                user:"dickseneh99@gmail.com",
                clientId:CLIENT_ID,
                clientSecret:CLIENT_SECRET,
                refresh_token:TOKEN,
                accessToken:accessToken.token
            }
         })
         const mailOptions={
            from :"Destiny Stomach Care <dickseneh99@gmail.com>",

            to:email,
            subject:"Account Verification",
            html:`${user}account has been verifie`
         }
         const result = transport.sendMail(mailOptions);
         return result;

    } catch (error) {
        console.log(error)
    }
 }

 module.exports=verifyEmail