import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export default (db) => {

    const schema = new mongoose.Schema({
        id: mongoose.Schema.Types.ObjectId,
        firstname: String,
        lastname: String,
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        documents: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'documents',
        },
    });

    schema.pre('save', (next) => {
        if (!this.isModified('password')) return next();

        const user = this;

        bcrypt.genSalt(10, (error, salt) => {
            if (error) return next(error);

            bcrypt.hash(user.password, salt, (error, hash) => {

                if (error) return next(error);

                user.password = hash;
                next();
            });
        });
    });

    schema.methods.comparePassword = (candidatePassword, cb) => {
        bcrypt.compare(candidatePassword, this.password, (error, isMatch) => {
            if (error) return cb(error);
            cb(null, isMatch);
        });
    };

    return db.model('users', schema);
};