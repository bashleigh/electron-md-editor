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

    schema.pre('save', function (next) {

        if (!this.isModified('password')) return next();

        const user = this;

        //TODO figure out why the below crashes?
        bcrypt.genSalt(10, function(error, salt) {
            console.log('bcrypt_error', error);
            if (error) return next(error);

            bcrypt.hash(user.password, salt, function(error, hash) {
                console.log('bcrypt_error', error);
                if (error) return next(error);

                user.password = hash;
                return next();
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