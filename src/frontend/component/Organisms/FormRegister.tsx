import { useState } from "react";
import { UniqueConstraintError } from "sequelize";
import User from "../../../backend/database/Models/UserModel";
import Button from "../Atoms/Button";
import Input from "../Atoms/Input";
import { Link } from "react-router-dom";
const FormRegister = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const newUser = await User.create(userData);
      console.log("User created:", newUser.toJSON());
    } catch (error) {
      if (error instanceof UniqueConstraintError) {
        // Tangani kesalahan jika username sudah ada dalam database
        console.error("Username already exists:", error);
      } else {
        // Tangani kesalahan lainnya
        console.error("Error creating user:", error);
      }
    }
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className=" py-3 border-2 shadow-xl">
        <h1 className="font-bold uppercase text-center p-3">Register</h1>

        <div className="flex flex-col gap-3 p-3 px-10">
          <label htmlFor="email">Name: </label>
          <Input type="text" name="name" placeholder="name" id="name" />

          <label htmlFor="email">Email: </label>
          <Input type="email" name="email" placeholder="email" id="email" />

          <label htmlFor="email">Username: </label>
          <Input
            type="text"
            name="username"
            placeholder="username"
            id="username"
          />

          <label htmlFor="password">Password: </label>
          <Input
            type="password"
            name="password"
            placeholder="password"
            id="password"
          />
          <Button variant="primary" onClick={() => console.log("klik")}>
            Register
          </Button>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 text-sm">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
