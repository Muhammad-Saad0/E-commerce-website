import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import cookieParser from "cookie-parser";
import Routes from "./Routes/Routes.js";
import mongoose from "mongoose";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.json({ limit: "100mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "100mb",
    extended: true,
  })
);
app.use(cookieParser());

app.use(Routes);

mongoose.set("strictQuery", true);

const CONNECTION_URL = `mongodb://doritozz349:SN86HwLiRZfBUKtE@ac-jthtwn0-shard-00-00.syvd46i.mongodb.net:27017,ac-jthtwn0-shard-00-01.syvd46i.mongodb.net:27017,ac-jthtwn0-shard-00-02.syvd46i.mongodb.net:27017/?ssl=true&replicaSet=atlas-49ruya-shard-0&authSource=admin&retryWrites=true&w=majority`;

const PORT = process.env.PORT || 4000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(
        `Server running on port: ${PORT}`
      );
    })
  )
  .catch((error) => {
    console.log(error.message);
  });
