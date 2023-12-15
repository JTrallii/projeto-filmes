interface InputProps {
  type: "number";
  name: string;
  id: string;
  placeholder: string;
  value: string;
}

const Input: React.FC<InputProps> = ({ type, name, id, placeholder, value }) => {
  return (
    <>
      <input 
      type={type} 
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      />
    </>
  );
};

export default Input;