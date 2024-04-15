import Button from "../Atoms/Button";
import Input from "../Atoms/Input";
const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 bg-white z-50 mb-3">
        <nav className="w-full h-20 bg-[#4A25DB] rounded-bl-[40%] rounded-br-[40%] border-b-8 shadow-xl border-gray-500">
          <div className="flex float-end items-center pt-3 pr-3 gap-2">
            <img src="/src/assets/logo.png" alt="" className="w-10" />
            <span className="font-poppins text-white font-semibold">
              Username
            </span>
          </div>

          <div className="flex flex-col items-center absolute left-[50%] right-[50%] top-5">
            <span className="font-poppins  text-xl">
              <span className="text-[#05FF00]">Sport</span>
              <span className="text-white">is</span>
            </span>

            <a href="/">
              <div className="w-16 h-16 bg-[#CBCBCB] rounded-full flex">
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
          <div className="sm:w-[70%] max-w-[1024px] px-3 mx-auto h-11 my-11 flex justify-between gap-3">
            <Button
              type="button"
              className="hidden rounded-md sm:inline-block w-[110px] text-xs px-3"
              onClick={() => console.log("Clicked")}
              variant="primary"
            >
              Download Sportis App
            </Button>
            <div className="flex-grow">
              <Input type="text" className="sm:ml-0" placeholder="Search..." />
              <div className="flex text-xs sm:text-[0.6rem] md:text-xs lg:text-sm gap-2 md:gap-3 font-semibold py-3 sm:ml-0">
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
              <span>
                <img
                  className="cursor-pointer"
                  src="/src/frontend/assets/icons/shoppingcart.png"
                  alt="shoppingcart"
                  onClick={() => alert("OK")}
                />
              </span>
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
    </>
  );
};

export default Navbar;
