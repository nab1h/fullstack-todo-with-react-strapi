import "../App.css";
import { loginInputForm } from "../data/index";
import type { IRegisterInputForm } from "../interfaces/index";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const login: IRegisterInputForm[] = loginInputForm;
  const renderFormlogin = login.map((input) => {
    return (
      <Input
        key={input.name}
        type={input.type}
        placeholder={input.placeholder}
        name={input.name}
        className="my-2"
      />
    );
  });
  return (
    <>
      <div>
        <div style={{margin:10}}>
          <h2 className="text-5xl text-center">Login To Access</h2>
        </div>
        <div className="my-5">
          <form>
            <div className="flex flex-col gap-4">{renderFormlogin}</div>
            <Button
              className="w-full py-2"
              children="Register"
              color="blue"
              type="submit"
            />
          </form>
          <p className=" text-gray-600 text-center">
            Don't you have an account?
            <span className="text-blue-500 hover:text-gray-500 duration-300">
              <Link to="/register"> Register</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
