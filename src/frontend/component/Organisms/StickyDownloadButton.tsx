import Button from "../Atoms/Button";
function StickyDownloadButton() {
  return (
    <Button
      variant="primary"
      className={`fixed ${
        window.innerWidth >= 1024 ? "hidden" : ""
      } bottom-4 right-4 text-white font-bold w-16 h-16 rounded-full px-0 py-0 cursor-pointer`}
      onClick={() => {
        // Logika untuk mengunduh file
        console.log("File downloaded!");
      }}
    >
      <img
        src="/src/frontend/assets/svg/download-square-svgrepo-com.svg"
        className="w-1/2 mx-auto"
        alt=""
      />
    </Button>
  );
}

export default StickyDownloadButton;
