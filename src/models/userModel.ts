import mongoose from 'mongoose'

const userModel = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please provide name"],
    },
    email:{
        type:String,
        required:[true,"Please provide email"],
    },
    password:{
        type:String,
        required:[true , "Please provide password"]
    },
    role:{
        type:String,
        default:'US'
    },
    reset_token:String,
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date

})

const User = mongoose.models.users || mongoose.model('Users',userModel);

export default User;