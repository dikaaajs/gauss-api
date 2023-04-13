import express from "express";
import {
  deleteLokasi,
  getAllLokasi,
  tambahLokasi,
} from "../controllers/lokasi.js";
const routes = express.Router();

routes.get("/", (req, res) => {
  return res.status(200).send("API HOME");
});

routes.get("/lokasi", getAllLokasi);
routes.post("/lokasi", tambahLokasi);
routes.delete("/lokasi/:id", deleteLokasi);

export default routes;
