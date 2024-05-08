import { Model, DataTypes } from "sequelize";
import conn from "../config/Connection";

interface userAttributes {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  picture: string;
}

export class User extends Model<userAttributes> {
  declare id: number;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: conn,
    tableName: "users",
    timestamps: false,
  }
);
