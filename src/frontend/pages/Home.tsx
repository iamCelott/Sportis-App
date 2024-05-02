import Navbar from "../component/templates/Navbar";
import HomeLayout from "../component/Layouts/HomeLayout";
import CarouselSlider from "../component/Organisms/CarouselSlider";
import CategoryFragment from "../component/Organisms/CategoryFragment";
import StickyDownloadButton from "../component/Organisms/StickyDownloadButton";
import Recommendations from "../component/Organisms/Recommendations";
const Home = () => {
  return (
    <>
      <Navbar />
      <HomeLayout>
        <CarouselSlider />
        <CategoryFragment />
        <Recommendations />
      </HomeLayout>
      <StickyDownloadButton />
    </>
  );
};

export default Home;
