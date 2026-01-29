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
      className={`text-white rounded-sm px-2 py-1 mt-4 cursor-pointer input ${className? className : ""}`}
      style={{ backgroundColor: color,marginTop:30 ,padding:10}}
      {...rest}

    >
      {children}
    </button>
  );
};
export default Button;
