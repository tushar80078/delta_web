import loginPageImage from "../../../assets/images/signupImage.png";
import { Label } from "@radix-ui/react-label";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignupSchema } from "@/lib/form-schema";
import { useSignUpMutation } from "@/redux/store/apiSlice/auth.api";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FiArrowRight } from "react-icons/fi";
import HomepageLayout from "@/layout/homepage";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import FieldError from "@/molecules/fieldError";
import { useState } from "react";
import useUserDetails from "@/hooks/useUserDtails";
import FormError from "@/molecules/formError";

/*
TODO:
  - Something went wrong when the any form error occurs and then it distrubs the ui
  - For password field add show hide option
  - for confirm password add check is password and confirm password are correct
  - Add text already have account please sign in
*/
const SignupPage = () => {
  const navigate = useNavigate();
  const { cartNavigationRoute, setCartNavigationRouteFn } = useUserDetails();

  const [error, setError] = useState(false);

  const [signUpFn] = useSignUpMutation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const onSubmit = async (data) => {
    try {

      const response = await signUpFn({ ...data, confirmPassword: undefined, role: 'Student' })

      if (response?.error?.data?.success == false) {
        setError(response?.error?.data?.err);
        return;
      }

      if (cartNavigationRoute) {
        navigate(cartNavigationRoute);
        setCartNavigationRouteFn({ route: null });
        return;
      }
      navigate("/");
    } catch (error) {
      console.log("[SIGNUP-ERROR]-", error);
    }
  };

  return (
    <HomepageLayout>
      <div className="flex   h-[100vh]">
        {/* left Section*/}
        <div className="bg-gray-400 w-2/5  h-full  flex items-center justify-center overflow-hidden">
          <img
            src={loginPageImage}
            alt=""
            className="w-full h-auto object-contain"
          />
        </div>

        {/* right section*/}
        <div className="w-3/5 flex flex-col pt-[10vh] justify-center h-full   items-center  ">
          <h1 className="text-center text-gray-900 text-3xl font-medium mb-5">
            Create Your Account
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-[70%]  justify-center items-center"
          >
            <div className="flex flex-col w-full  gap-4 ">
              {/* firstname */}
              <Label htmlFor="fullName" className=" font-medium">
                Full Name
              </Label>

              <div className="flex items-center  space-x-6 w-full ">
                <div className="flex flex-col w-full space-y-1.5">
                  <Controller
                    control={control}
                    name="firstName"
                    render={({ field: { onChange, value } }) => (
                      <Input
                        id="firstName"
                        placeholder="John"
                        type={"text"}
                        onChange={onChange}
                        value={value}
                        className="py-6 w-full"
                      />
                    )}
                  />
                  {errors?.firstName?.message && (
                    <FieldError error={errors?.firstName?.message} />
                  )}
                </div>

                <div className="flex flex-col w-full space-y-1.5">
                  <Controller
                    control={control}
                    name="lastName"
                    render={({ field: { onChange, value } }) => (
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        type={"text"}
                        onChange={onChange}
                        value={value}
                        className="py-6 w-full "
                      />
                    )}
                  />
                  {errors?.lastName?.message && (
                    <FieldError error={errors?.lastName?.message} />
                  )}
                </div>
              </div>

              <div className="flex items-center  space-x-6 w-full">
                <div className="flex flex-col w-full space-y-1.5">
                  <Label htmlFor="email" className="mb-2 font-medium">
                    Email
                  </Label>

                  <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, value } }) => (
                      <Input
                        id="email"
                        placeholder="johndoe@example.com"
                        type="email"
                        onChange={onChange}
                        value={value}
                        className="py-6 w-full"
                      />
                    )}
                  />
                  {errors?.email?.message && (
                    <FieldError error={errors?.email?.message} />
                  )}
                </div>

                <div className="flex flex-col w-full space-y-1.5">
                  <Label htmlFor="gender" className="mb-2 font-medium">
                    Gender
                  </Label>

                  <Controller
                    control={control}
                    name="gender"
                    render={({ field: { onChange, value } }) => (
                      <Select onValueChange={onChange} value={value}>
                        <SelectTrigger className="py-6 w-full">
                          <SelectValue placeholder="Gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Male">Male</SelectItem>
                          <SelectItem value="Female">Female</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors?.gender?.message && (
                    <FieldError error={errors?.gender?.message} />
                  )}
                </div>
              </div>

              <div className="flex items-center  space-x-6 w-full">
                <div className="flex flex-col w-full space-y-1.5">
                  <Label htmlFor="password" className="mb-2 font-medium">
                    Password
                  </Label>
                  <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, value } }) => (
                      <Input
                        id="password"
                        placeholder="********"
                        type="password"
                        onChange={onChange}
                        value={value}
                        className="py-6 w-full"
                      />
                    )}
                  />
                  {errors?.password?.message && (
                    <FieldError error={errors?.password?.message} />
                  )}
                </div>

                <div className="flex flex-col w-full space-y-1.5">
                  <Label htmlFor="confirmPassword" className="mb-2 font-medium">
                    Confirm Password
                  </Label>
                  <Controller
                    control={control}
                    name="confirmPassword"
                    render={({ field: { onChange, value } }) => (
                      <Input
                        id="confirmPassword"
                        placeholder="********"
                        type="password"
                        onChange={onChange}
                        value={value}
                        className="py-6 w-full"
                      />
                    )}
                  />
                  {errors?.confirmPassword?.message && (
                    <FieldError error={errors?.confirmPassword?.message} />
                  )}
                </div>
              </div>
              <p className="text-[15px] text-gray-700">
                Already have an account ?{" "}
                <span
                  className="text-blue-500 font-medium hover:underline cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Sign in
                </span>
              </p>

              <div>{error && <FormError error={error} />}</div>

              <div className="w-full ">
                <Button className="bg-gray-900 py-6 border hover:bg-white hover:border-gray-600 hover:text-gray-700 text-white font-medium">
                  Create Account
                  <FiArrowRight />
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </HomepageLayout>
  );
};

export default SignupPage;
