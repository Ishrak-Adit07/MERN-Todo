import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
        }
    },
    {
        timestamps: true // Corrected to "timestamps"
    }
);

export const User = mongoose.model('User', userSchema);
