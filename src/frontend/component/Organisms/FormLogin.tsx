import Button from "../Atoms/Button";
import Input from "../Atoms/Input";
import { Link } from "react-router-dom";
const FormLogin = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className=" py-3 border-2 shadow-xl">
        <h1 className="font-bold uppercase text-center p-3">login</h1>

        <div className="flex flex-col gap-3 p-3 px-10">
          <label htmlFor="email">Email: </label>
          <Input type="email" name="email" placeholder="email" id="email" />

          <label htmlFor="password">Password: </label>
          <Input
            type="password"
            name="password"
            placeholder="password"
            id="password"
          />
          <Button variant="primary" onClick={() => console.log("klik")}>
            Login
          </Button>
          <p>
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500 text-sm">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
