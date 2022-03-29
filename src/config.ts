import dotenv from "dotenv";

dotenv.config();

//console.log(process.env.test);

export default {
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'videosdb',
    MONGO_USER: process.env.MONGO_USER ||'admin',
    MONGO_PASSWORD: process.env.MONGO_ADMIN ||'admin',
    MONGO_HOST: process.env.MONGO_HOST ||'localhost'
}