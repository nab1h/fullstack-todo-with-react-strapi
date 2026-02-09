import "../App.css";
import { loginInputForm } from "../data/index";
// import type { IRegisterInputForm } from "../interfaces/index";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import { useForm , type SubmitHandler } from "react-hook-form";
import type { ILogin } from "../interfaces";
import toast from "react-hot-toast";
import axiosInstance from "../config/axios.config";
import type { AxiosError } from "axios";
import type IErrorHandlerForm from "../interfaces";


const LoginPage = () => {
  const { register, handleSubmit, reset } = useForm<ILogin>();
  const onSubmit: SubmitHandler<ILogin> = async (data) => {
    toast.loading("Loading...");
    try {
      const { status } = await axiosInstance.post('/auth/local', data);
        if (status === 200 || status === 201) {
          toast.dismiss();
          toast.success('done sign in successfly.');
          reset();
        }
    } catch (error) {
      const errorObj = error as AxiosError<IErrorHandlerForm>;
      const msg = errorObj.response?.data?.error.message;
      toast.dismiss();
      toast.error(`${msg}`);
    }
  };
  const renderFormlogin = loginInputForm.map(({ name, type, placeholder }) => {
    return (
      <Input
        key={name}
        type={type}
        placeholder={placeholder}
        className="my-2"
        {...register(name as keyof ILogin)}
      />
    );
  });
  return (
    <>
      <div>
        <div style={{ margin: 10 }}>
          <h2 className="text-5xl text-center">Login To Access</h2>
        </div>
        <div className="my-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">{renderFormlogin}</div>
            <Button
              className="w-full py-2"
              children="Login"
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
