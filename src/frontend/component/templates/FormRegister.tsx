import { useState } from "react";
import Button from "../Atoms/Button";
import Input from "../Atoms/Input";
import { Link } from "react-router-dom";
import Modal from "../Organisms/Modal";

const FormRegister = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    picture: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [succesOrNot, setSuccesOrNot] = useState(false);
  const [statusText, setStatusText] = useState({
    text: "",
    buttonText: "",
    linkTo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setUserData((prevUserData) => ({
      ...prevUserData,
      picture: `https://ui-avatars.com/api/?name=${prevUserData.name}.jpg&background=random`,
    }));
  };

  const handleRegister = async (e: any) => {
    e.preventDefault;

    if (Object.values(userData).some((value) => value === "")) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(userData),
      });
      setSuccesOrNot(true);
      setStatusText({
        text: "Success to Create an Account",
        buttonText: "Go To Login Page",
        linkTo: "login",
      });
    } catch (e) {
      setStatusText({
        text: "Failed to Create an Account",
        buttonText: "Register Again",
        linkTo: "register",
      });
      setSuccesOrNot(false);
    }
    setShowModal(true);
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className=" py-3 border-2 shadow-xl">
        <h1 className="font-bold uppercase text-center p-3">Register</h1>

        <div className="flex flex-col gap-3 p-3 px-10">
          <label htmlFor="name">Name: </label>
          <Input
            type="text"
            name="name"
            placeholder="name"
            id="name"
            required={true}
            onChange={handleChange}
          />

          <label htmlFor="email">Email: </label>
          <Input
            type="email"
            name="email"
            placeholder="email"
            id="email"
            required={true}
            onChange={handleChange}
          />

          <label htmlFor="username">Username: </label>
          <Input
            type="text"
            name="username"
            placeholder="username"
            id="username"
            required={true}
            onChange={handleChange}
          />

          <label htmlFor="password">Password: </label>
          <Input
            type="password"
            name="password"
            placeholder="password"
            id="password"
            required={true}
            onChange={handleChange}
          />
          <Button variant="primary" type={"submit"} onClick={handleRegister}>
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
      {showModal && (
        <Modal
          text={statusText.text}
          buttonText={statusText.buttonText}
          succesOrNot={succesOrNot}
          linkTo={statusText.linkTo}
        />
      )}
    </div>
  );
};
export default FormRegister;
