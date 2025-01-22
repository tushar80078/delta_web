import React from "react";
import loginPageImage from "../../../assets/images/loginImage.png";
import { Label } from "@radix-ui/react-label";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "@/lib/form-schema";
import { useLoginMutation } from "@/redux/store/apiSlice/auth.api";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FiArrowRight } from "react-icons/fi";
import { signInMethodsDetails } from "./LoginUtils";
import Navbar from "../Navbar";
import toast from "react-hot-toast";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginFn, { error, isError, isLoading }] = useLoginMutation();

  // console.log(error);
  console.log("is error", isError);
  console.log("is isLoading", isLoading);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });
  const onSubmit = async (data) => {
    const respones = await loginFn(data);

    if (respones.data) {
      navigate("/");
    } else {
      toast.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-[100vh]  flex  mx-5 pt-16  ">
        {/* left */}
        <div className="w-4/6 flex justify-center items-center ">
          <div className=" h-[55vh] w-[80%]  ml-20">
            <h1 className="text-center text-gray-900 text-3xl font-medium mb-5">
              Sign in to your account
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid w-full items-center gap-4 ">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name" className="mb-2 font-medium">
                    Email
                  </Label>
                  <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, value } }) => (
                      <Input
                        id="name"
                        placeholder="Username or Email ID"
                        type={"Email"}
                        onChange={onChange}
                        value={value}
                        className="py-6"
                      />
                    )}
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name" className="mb-2 font-medium">
                    Password
                  </Label>

                  <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, value } }) => (
                      <Input
                        id="password"
                        placeholder="Enter Password"
                        type="password"
                        onChange={onChange}
                        value={value}
                        className="py-6"
                      />
                    )}
                  />
                </div>
                <div>
                  <Button className="bg-gray-900 py-5 border hover:bg-white hover:border-gray-600 hover:text-gray-700 text-white font-medium">
                    Sign in <FiArrowRight />
                  </Button>
                </div>

                <div>
                  <div className="flex  items-center ">
                    <div className="bg-[#94A3B8]  h-[1px] w-2/4"></div>
                    <span className="text-[#94A3B8] text-sm  flex w-1/4 ml-7 tracking-wider">
                      Sign in with
                    </span>
                    <div className="bg-[#94A3B8] h-[1px] w-2/4"></div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mt-5">
                    {signInMethodsDetails.map(({ name, id, image, color }) => {
                      return (
                        <div
                          key={id}
                          className="flex items-center gap-2 border border-[#B2B5C4] justify-center px-4 py-2 rounded-lg "
                        >
                          <img src={image} alt="" className="h-7" />
                          <span style={{ color: `${color}` }}>{name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* right */}
        <div className="bg-gray-400 w-3/6">
          <img src={loginPageImage} alt="" className="h-full w-full" />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
