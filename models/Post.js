import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
    user: {
        /*type: mongoose.Schema.Types.ObjectId,
        ref: 'User'*/
        type: Object
    },
    description: {
        type: String,
        max: 500
    },
    img: {
        type: String
    },
    likes: {
        type: Array,
        default: []
    },
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            text: {
                type: String
            }
        }
    ]
}, {timestamps: true})

export default mongoose.models.Post || mongoose.model('Post', PostSchema)

