import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
    {
        user_id:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        caption: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        },
        photo: {
            type: String,
        }
    },
    {
        timestamps: true // Corrected to "timestamps"
    }
);

export const Post = mongoose.model('Post', postSchema);
