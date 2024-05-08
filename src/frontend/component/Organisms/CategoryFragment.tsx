import CardCategory from "./CardCategory";
const CategoryFragment = () => {
  return (
    <>
      <p className="font-bold 2xl:text-xl py-3">Selected Categories</p>

      <div className="w-full flex gap-3 overflow-x-auto sm:justify-between">
        <CardCategory img="category-1.png" href="americanfootball" />
        <CardCategory img="category-2.png" href="sepakbola" />
        <CardCategory img="category-3.png" href="tennis" />
        <CardCategory img="category-4.png" href="baseball" />
        <CardCategory img="category-5.png" href="golf" />
        <CardCategory img="category-6.png" href="basket" />
        <CardCategory img="category-7.png" href="tenismeja" />
      </div>
    </>
  );
};

export default CategoryFragment;
