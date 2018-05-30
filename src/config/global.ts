import { ConfigI } from "./cfg";

const CONFIG_DEV: ConfigI = {
    database: {
        host: "localhost",
        bucket: "words",
        username: "admin",
        password: "123456"
    },
    syncgateway: {
        host: "http://localhost:4985",
        db: "words"
    }
};


const CONFIG_PROD: ConfigI = {
    database: {
        host: "localhost",
        bucket: "words",
        username: "admin",
        password: "123456"
    },
    syncgateway: {
        host: "http://localhost:4985",
        db: "words"
    }
};

const env = process.env.NODE_ENV || "development";
export const config = env == "development" || env == "test" ? CONFIG_DEV : CONFIG_PROD;