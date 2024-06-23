type inputType = "text" | "email" | "password" | "date" | "file";
type inputProps = {
  type: inputType;
  placeholder?: string;
  name?: string;
  id?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  custom?: boolean;
  style?: any;
};

const Input = (props: inputProps) => {
  const { custom = false } = props;

  if (custom) {
    return (
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
        style={props.style}
        onChange={props.onChange}
        required={props.required}
        className={`${props.className}`}
      />
    );
  } else {
    return (
      <input
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
        onChange={props.onChange}
        required={props.required}
        className={` bg-gray-300 text-sm py-2 px-3 rounded-md outline-none ${props.className}`}
      />
    );
  }
};

export default Input;
