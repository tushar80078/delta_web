import loginPageImage from "../../../assets/images/signupImage.png";
import { Label } from "@radix-ui/react-label";
import { Controller, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "@/lib/form-schema";
import { useLoginMutation } from "@/redux/store/apiSlice/auth.api";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FiArrowRight } from "react-icons/fi";
import toast from "react-hot-toast";
import HomepageLayout from "@/layout/homepage";
import facebook from "../../../assets/images/Facebook_Logo.png";
import Google from "../../../assets/images/google.png";
import Microsoft from "../../../assets/images/microsoft.png";


export const signInMethodsDetails = [
  {
    id: 1,
    name: "Facebook",
    image: facebook,
    color: "blue",
  },
  {
    id: 2,
    name: "Google",
    image: Google,
    color: "red",
  },
  {
    id: 3,
    name: "Microsoft",
    image: Microsoft,
    color: "black",
  },
];

const SignupPage = () => {
  const navigate = useNavigate();
  const [loginFn, { error, }] = useLoginMutation();
  console.log(error);

  const {
    control,
    handleSubmit,
    // formState: { errors },
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
    <HomepageLayout>
      <div className="h-screen  flex   pt-16  ">
        {/* left Section*/}
        <div className="bg-gray-400 w-2/5">
          <img src={loginPageImage} alt="" className="" />
        </div>
        {/* right section*/}

        <div className="w-3/5 flex justify-center  items-center">
          <div className=" h-[55vh] w-[80%]  ">
            <h1 className="text-center text-gray-900 text-3xl font-medium mb-5">
              Sign in to your account
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid w-full items-center gap-4 ">
                {/* firstname */}
                <Label htmlFor="name" className=" font-medium">
                  FullName
                </Label>
                <div className="flex items-center  space-x-14">
                  <div className="flex flex-col space-y-1.5">
                    <Controller
                      control={control}
                      name="firstname"
                      render={({ field: { onChange, value } }) => (
                        <Input
                          id="name"
                          placeholder="First Name"
                          type={"Text"}
                          onChange={onChange}
                          value={value}
                          className="py-6  pr-40"
                        />
                      )}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Controller
                      control={control}
                      name="lastname"
                      render={({ field: { onChange, value } }) => (
                        <Input
                          id="name"
                          placeholder="Last Name"
                          type={"Text"}
                          onChange={onChange}
                          value={value}
                          className="py-6 pr-40"
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name" className="mb-2 font-medium">
                    Username
                  </Label>
                  <Controller
                    control={control}
                    name="username"
                    render={({ field: { onChange, value } }) => (
                      <Input
                        id="username"
                        placeholder="Username "
                        type={"text"}
                        onChange={onChange}
                        value={value}
                        className="py-6"
                      />
                    )}
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name" className="mb-2 font-medium">
                    Email
                  </Label>

                  <Controller
                    control={control}
                    name="Email"
                    render={({ field: { onChange, value } }) => (
                      <Input
                        id="Email"
                        placeholder="Enter Password"
                        type="email"
                        onChange={onChange}
                        value={value}
                        className="py-6"
                      />
                    )}
                  />
                </div>

                <div className="flex items-center space-x-14">
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
                          type="email"
                          onChange={onChange}
                          value={value}
                          className="py-6 pr-40"
                        />
                      )}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name" className="mb-2 font-medium">
                      Confirm Password
                    </Label>
                    <Controller
                      control={control}
                      name="password"
                      render={({ field: { onChange, value } }) => (
                        <Input
                          id="password"
                          placeholder="Confirm Password"
                          type="email"
                          onChange={onChange}
                          value={value}
                          className="py-6 pr-40"
                        />
                      )}
                    />
                  </div>{" "}
                </div>

                <div>
                  <Button className="bg-gray-900 py-6 border hover:bg-white hover:border-gray-600 hover:text-gray-700 text-white font-medium">
                    Create Account <FiArrowRight />
                  </Button>
                </div>

                <div>
                  <div className="flex  items-center ">
                    <div className="bg-[#94A3B8]  h-[1px] w-2/4"></div>
                    <span className="text-[#94A3B8] text-sm  flex w-1/4 ml-7 tracking-wider">
                      Sign up with
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
      </div>
    </HomepageLayout>
  );
};

export default SignupPage;
