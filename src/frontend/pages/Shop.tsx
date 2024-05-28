import Navbar from "../component/templates/Navbar";
import MainLayout from "../component/Layouts/MainLayout";
import FormShop from "../component/templates/FormShop";
const Shop = () => {
  return (
    <>
      <Navbar />
      <MainLayout>
        <FormShop />
      </MainLayout>
    </>
  );
};

export default Shop;
