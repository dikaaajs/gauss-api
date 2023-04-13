import { Sequelize } from "sequelize";

const database = new Sequelize("los_ainos", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default database;
