import { useState } from "react";
import Button from "../Atoms/Button";
import Input from "../Atoms/Input";
import { Link } from "react-router-dom";
import Modal from "../Organisms/Modal";
const FormLogin = () => {
  const [succesOrNot, setSuccesOrNot] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [statusText, setStatusText] = useState({
    text: "",
    buttonText: "",
    linkTo: "",
  });

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e: any) => {
    e.preventDefault;

    if (Object.values(inputValue).some((value) => value === "")) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputValue),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status === 200) {
          localStorage.setItem("userId", data.userId);
          setStatusText({
            text: "Login Successful",
            buttonText: "Go To Homepage",
            linkTo: "",
          });
          setSuccesOrNot(true);
        } else {
          setSuccesOrNot(false);
          setStatusText({
            text: "Login Failed",
            buttonText: "Login Again",
            linkTo: "login",
          });
        }
      }
    } catch (e) {
      setSuccesOrNot(false);
      setStatusText({
        text: "Login Failed",
        buttonText: "Login Again",
        linkTo: "login",
      });
    }
    setShowModal(true);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className=" py-3 border-2 shadow-xl">
        <h1 className="font-bold uppercase text-center p-3">login</h1>

        <div className="flex flex-col gap-3 p-3 px-10">
          <label htmlFor="email">Email: </label>
          <Input
            type="email"
            name="email"
            placeholder="email"
            id="email"
            onChange={handleChange}
          />

          <label htmlFor="password">Password: </label>
          <Input
            type="password"
            name="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
          />
          <Button variant="primary" onClick={handleLogin}>
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

export default FormLogin;
