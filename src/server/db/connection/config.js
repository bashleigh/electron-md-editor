export default {
    url: `mongodb://${process.env.SERVER_MONGO_HOST}:${process.env.SERVER_MONGO_PORT}`,
    config: {
        keepAlive: true,
    },
};