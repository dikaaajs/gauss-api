import express from "express";
import routes from "./routes/routes.js";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";

// import cors from "cors";
import database from "./db/config.js";

dotenv.config();

database
  .authenticate()
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

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
