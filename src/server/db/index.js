import mongoose from 'mongoose';
import config from './config';

mongoose.connect(config.url, config.config);

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
    console.log("Connection with database succeeded.");
});

export default db;