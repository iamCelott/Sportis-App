import { Sequelize } from "sequelize";

const sequelize = new Sequelize("db_sportis_app", "postgres", "d3v99313", {
  host: "localhost",
  dialect: "postgres",
});

export default sequelize;
