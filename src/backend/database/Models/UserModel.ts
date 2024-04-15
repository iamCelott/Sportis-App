import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../Connection/Connection";

interface userAttributes {
  id: number;
  name: string;
  email: string;
  username: string;
  password: string;
}

interface userCreationAttributes extends Optional<userAttributes, "id"> {}

class User
  extends Model<userAttributes, userCreationAttributes>
  implements userAttributes
{
  public id!: number;
  public name!: string;
  public email!: string;
  public username!: string;
  public password!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
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
      validate: {
        isEmail: true,
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [4, 50],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 50],
      },
    },
  },
  {
    sequelize,
    modelName: "users",
    timestamps: false,
  }
);

export default User;
