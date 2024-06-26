import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Atoms/Button";
import Input from "../Atoms/Input";
import ProfileModal from "../Organisms/ProfileModal";
import UsernameAndAvatar from "../Organisms/UsernameAndAvatar";
import AOS from "aos";
import "aos/dist/aos.css";
const Navbar = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userId, setUserId] = useState(() => {
    const localUserId = localStorage.getItem("userId");
    return localUserId ? parseInt(localUserId) : 0;
  });

  const fetchData = async () => {
    if (userId !== 0) {
      try {
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        const result = await response.json();
        setData(result);
      } catch (e) {
        console.error("Error fetching data:", e);
      }
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 400,
    });

    fetchData();
  }, [userId]);

  return (
    <>
      <header className="sticky top-0 bg-white z-40 mb-3">
        <nav className="w-full h-16 md:h-20 bg-[#4A25DB] rounded-bl-[40%] rounded-br-[40%] border-b-8 shadow-xl border-gray-500">
          {userId === 0 && (
            <Link to="/login" className="float-end pt-3 pr-3">
              <UsernameAndAvatar
                img="/src/frontend/assets/svg/login-icon.svg"
                text="Login"
              />
            </Link>
          )}

          {data.map((item: any, index: number) => (
            <div className="float-end pt-3 pr-3" key={index}>
              <UsernameAndAvatar
                img={item.picture}
                onClick={() => setShowModal(true)}
                text={item.username}
              />
            </div>
          ))}

          <div className="flex flex-col items-center absolute left-[50%] right-[50%] top-2 md:top-5">
            <span className="font-poppins text-xl">
              <span className="text-[#05FF00]">Sport</span>
              <span className="text-white">is</span>
            </span>

            <a href="/">
              <div className="w-14 md:w-16 h-14 md:h-16 bg-[#CBCBCB] rounded-full flex">
                <svg
                  className="w-10 h-10 m-auto"
                  width="74"
                  height="30"
                  viewBox="0 0 74 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_13_58)">
                    <path
                      d="M0.245056 0.245911H59.053C67.1685 0.245911 73.755 6.85575 73.755 15H14.947C6.83155 15 0.245056 8.39017 0.245056 0.245911Z"
                      fill="#2D368F"
                      stroke="#231F20"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M59.053 29.7541V15L73.755 15C73.755 23.1443 67.1685 29.7541 59.053 29.7541Z"
                      fill="white"
                      stroke="#231F20"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M7.97339 17.459H56.98V27.2951H17.7747C12.3644 27.2951 7.97339 22.8885 7.97339 17.459Z"
                      fill="#42FF00"
                      stroke="#231F20"
                      strokeMiterlimit="10"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13_58">
                      <rect width="74" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </a>
          </div>
        </nav>

        <div className="w-full">
          <div className="px-3 max-w-[425px] sm:max-w-[640px] lg:max-w-[768px] xl:max-w-[1024px] mx-auto h-11 mt-12 mb-10 flex justify-between gap-3">
            <Button
              type="button"
              className="hidden rounded-md lg:inline-block  text-xs px-3"
              onClick={() => console.log("Clicked")}
              variant="primary"
            >
              Download Sportis App
            </Button>
            <div className="flex-grow">
              <Input
                type="text"
                className="sm:ml-0 h-11 w-full"
                placeholder="Search..."
              />
              <div className="flex py-3 sm:ml-0 font-semibold text-[0.6rem] sm:text-sm sm:gap-5 gap-3">
                <a href="" className="">
                  Sneakers
                </a>
                <a href="" className="">
                  Racket
                </a>
                <a href="" className="">
                  Cuff
                </a>
                <a href="" className="">
                  Towel
                </a>
                <a href="" className="">
                  Shuttlecock
                </a>
              </div>
            </div>
            <div className="w-[110px] flex gap-2 justify-between items-center">
              <Link to="/cart">
                <span>
                  <img
                    className="cursor-pointer"
                    src="/src/frontend/assets/icons/shoppingcart.png"
                    alt="shoppingcart"
                  />
                </span>
              </Link>

              <span>
                <img
                  className="cursor-pointer"
                  src="/src/frontend/assets/icons/notif.png"
                  alt="notif"
                  onClick={() => alert("OK")}
                />
              </span>
              <span>
                <img
                  className="cursor-pointer"
                  src="/src/frontend/assets/icons/mail.png"
                  alt="mail"
                  onClick={() => alert("OK")}
                />
              </span>
            </div>
          </div>
        </div>
        <hr className="border-black opacity-50" />
      </header>
      {showModal && <ProfileModal setShowModal={setShowModal} />}
    </>
  );
};

export default Navbar;
