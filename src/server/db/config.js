const config = JSON.parse(process.env.MONGO);

export default {
    url: `mongodb://${config.host}:${config.port}`,
    config: {
        useMongoClient: true,
        keepAlive: true,
    },
};