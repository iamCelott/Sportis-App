import Navbar from "../component/templates/Navbar";
import MainLayout from "../component/Layouts/MainLayout";
import CarouselSlider from "../component/Organisms/CarouselSlider";
import CategoryFragment from "../component/Organisms/CategoryFragment";
import StickyDownloadButton from "../component/Organisms/StickyDownloadButton";
import Recommendations from "../component/Organisms/Recommendations";
const Home = () => {
  return (
    <>
      <Navbar />
      <MainLayout>
        <CarouselSlider />
        <CategoryFragment />
        <Recommendations />
      </MainLayout>
      <StickyDownloadButton />
    </>
  );
};

export default Home;
