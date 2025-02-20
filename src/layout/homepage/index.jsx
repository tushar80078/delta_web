import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/Logo.svg";
import { Input } from "@/components/ui/input";
import { FiShoppingCart } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import useUserDetails from "@/hooks/useUserDtails";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BadgeCheck,
  Bell,
  CreditCard,
  Home,
  LogOut,
  Sparkles,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { logOutUser } from "@/redux/store/apiSlice/reducer/user";
import { resetLayoutReducer } from "@/redux/store/apiSlice/reducer/layout";
import { purge } from "@/redux/store";
import toast from "react-hot-toast";

const HomepageLayout = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, data, role } = useUserDetails();

  const logoutUser = async () => {
    try {
      dispatch(logOutUser());
      dispatch(resetLayoutReducer());
      purge();
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      toast.error(error);
    }
  };

  const navigateToHome = () => {
    if (role == "Admin") {
      navigate("/app/user-home");
    }
  };

  return (
    <>
      <nav className="flex px-10 justify-between space-x-5  items-center py-2 h-[9vh] border-b fixed top-0 right-0 left-0 bg-white z-10 ">
        <div
          className="h-[10vh]  ml-4 flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
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

        <h2 className="text-gray-700" onClick={() => navigate("/teachers")}>
          Teach on delta
        </h2>

        <div className="flex">
          <FiShoppingCart size={25} />
          {isLoggedIn && (
            <div>
              <Home
                size={25}
                className="ml-10"
                onClick={() => navigateToHome()}
              />
            </div>
          )}
        </div>

        {!isLoggedIn && (
          <div className="flex items-center space-x-7">
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
        )}

        {/* User */}
        {isLoggedIn && (
          <div className="flex justify-center items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="h-10 w-10 bg-slate-200 rounded-full flex justify-center items-center">
                  {data?.firstName[0]?.toUpperCase()}
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg "
                side={"bottom"}
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={data.profileImage} alt={"U"} />
                      <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {data.userName}
                      </span>
                      <span className="truncate text-xs">{data.email}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Sparkles />
                    Upgrade to Pro
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <BadgeCheck />
                    Account
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CreditCard />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Bell />
                    Notifications
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => logoutUser()}>
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </nav>

      <div className="h-[100vh] overflow-auto">{children}</div>
    </>
  );
};

export default HomepageLayout;
