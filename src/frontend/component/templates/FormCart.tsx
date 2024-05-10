import Button from "../Atoms/Button";
const FormCart = () => {
  return (
    <>
      <div className="px-3 max-w-[425px] sm:max-w-[640px] lg:max-w-[768px] xl:max-w-[1024px] mx-auto z-10 font-sans">
        <h1 className="font-bold text-xl pb-3">Shopping Cart</h1>
        <ul className="w-full flex flex-col gap-3">
          <li className=" border-t-4 border-b-4 border-[rgba(0,0,0,0.2)] flex py-3 justify-between">
            <div className="flex gap-5 pl-10">
              <img
                src="/src/frontend/assets/carousel/hero2.jpg"
                alt=""
                className="h-32 w-32 object-cover"
              />
              <div className="flex flex-col justify-center">
                <h1 className="font-semibold text-xl">Apple Juice</h1>
                <span>200ml</span>
              </div>
            </div>
            <div className="flex items-center pr-10 gap-32">
              <div className="flex items-center gap-3">
                <Button variant="secondary" className="rounded-full">
                  +
                </Button>
                <span>2</span>
                <Button variant="secondary" className="rounded-full">
                  -
                </Button>
              </div>
              <div className="flex flex-col items-end">
                <h1 className="font-semibold text-xl ">Rp. 600.000</h1>
                <span className="underline cursor-pointer">Remove All</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FormCart;
