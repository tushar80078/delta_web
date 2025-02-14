import { signInMethodsDetails } from "../constant";
import { Card } from "@/components/ui/card";
import simple from "../../../../assets/images/loginImage.png";
import { Button } from "@/components/ui/button";
import useUserDetails from "@/hooks/useUserDtails";
import { useNavigate, useParams } from "react-router-dom";
import { useAddCourseToCartMutation } from "@/redux/store/apiSlice/student.api";
const AddToCart = () => {

  const navigate = useNavigate();
  const { id: courseId } = useParams();

  const { isLoggedIn, setCartNavigationRouteFn, data } = useUserDetails();
  const [addCourseToCartFn] = useAddCourseToCartMutation();

  const navigateToDesiredPage = async () => {
    if (isLoggedIn) {
      console.log(`/${data?.id}/cart`)
      // Call add to cart api
      // and also navigate to cart page
      const response = await addCourseToCartFn({ courseId: courseId, userId: data.id })

      if (response?.data?.success) {
        navigate(`/app/${data?.id}/cart`)
      }
    } else {
      setCartNavigationRouteFn({ route: `/course/${courseId}` });
      navigate('/login');
    }
  }
  return (
    <Card className="h-[540px] w-[370px]">
      <div className="h-[230px] m-3 rounded-lg overflow-hidden   ">
        <img src={simple} alt="" className=" w-full h-auto object-contain rounded-lg " />
      </div>

      <div className="p-3 flex gap-4 items-center">
        <span className="text-2xl font-semibold text-gray-800">$49.5</span>
        <span className="text-xl  text-[#94A3B8] line-through">$99.5</span>
        <span className="text-xl text-green-600">50% off</span>
      </div>
      <div className="flex flex-col gap-3">
        <Button
          className=" mx-3 w-[92%] py-6 bg-gray-900 text-white hover:bg-white hover:text-gray-700 border border-gray-700"
          onClick={() => navigateToDesiredPage()}
        >
          Add To Cart
        </Button>

        <Button className=" mx-3 w-[92%] py-6 bg-white text-gray-700 border border-gray-700 hover:bg-gray-900 hover:text-white">
          {" "}
          Buy Now{" "}
        </Button>
      </div>

      <hr className="text-[#E2E8F0] h-1 mt-6" />

      <div className="mt-3 ml-4">
        <p>Share</p>
        <div className="flex gap-3 my-2">
          {signInMethodsDetails.map((item) => {
            return (
              <div
                key={item.id}
                className="h-12 w-12 border-4 border-gray-100 rounded-full flex justify-center items-center"
              >
                <img src={item.image} alt="" className="p-1 cursor-pointer" />
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default AddToCart;
