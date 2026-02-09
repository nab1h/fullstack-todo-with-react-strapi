import "../App.css";
import { registerInputForm } from "../data/index";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { IRegisterInputForm } from "../interfaces";
import axiosInstance from "../config/axios.config";
import toast from "react-hot-toast";
import type { AxiosError } from "axios";
import type IErrorHandlerForm from "../interfaces";

const RegisterFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IRegisterInputForm>();

  const onSubmit: SubmitHandler<IRegisterInputForm> = async (data) => {
    toast.loading("Loading...");
    console.log(data);
    try{
      const {status} = await axiosInstance.post('/auth/local/register',data);
      if (status === 200 || status === 201) {
        toast.dismiss();
        toast.success("Successfully toasted!");
      }
    } catch (error) {
        const errorObj = error as AxiosError<IErrorHandlerForm>;
        const msg = errorObj.response?.data.error.message;
          toast.dismiss();
          toast.error(`${msg}`);
    }
  };

  const renderFormRegister = registerInputForm.map(({name,type,placeholder}, idx) => {
    const inputName = name as keyof IRegisterInputForm;

    return (
      <div key={idx} className="flex flex-col gap-1">
        <Input
          type={type}
          placeholder={placeholder}
          className={`my-2 ${errors[inputName] ? "border-red-500 focus:ring-red-500" : ""}`}
          {...register(inputName, { 
            required: `${placeholder} is required`,
          })}
        />
        
        {errors[inputName] && (
          <span className="text-red-500 text-sm ml-1">
            {errors[inputName]?.message}
          </span>
        )}
      </div>
    );
  });

  return (
    <>
      <h2 className="text-5xl text-center">Register To Access</h2>
      <div className="my-5 max-w-md mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-2">
            {renderFormRegister}
          </div>
          
          <Button 
            className="w-full py-2 mt-6" 
            color="blue" 
            type="submit" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </Button>
        </form>

        <p className="mt-4 text-gray-600 text-center">
          Do you have an account?{" "}
          <span className="text-blue-500 hover:text-blue-700 duration-300">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default RegisterFormPage;