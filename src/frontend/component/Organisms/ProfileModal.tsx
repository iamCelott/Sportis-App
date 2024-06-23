import { useEffect, useState } from "react";
import Input from "../Atoms/Input";
import Button from "../Atoms/Button";
interface ProfileModalProps {
  setShowModal: (value: boolean) => void;
}

const ProfileModal = (props: ProfileModalProps) => {
  const [data, setData] = useState([]);
  const [dateChange, setDateChange] = useState(false);
  const [genderChange, setGenderChange] = useState(false);
  const [callNumberChange, setCallNumberChange] = useState(false);
  const [userId, setUserId] = useState(() => localStorage.getItem("userId"));
  const [userData, setUserData] = useState({
    date: "",
    call_number: "",
    gender: "",
  });

  const closeModal = () => {
    props.setShowModal(false);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/user/${userId}`);
      const result = await response.json();
      setData(result);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = async (e: any) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    if (e.target.name === "date") {
      setDateChange(true);
    } else if (e.target.name === "gender") {
      setGenderChange(true);
    } else if (e.target.name === "call_number") {
      setCallNumberChange(true);
    }
  };

  const handleDate = async () => {
    try {
      const response = await fetch("http://localhost:3000/user-date-update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId, date: userData.date }),
      });
    } catch (e) {
      console.log(e);
    }
    setDateChange(false);
  };

  const handleGender = async () => {
    try {
      const response = await fetch("http://localhost:3000/user-gender-update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId, gender: userData.gender }),
      });
    } catch (e) {
      console.log(e);
    }
    setGenderChange(false);
  };

  const handleCallNumber = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/user-call-number-update",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_id: userId,
            callNumber: userData.call_number,
          }),
        }
      );
    } catch (e) {
      console.log(e);
    }
    setCallNumberChange(false);
  };

  useEffect(() => {
    fetchData();
  }, [userId, dateChange, genderChange, callNumberChange]);

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.3)] z-40 flex justify-center items-center">
        <div data-aos="zoom-in" className="z-50 w-[500px] h-[350px] bg-white">
          <div className="flex justify-between items-center p-3">
            <h1 className="text-xl font-bold ">Profile Settings</h1>
            <img
              src="/src/frontend/assets/svg/cancel-svgrepo-com.svg"
              alt="Close"
              className="w-7 h-7 cursor-pointer"
              onClick={() => closeModal()}
            />
          </div>
          <h1 className="font-bold text-lg px-3 opacity-80">User Data</h1>
          <div className="flex p-3 gap-5">
            <div className="w-[152px] h-[152px]">
              <div className="shadow-2xl rounded-lg p-3 bg-slate-300">
                <img
                  src="/src/frontend/assets/categories/category-1.png"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 font-semibold">
              <h1>Name:</h1>
              <h1>Date of Birth:</h1>
              <h1>Gender:</h1>
              <h1>Email:</h1>
              <h1>Call Number:</h1>
            </div>

            {data.map((item: any, index: number) => (
              <div className="flex flex-col gap-2" key={index}>
                <span>{item.name}</span>
                <div className="flex items-center gap-2">
                  <span>
                    {!item.tanggal_lahir ? (
                      <Input
                        type="date"
                        name="date"
                        id="date"
                        custom
                        onChange={handleChange}
                        className="bg-gray-300 rounded-sm px-1 outline-none h-[24px]"
                      />
                    ) : (
                      item.tanggal_lahir
                    )}
                  </span>
                  <Button
                    variant="custom"
                    onClick={handleDate}
                    className={`px-1.5 bg-green-600 hover:bg-green-500 text-white ${
                      dateChange == true ? "inline-block" : "hidden"
                    }`}
                  >
                    ✓
                  </Button>
                </div>
                <div className="flex items-center gap-2 h-[24px]">
                  <span>
                    {!item.jenis_kelamin ? (
                      <select
                        name="gender"
                        id="gender"
                        onChange={handleChange}
                        className="font-semibold bg-gray-300 rounded-sm px-3 outline-none"
                      >
                        <option value="Man" className="font-semibold">
                          Man
                        </option>
                        <option value="Woman" className="font-semibold">
                          Woman
                        </option>
                      </select>
                    ) : (
                      item.jenis_kelamin
                    )}
                  </span>
                  <Button
                    variant="custom"
                    onClick={handleGender}
                    className={`px-1.5 bg-green-600 hover:bg-green-500 text-white ${
                      genderChange == true ? "inline-block" : "hidden"
                    }`}
                  >
                    ✓
                  </Button>
                </div>
                <h1>{item.email}</h1>
                <div className="flex items-center gap-2 h-[24px]">
                  <span>
                    {!item.no_telepon ? (
                      <Input
                        type="text"
                        onChange={handleChange}
                        name="call_number"
                        id="call_number"
                        custom
                        className="w-36 outline-none bg-gray-300 px-1"
                      />
                    ) : (
                      item.no_telepon
                    )}
                  </span>
                  <Button
                    variant="custom"
                    onClick={handleCallNumber}
                    className={`px-1.5 bg-green-600 hover:bg-green-500 text-white ${
                      callNumberChange == true ? "inline-block" : "hidden"
                    }`}
                  >
                    ✓
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="p-3 flex gap-2">
            <Input type="file" custom className="bg-gray-300 text-sm py-2 px-3 w-[210px]" />
            <Button variant="secondary" className="flex gap-2 items-center">
              <span>Toko Anda</span>
              <img
                src="/src/frontend/assets/icons/shoppingcart.png"
                alt=""
                className="w-7 h-7 "
              />
            </Button>
            <Button variant="secondary" className="flex gap-2 items-center">
              <span>Logout</span>
              <img
                src="/src/frontend/assets/icons/log-out.png"
                alt=""
                className="w-7 h-7 "
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
