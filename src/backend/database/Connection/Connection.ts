import { Sequelize } from "sequelize";

const conn = new Sequelize("db_sportis_app", "postgres", "d3v99313", {
  host: "localhost",
  dialect: "postgres",
});

export default conn;
