import { Model, DataTypes } from "sequelize";
import conn from "../config/Connection";

interface productAttribute {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  condition: boolean;
  image: Buffer;
}

export class Product extends Model<productAttribute> {}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    condition: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },

    image: {
      type: DataTypes.BLOB("long"),
      allowNull: true,
    },
  },
  {
    sequelize: conn,
    tableName: "users",
    timestamps: false,
  }
);
