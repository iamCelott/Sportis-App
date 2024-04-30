import Navbar from "../component/templates/Navbar";
import HomeLayout from "../component/Layouts/HomeLayout";
import CarouselSlider from "../component/Organisms/CarouselSlider";
import CategoryFragment from "../component/Organisms/CategoryFragment";
const Home = () => {
  return (
    <>
      <Navbar />
      <HomeLayout>
        <CarouselSlider />
        <CategoryFragment />
      </HomeLayout>
    </>
  );
};

export default Home;
