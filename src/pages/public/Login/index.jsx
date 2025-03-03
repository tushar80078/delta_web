
import loginPageImage from "../../../assets/images/authImage.png";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "@/lib/form-schema";
import { useLoginMutation } from "@/redux/store/apiSlice/auth.api";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HomepageLayout from "@/layout/homepage";
import { FaRegCheckCircle } from "react-icons/fa";

import Logo from "@/assets/Logo.svg";

import Google from "../../../assets/images/google.png";
import { useState } from "react";
import useUserDetails from "@/hooks/useUserDtails";



const LoginPage = () => {

  const navigate = useNavigate();
  const { cartNavigationRoute, setCartNavigationRouteFn } = useUserDetails();
  const [loginFn, { isLoading }] = useLoginMutation();
  const [loginError, seLoginError] = useState(false);

  const {
    control,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await loginFn(data);

      if (response?.error?.data?.success == false) {
        seLoginError(response?.error?.data?.err)
        return;
      }

      if (response?.data?.data?.userData.role === 'Teacher') {
        navigate("/app/user-home");
        return;
      }



      if (cartNavigationRoute) {
        navigate(cartNavigationRoute);
        setCartNavigationRouteFn({ route: null })
        return;
      }
      navigate('/')
    } catch (error) {
      console.log('[SIGNIN-ERROR]-', error);
    }
  };

  return (
    <HomepageLayout>
      {/* <div className="h-[100vh]  flex  mx-5 pt-16  ">
        <div className="w-4/6 flex justify-center items-center ">
          <div className=" w-[70%]  ">
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
                  <Button
                    className="bg-gray-900 min-w-36 py-5 border hover:bg-white hover:border-gray-600 hover:text-gray-700 text-white font-medium"
                    loading={isLoading}
                  >
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

        <div className="bg-gray-400 w-3/6 overflow-auto">
          <img src={loginPageImage} alt="" className=" object-cover " />
        </div>
      </div> */}

    <div className="h-[100vh] pt-14 ">
      <div className="relative  shadow-2xl">
        <img src={loginPageImage} alt="login page image" className=" w-full " />
        <div className="absolute right-8 top-4 h-[85%] w-[400px] bg-white rounded">
           <div className="pt-20 px-6">
            <img src={Logo} alt="" className="" width="45"/>
            <p className="text-sm text-gray-400 my-2">Welcome to <span className="text-[16px ] font-medium text-gray-500">Delta</span></p>
            <h3 className="text-2xl font-semibold text-gray-700 w-[98%]">Get started with your email and password </h3>
            <form  onSubmit={handleSubmit(onSubmit)}>

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
                        className="py-4 my-3"
                      />
                    )}
                  />
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
                        className="py-4 my-3"
                      />
                    )}
                  />
                   <Button
                    className="bg-blue-500 min-w-full py-5 border hover:bg-white hover:border-gray-600 hover:text-gray-700 text-white font-medium"
                    loading={isLoading}
                  >
                    Continue
                  </Button>

                  <p  className="text-sm mt-2">New to the site ? <span className="text-blue-500 font-medium hover:text-blue-600 cursor-pointer" onClick={()=>navigate("/signup")} >Sign up </span></p>

                  <div className="flex  items-center mt-2">
                    <div className="bg-[#94A3B8]  h-[1px] w-1/2"></div>
                    <span className="text-[#94A3B8] text-sm  flex  mx-2 tracking-wider">
                      Or
                    </span>
                    <div className="bg-[#94A3B8] h-[1px] w-1/2"></div>
                  </div>
                  <div className="border border-gray-500 flex justify-center py-1 rounded mt-3 gap-2 items-center cursor-pointer " >
                    <img src={Google} alt="" /><span className="text-[14px] font-medium  text-gray-600">        Continue with Google
                    </span>

                  </div>
            </form>
           </div>

        
        
        </div>
        <div className="absolute z-10 text-white text-center px-6 left-3 top-[440px] flex flex-col  justify-start ml-5">
        <h1 className="text-2xl  font-semibold tracking-wide">
          Join Thousands of Courses and <span className="text-green-400">Enhance Your Skills</span>
        </h1>
        <div className="mt-4 flex items-center gap-x-6 flex-wrap">
  <div className="flex items-center gap-2">
    <FaRegCheckCircle className="" />
    <p>Access 1000+ Courses Anywhere</p>
  </div>
  <div className="flex items-center gap-2">
    <FaRegCheckCircle  />
    <p>Learn Anytime</p>
  </div>
  <div className="flex items-center gap-2">
    <FaRegCheckCircle  />
    <p>Expert Guidance</p>
  </div>
</div>

        </div>


       
      </div>
    </div>
    </HomepageLayout>
  );
};

export default LoginPage;
