import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Atoms/Button";
import AddProduct from "../Organisms/AddProduct";
const FormShop = () => {
  const [userId, setUserId] = useState<number>(0);
  const [showModal, setShowModal] = useState<boolean>(false);
  const checkLogin = () => {
    const localUserId = localStorage.getItem("userId");
    if (localUserId) {
      setUserId(parseInt(localUserId));
    }
  };

  useEffect(() => {
    checkLogin();
  }, [userId]);

  if (userId == 0) {
    return (
      <>
        <div className=" flex flex-col justify-center items-center py-32">
          <h1 className="text-sm lg:text-lg text-slate-600 select-none">
            Log in first to use the shop features...{" "}
            <Link to="/login" className="text-blue-900">
              Login Here
            </Link>
          </h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="">
          <div className="flex justify-between items-center pb-3">
            <h1 className="text-xs">Your Product:</h1>
            <Button
              variant="primary"
              size="xs"
              onClick={() => setShowModal(true)}
            >
              Add Product {"+"}
            </Button>
          </div>
          <div className="bg-red-300 flex h-32"></div>
        </div>
        {showModal ? <AddProduct setShowModal={setShowModal} /> : <></>}
      </>
    );
  }
};

export default FormShop;
