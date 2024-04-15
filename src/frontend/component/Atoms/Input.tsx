type inputType = "text" | "email" | "password";
type inputProps = {
  type: inputType;
  placeholder?: string;
  name?: string;
  id?: string;
  className?: string;
  onChange?: () => void;
};

const Input = (props: inputProps) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      id={props.id}
      onChange={props.onChange}
      className={`w-full bg-gray-300 py-2 px-3 rounded-md outline-none ${props.className}`}
    />
  );
};

export default Input;
