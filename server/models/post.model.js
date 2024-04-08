import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        name: {
            type: String,
            required: true
        },
        caption: {
            type: String,
            required: true
        },
        type: {
            type: String,
        },
        year: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true // Corrected to "timestamps"
    }
);

export const Post = mongoose.model('Post', postSchema);
