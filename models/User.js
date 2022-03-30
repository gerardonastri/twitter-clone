import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        
    },
    phone: {
        type: String,
        
    },
    password: {
        type: String,
        
    },
    img: {
        type: String,
        default: 'https://icon-library.com/images/default-user-icon/default-user-icon-8.jpg'
    },
    bgImg: {
        type: String,
        default: 'https://oliveirabruno.com/images/bg-box.jpg'
    },
    bio: {
        type: String
    },
    followers: {
        type: Array,
        default: [],
        ref: 'User'
    },
    following: {
        type: Array,
        default: [],
        ref: 'User'
    },
    dateOfBirth: {
        type: String
    },
    location: {
        type: String
    },
    website: {
        type: String
    }
}, {timestamps: true})

export default mongoose.models.User || mongoose.model('User', UserSchema)

