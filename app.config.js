const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    apps: [
        {
            "name": "server",
            "script": "./dist/server/index.js",
            "watch": process.env.SERVER_WATCH,
            "env": {
                "NODE_ENV": "development",
            },
            "instances": process.env.SERVER_INSTANCES,
            "exec_mode": "cluster",
        },
    ],
};