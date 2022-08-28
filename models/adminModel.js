const mongoose = require("mongoose")

const adminSchema =mongoose.Schema({
    companyName:{
        type:String
    },
    adminName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    avatar:{
        type:String
        
    },
    avatarId:{
        type:String
    },
    isAdmin:{
        type:Boolean,
        Default:true
    },
    phone:{
        type:String,
        required:true
    },
    verifiedToken:{
        type:String
    },
    verified:{
        type:Boolean
    },
    code:{
        type:String
    },
    menus:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"foods"
        }
    ]
}, {timestamps:true})

module.exports= mongoose.model("admin", adminSchema)