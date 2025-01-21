import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import homepage from "../../../assets/images/homepage.png";
import Logo from "@/assets/Logo.svg";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { courseRate } from "./Data";
import Navbar from "../Navbar";

const Landing = () => {
  // const navigate = useNavigate();

  return (
    <>
      {/* navbar */}
      {/* <nav className="flex px-10 justify-evenly space-x-5  items-center py-2 h-[70px] border-b ">
        <div className="h-[10vh]  ml-4 flex items-center">
          <img src={Logo} alt="Logo" width="40" />
          <span className="font-poppins font-semibold text-xl pl-1">Delta</span>
        </div>

        <h2 className="text-gray-700">Categories</h2>
        <div className="w-[40%] flex items-center border border-gray-700 px-2 rounded-lg">
          <CiSearch size={25} />
          <Input
            type="text"
            className=" border-none focus-visible:border-none focus-visible:ring-0  text-base text-gray-700"
            placeholder="Search courses"
          />
        </div>

        <h2 className="text-gray-700">Teach on delta</h2>
        <div className="flex items-center space-x-7">
          <FiShoppingCart size={25} />
          <Button
            className="bg-white text-gray-700 shadow-none border border-gray-700 rounded-none py-5 font-normal text-base hover:bg-gray-700 hover:text-white"
            onClick={() => navigate("/login")}
          >
            Log in
          </Button>
          <Button
            className="bg-gray-700 text-white shadow-none border border-gray-700 rounded-none py-5 font-normal text-base hover:bg-white hover:text-gray-700"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </Button>{" "}
        </div>
      </nav> */}
      <Navbar />
      {/* hero-section */}

      <div className="flex  items-center gap-[6rem] mx-20  pt-16">
        {/* left section */}
        <div className=" px-2 mx-5  w-[620px]  ">
          <h1 className="text-5xl font-semibold ">
            Unlock Your Potential with Delta
          </h1>
          <p className="text-[16px] py-5 text-gray-700 leading-relaxed">
            Welcome to Byway, where learning knows no bounds. We believe that
            education is the key to personal and professional growth, and we're
            here to guide you on your journey to success.{" "}
          </p>
          <Button className="border-none py-6 my-3 text-base bg-blue-500 ">
            Start your instructor journey
          </Button>
        </div>
        {/* right section */}
        <div className=" py-11  ">
          <img src={homepage} alt="" className="" />
        </div>
      </div>
      {/* course rating */}
      <div className="grid grid-cols-4 bg-gray-50 py-10">
        {courseRate.map(({ id, number }) => {
          return (
            <div
              key={id}
              className="flex flex-col justify-center items-center border-r-[3px]"
            >
              <h1 className="flex text-2xl items-center font-semibold">
                {number} <Plus />
              </h1>
              <p className="text-sm text-gray-600 py-1">
                Courses by our best mentors
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Landing;
