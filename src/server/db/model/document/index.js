import mongoose from 'mongoose';

export default (db) => {
    return db.model('documents', {
        id: mongoose.Schema.Types.ObjectId,
        title: {
            type: String,
            required: true,
        },
        content: Array,
        author: {
            type: Number,
            ref: 'users',
        },
    });
}