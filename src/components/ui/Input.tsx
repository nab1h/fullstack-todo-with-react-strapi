import type { InputHTMLAttributes } from "react";
interface Iprops extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  name: string;
  color?: "red" | "blue";
  className?: string;
}
const Input = ({ type, placeholder, name,className, ...rest }: Iprops) => {
  return (
    <input
      className={`border border-gray-300 rounded-sm px-2 py-3 text-black input ${className? className : ""}`}
      type={type}
      placeholder={placeholder}
      name={name}
      style={{marginTop:10 ,padding:10}}
      {...rest}
    />
  );
};
export default Input;
