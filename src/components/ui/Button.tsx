import type { ReactNode, ButtonHTMLAttributes } from "react";
import "./style.scss";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color: "green" | "red" | "blue";
  className?: string;
  type: "submit" | "reset" | "button";
}
const Button = ({ children, color,className,type, ...rest }: Iprops) => {
  return (
    <button
      type={type}
      className={`text-white font-medium rounded-sm cursor-pointer input ${className? className : ""}`}
      style={{ backgroundColor: color,paddingLeft:20,paddingRight:20}}
      {...rest}

    >
      {children}
    </button>
  );
};
export default Button;
