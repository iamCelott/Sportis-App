import { Model, DataTypes } from "sequelize";
import conn from "../config/Connection";

interface cartAttribute {
  id: number;
  user_id: number;
  product_id: number;
  quantity: number;
}

export class Cart extends Model<cartAttribute> {}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: conn,
    tableName: "cart",
    timestamps: false,
  }
);
