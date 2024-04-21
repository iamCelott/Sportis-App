import { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../Atoms/Button";
import AOS from "aos";
import "aos/dist/aos.css";
type modalProps = {
  succesOrNot?: boolean;
};
const Modal = (props: modalProps) => {
  useEffect(() => {
    AOS.init({
      duration: 600, // optional, default duration is 1000ms
    });
  }, []);

  if (props.succesOrNot == true) {
    return (
      <div className="absolute z-40 top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
        <div
          data-aos="zoom-in"
          className="z-50 bg-white p-10 rounded-lg overflow-hidden relative:"
        >
          <div className="flex flex-col items-center justify-between">
            <img
              src="/src/frontend/assets/icons/successful.png"
              className="w-24 mb-3"
              alt=""
            />
            <h1 className="text-md text-center font-semibold xl:text-lg">
              Successfully Create Account
            </h1>
            <Link to="/login">
              <Button variant="primary" className="mt-10 rounded-lg">
                Go To Login Page
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else if (props.succesOrNot == false) {
    return (
      <div className="absolute z-40 top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
        <div
          data-aos="zoom-in"
          className="z-50 bg-white p-10 rounded-lg overflow-hidden relative"
        >
          <div className="flex flex-col items-center justify-between">
            <img
              src="/src/frontend/assets/icons/failed.png"
              className="w-24 mb-3"
              alt=""
            />
            <h1 className="text-md text-center font-semibold xl:text-lg">
              Failed to Create Account
            </h1>
            <Button
              onClick={() => window.location.reload()}
              variant="primary"
              className="mt-10 rounded-lg"
            >
              Register Back
            </Button>
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;
