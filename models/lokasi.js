import { Sequelize } from "sequelize";
import database from "../db/config.js";

const { DataTypes } = Sequelize;

const Lokasi = database.define(
  "acara",
  {
    long: DataTypes.STRING,
    lat: DataTypes.STRING,
    pesan: DataTypes.STRING,
    tingker: DataTypes.TINYINT,
  },
  {
    freezeTableName: true,
  }
);

export default Lokasi;

(async () => {
  await Lokasi.sync();
})();
