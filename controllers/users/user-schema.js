import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    role :{
        type: String,
        required: true,
        enum: ['Gold','Bronze','Admin']
    },
    email: {
        type: String,
        required: true
    },
    city: String,
    phoneNumber: String,
    Iam: String,
    facebook: String,
    twitter: String,
    linkedin: String,
    instagram: String,
    following:String,
    followers: String,
    review:String,
    favorites: String
}, {versionKey: false,
    collection: 'users'});

export default UserSchema;

