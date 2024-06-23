type UsernameAndAvatarProps = {
  img: string;
  onClick?: (e: any) => void;
  text: string;
};

const UsernameAndAvatar = ({ img, onClick, text }: UsernameAndAvatarProps) => {
  return (
    <>
      <div className="flex gap-2 cursor-pointer items-center" onClick={onClick}>
        <img
          src={img}
          alt="error"
          className="w-7 md:w-9 rounded-full hover:brightness-75"
        />
        <span className="font-poppins text-sm md:text-lg text-white font-semibold select-none">
          {text}
        </span>
      </div>
    </>
  );
};

export default UsernameAndAvatar;
