import { Model, DataTypes } from "sequelize";
import conn from "../config/Connection";

interface userAttributes {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
  picture: string;
  no_telepon: string;
  jenis_kelamin: string;
  tanggal_lahir: Date;
}

export class User extends Model<userAttributes> {
  declare id: number;
  declare picture: string;
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
    no_telepon: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    jenis_kelamin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tanggal_lahir: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize: conn,
    tableName: "users",
    timestamps: false,
  }
);
