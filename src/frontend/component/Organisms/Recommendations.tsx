import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Recommendations = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
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
      <p className="font-bold 2xl:text-xl py-3">Selected Categories</p>
      <div className=" overflow-x-auto flex gap-2 p-2 mb-10">
        {data.slice(0, 10).map((item: any, index: number) => (
          <Link to={`/product/${item.name}/${item.id}`} key={index}>
            <div className="flex-shrink-0 h-[20rem] w-[15rem] shadow-lg bg-white rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt=""
                className="w-full h-1/2 object-cover"
              />
              <div className="border-t-2 border-[rgba(0,0,0,0.2)] p-2 flex flex-col justify-between h-1/2">
                <div id="header">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="font-bold">
                    Rp.{" "}
                    {item.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </p>
                </div>
                <div className="overflow-hidden"></div>
                <div id="footer">
                  <span>{item.ratings}</span>
                  <span className="px-2">|</span>
                  <span>{item.sell}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Recommendations;
