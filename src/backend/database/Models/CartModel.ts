import { Model, DataTypes } from "sequelize";
import conn from "../config/Connection";
import { User } from "./UserModel";
import { Product } from "./ProductModel";

interface cartAttribute {
  id?: number;
  user_id: number;
  product_id: number;
  quantity: number;
}

export class Cart extends Model<cartAttribute> {
  declare id: number;
  declare user_id: number;
  declare product_id: number;
  declare quantity: number;
}

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

User.hasMany(Cart, { foreignKey: "user_id" });
Product.hasMany(Cart, { foreignKey: "product_id" });
Cart.belongsTo(User, { foreignKey: "user_id" });
Cart.belongsTo(Product, { foreignKey: "product_id" });
