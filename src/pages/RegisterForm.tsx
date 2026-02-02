import "../App.css";
import { registerInputForm } from "../data/index";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { useState } from "react";



const RegisterFormPage = () => {
const [isData , setData] = useState<Record<string, string>>({});

const submitHandler= (e: React.ChangeEvent<HTMLInputElement>)=>{
  const {name,value} = e.target;
  setData((prev)=>({
    ...prev,
    [name]:value
  }))
}
console.log(isData);
  const renderFormRegister = registerInputForm.map((input) => {
    return (
      <Input
        key={input.name}
        type={input.type}
        placeholder={input.placeholder}
        name={input.name}
        className="my-2"
        value={isData[input.name] || ""}
        onChange={submitHandler}
      />
    );
  });
  return (
    <>
      <h2 className="text-5xl text-center">Register To Access</h2>
      <div className="my-5">
        <form>
          <div className="flex flex-col gap-4">{renderFormRegister}</div>
          <Button className="w-full py-2" children="Register" color="blue" type="submit"/>
        </form>
        <p className=" text-gray-600 text-center">
            Do you have an account?
            <span className="text-blue-500 hover:text-gray-500 duration-300">
              <Link to="/login"> Login</Link>
            </span>
          </p>
      </div>
    </>
  );
};
export default RegisterFormPage;
