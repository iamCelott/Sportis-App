import CardCategory from "../Molecules/CardCategory";
const CategoryFragment = () => {
  return (
    <>
      <p className="font-bold 2xl:text-xl py-3">Selected Categories</p>

      <div className="w-full flex gap-3 overflow-x-auto sm:justify-between">
        <CardCategory img="category-1.png" href="AmericanFootball" />
        <CardCategory img="category-2.png" href="SepakBola" />
        <CardCategory img="category-3.png" href="Tennis" />
        <CardCategory img="category-4.png" href="Baseball" />
        <CardCategory img="category-5.png" href="Golf" />
        <CardCategory img="category-6.png" href="Basket" />
        <CardCategory img="category-7.png" href="TenisMeja" />
      </div>
    </>
  );
};

export default CategoryFragment;
