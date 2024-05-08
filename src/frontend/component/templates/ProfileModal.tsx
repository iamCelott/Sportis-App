interface ProfileModalProps {
  setShowModal: (value: boolean) => void;
}

const ProfileModal = (props: ProfileModalProps) => {
  const closeModal = () => {
    props.setShowModal(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen bg-[rgba(0,0,0,0.3)] z-40 flex justify-center items-center">
        <div
          data-aos="zoom-in"
          className="z-50  w-[400px] h-[300px] bg-white rounded-2xl  "
        >
          <h1 className="py-2 px-4 text-xl font-bold ">Profile Settings</h1>
          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </>
  );
};

export default ProfileModal;
