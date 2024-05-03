import { useEffect, useState } from "react";
import Button from "../Atoms/Button";
import { useParams } from "react-router-dom";
const FormProduct = () => {
  const [data, setData] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/product/${name}`);
        const result = await response.json();
        setData(result);
      } catch (e) {
        console.error("Error fetching data:", e);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="px-3 max-w-[425px] sm:max-w-[640px] lg:max-w-[768px] xl:max-w-[1024px] mx-auto z-10 font-sans sm:flex sm:gap-3">
        <img
          src="/src/frontend/assets/carousel/hero1.jpg"
          alt=""
          className="w-full h-[250px] sm:h-1/2 sm:w-1/2 object-cover"
        />
        <div className="">
          <h1 className="font-bold pt-2 sm:pt-0 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
            voluptatum.
          </h1>
          <div className="flex gap-4">
            <p>
              Sold <span>2</span> rb+
            </p>
            <p>(234 ratings)</p>
            <p>Discussion(8)</p>
          </div>
          <h1 className="font-semibold text-lg">
            Rp. <span>544.922</span>
          </h1>

          <div className="flex my-3 gap-10 border-b-2 border-t-2 border-[rgba(0,0,0,0.4)]">
            <span>Details</span>
            <span>Important Information</span>
          </div>

          <div className="flex flex-col gap-3">
            <div className="">
              <h1>
                Condition: <span>New</span>
              </h1>
              <h1>
                Minimum Order: <span>1 Piece</span>
              </h1>
              <h1>
                Showcase: <span>Bag</span>
              </h1>
            </div>
            <div className="flex gap-3">
              <Button
                variant="secondary"
                type="button"
                className="rounded-lg w-1/2"
                onClick={() => console.log(data)}
              >
                Add To Cart
              </Button>
              <Button
                variant="primary"
                type="button"
                className="rounded-lg w-1/2"
              >
                Order Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormProduct;
