import mongoose , { Schema , Document } from "mongoose";


// interface for message schema

export interface Message extends Document {

    content  :string ;
    createdAt : Date ;
}


const MessageSchema : Schema<Message> = new Schema({

    content : {
        type : String , 
        required : true
    },
    createdAt:{
        type : Date,
        required : true,
        default : Date.now
    }
})


// interface for user 

export interface User extends Document {

    username : string;
    email : string;
    password : string;
    verifyCode : number;
    verifyCodeExpiry : Date;
    isVerified : boolean;
    isAcceptingMessage : boolean;
    messages : Message[]

}

const UserSchema : Schema<User> = new Schema({

    username : {
        type : String,
        required: [true, "username is required"],
        unique:true,
        trim : true
    },
    email : {
        type : String,
        required:[true , "email is required"],
        trim : true
    },
    password : {
        type : String,
        required : [true , "password is required"]
    },
    verifyCode : {
        type:Number,
        required : true
    },
    verifyCodeExpiry : {
        type : Date,
        required:[true , "verify code expiry is required"]
    },
    isVerified : {
        type : Boolean,
        default : false
    },
    isAcceptingMessage : {
        type : Boolean,
        default : true
    },
    messages : [MessageSchema]


})

const userModel = mongoose.models.User as mongoose.Model<User> || mongoose.model<User>("User", UserSchema);

export default userModel;