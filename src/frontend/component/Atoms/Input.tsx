type inputType = "text" | "email" | "password";
type inputProps = {
  type: inputType;
  placeholder?: string;
  className?: string;
};

const Input = (props: inputProps) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={`w-full bg-gray-300 h-11 px-3 rounded-md outline-none ${props.className}`}
    />
  );
};

export default Input;
