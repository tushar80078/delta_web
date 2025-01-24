import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/Logo.svg";
import { Input } from "@/components/ui/input";
import { FiShoppingCart } from "react-icons/fi";
import { Button } from "@/components/ui/button";

const HomepageLayout = ({ children }) => {
    const navigate = useNavigate();

    return (
        <>
            <nav className="flex px-10 justify-evenly space-x-5  items-center py-2 h-[70px] border-b fixed top-0 right-0 left-0 bg-white z-10 ">
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
            </nav>

            {children}
        </>
    )
}

export default HomepageLayout