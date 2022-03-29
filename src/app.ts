import express from "express";
import videoRoutes from "./routes/videos.routes";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(videoRoutes);

export default app;