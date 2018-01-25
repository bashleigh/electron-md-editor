import mongoose from 'mongoose';
import config from './config';

mongoose.connect(config.url, config.config);

mongoose.Promise = global.Promise;

const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error'));
connection.once('open', () => {
    console.log("Connection with database succeeded.");
});

export default connection;