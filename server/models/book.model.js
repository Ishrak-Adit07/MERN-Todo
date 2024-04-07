import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        author: {
            type: String,
            required: true
        },
        publisher: {
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

export const Book = mongoose.model('Book', bookSchema);
