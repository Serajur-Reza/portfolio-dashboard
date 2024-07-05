import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../queryHooks/auth/useLogin";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { mutateAsync: login } = useLogin();
  const onSubmit = async (data: any) => {
    console.log(data);
    const res = await login(data);
    console.log(res);

    if (res?.status === 200) {
      console.log(res);
      localStorage.setItem("authToken", res.data.data.token);
      navigate("/");
      toast.success("successfully logged in");
    }
  };
  return (
    <div className="container mx-auto">
      {" "}
      <h1 className="text-2xl font-bold text-center">SignIn</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center items-center">
          <input
            // name="email"
            type="email"
            placeholder="Enter your email"
            className=" pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            {...register("email")}
          />
        </div>
        <div className="flex justify-center items-center">
          <input
            type="password"
            placeholder="Enter your password"
            className=" pl-3 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
            {...register("password")}
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
