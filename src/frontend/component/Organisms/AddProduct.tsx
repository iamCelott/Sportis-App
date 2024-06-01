interface AddProductProps {
  setShowModal: (value: boolean) => void;
}

const AddProduct = (props: AddProductProps) => {
  const handleClose = () => {
    props.setShowModal(false);
  };
  return (
    <>
      <div className="absolute flex w-screen h-screen bg-[rgba(0,0,0,0.5)] top-0 left-0 z-40 justify-center items-center">
        <div className="w-3/4 h-[300px] bg-white">
          <img
            src="/src/frontend/assets/svg/cancel-svgrepo-com.svg"
            className="w-7"
            alt=""
            onClick={handleClose}
          />
        </div>
      </div>
    </>
  );
};

export default AddProduct;
