const dotenv = require('dotenv');

const config = dotenv.config();

module.exports = {
    "apps": [
        {
            "name": "server",
            "script": "./dist/index.js",
            "watch": config.SERVER_WATCH,
            "env": {
                "NODE_ENV": "development",
                "SERVER_PORT": config.SERVER_EXPRESS_PORT,
                "pretty": config.ELECTRON_PRETTY_QL,
                "MONGO": {
                    "host": config.ELECTRON_MONGO_HOST,
                    "port": config.ELECTRON_MONGO_PORT,
                }
            },
            "instances": config.SERVER_INSTANCES,
            "exec_mode": "cluster",
        },
    ],
};