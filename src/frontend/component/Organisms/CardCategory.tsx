import { Link } from "react-router-dom";

type cardCategoryProps = {
  img: string;
  href: string;
};
const CardCategory = (props: cardCategoryProps) => {
  return (
    <Link to={`/products/${props.href}`}>
      <div className="w-[5rem] h-[5rem] lg:w-[5.5rem] lg:h-[5.5rem] bg-[#D9D9D9] flex justify-center rounded-lg items-center">
        <img
          src={`/src/frontend/assets/categories/${props.img}`}
          alt=""
          className="w-1/2"
        />
      </div>
    </Link>
  );
};

export default CardCategory;
