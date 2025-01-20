import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import homepage from "../../../assets/images/homepage.png";
import logo from "../../../assets/images/logo.png";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { courseRate } from "./Data";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="flex px-10 justify-evenly space-x-5  items-center py-2 h-[70px] border-b ">
        <div className="h-[10vh]  ml-4 flex items-center">
          <img src={logo} alt="Logo" width="40" />
          <span className="font-poppins font-semibold text-xl pl-1">Delta</span>
        </div>

        <h2 className="text-gray-700">Categories</h2>
        <div className=" w-[40%] flex items-center border border-gray-700 px-2  rounded-lg">
          <CiSearch size={25} />
          <Input
            type="text "
            className="border-none outline-none text-base text-gray-700 "
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
      </nav>

      <div>
        <img src={homepage} alt="" />
      </div>
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
