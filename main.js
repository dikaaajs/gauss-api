import express from "express";
import routes from "./routes/routes.js";
import bodyParser from "body-parser";

// import cors from "cors";
import connectDB from "./db/mongodb.js";
connectDB();

import * as dotenv from "dotenv";
dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
    origin: true,
  })
);

app.use(routes);

// app.listen(process.env.PORT, '0.0.0.0', () => console.log(`LISTENING ON PORT ${process.env.PORT}`))
app.listen(process.env.PORT, () => {
  console.log("aplikasi berjalan pada port 3000");
});
