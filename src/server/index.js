import express from 'express';
import jwt from 'express-jwt';
import graphqlHTTP from 'express-graphql';
import dotenv from 'dotenv';

import schema from './schema';

dotenv.config();

const app = express();

app.use('/', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(process.env.SERVER_EXPRESS_PORT, () => console.log(`'listening to port ${process.env.SERVER_EXPRESS_PORT}`));