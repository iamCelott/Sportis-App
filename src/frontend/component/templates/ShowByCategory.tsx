import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ShowByCategory = () => {
  const [data, setData] = useState([]);
  const { categoryname } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/category/${categoryname}`
        );
        const result = await response.json();
        setData(result);
      } catch (e) {
        console.error("Error fetching data:", e);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="px-3 max-w-[425px] sm:max-w-[640px] lg:max-w-[768px] xl:max-w-[1024px] mx-auto flex flex-wrap justify-between sm:justify-normal sm:gap-3 lg:gap-2 xl:gap-3">
      {data.map((item: any, index: number) => (
        <div
          className="h-[18rem] w-[49%] sm:w-[32%] lg:w-[24%] shadow-lg rounded-lg overflow-hidden my-1 sm:my-0"
          key={index}
        >
          <Link to={`/product/${item.name}/${item.id}`}>
            <img
              src="/src/frontend/assets/carousel/hero3.jpg"
              alt=""
              className="w-full h-1/2 object-cover"
            />
            <div className="border-t-2 border-[rgba(0,0,0,0.2)] p-2 flex flex-col justify-between h-1/2">
              <div id="header">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="font-bold">Rp. {item.price.toLocaleString()}</p>
              </div>
              <div className="overflow-hidden"></div>
              <div id="footer">
                <span>{item.ratings}</span>
                <span className="px-2">|</span>
                <span>{item.sell}</span>
                <br />
                <span>KOTA MATARAM</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShowByCategory;
