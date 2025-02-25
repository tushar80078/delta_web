import useUserDetails from '@/hooks/useUserDtails';
import HomepageLayout from '@/layout/homepage'
import { useGetCartCoursesByIdQuery } from '@/redux/store/apiSlice/student.api'
import { Star } from 'lucide-react';
import courseimage from "@/assets/images/course_image.png"
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLazyPostCheckoutSessionQuery } from '@/redux/store/apiSlice/checkout.api';

const CartPage = () => {
    const { data } = useUserDetails();
    const { data: cartCourses } = useGetCartCoursesByIdQuery({ userId: data?.id }, { skip: !data?.id });
    const [checkoutSessionFn] = useLazyPostCheckoutSessionQuery();

    const handleCheckout = async () => {
        try {
            const response = await checkoutSessionFn({ cartCourses: cartCourses?.data?.cartCourses, userId: data?.id })

            if (response?.data?.success) {
                const url = response?.data?.data?.url
                window.location.href = url;
            }
        } catch (error) {
            console.error("Checkout Error:", error);
        }
    };

    return (
        <HomepageLayout>
            {/* Heading  */}

            <div className='mt-[10vh] px-20 pt-3'>

                {/* Heading */}
                <div className='flex items-center'>
                    <h1 className='text-[40px] text-gray-7s00 font-semibold'>
                        Shopping Cart
                    </h1>

                    <div className='flex ml-8'>
                        <h1 className='cursor-pointer text-[17px]'>
                            Home &gt; &nbsp;
                        </h1>

                        <h1 className='cursor-pointer text-[17px]'>
                            Details &gt; &nbsp;
                        </h1>

                        <h1 className='cursor-pointer text-[17px]'>
                            Shopping Cart
                        </h1>
                    </div>
                </div>

                {/* Cart Courses */}
                <div className=' w-full flex h-full justify-between mt-10'>

                    {/*Cart Course */}
                    <div className='w-[70%]  '>

                        <div className='border-b pb-2 mb-4 pl-2'>
                            {
                                cartCourses?.data?.cartCourses?.length
                            }
                            &nbsp;{
                                cartCourses?.data?.cartCourses?.length > 1 ? "Course's" : 'Course'
                            }  in cart
                        </div>
                        <ScrollArea className="pr-5">
                            <div className=' h-[65vh]'>
                                {
                                    cartCourses?.data?.cartCourses?.map((ele, index) => {
                                        return <div key={index} className='w-full border rounded-lg mb-5   flex   px-2 py-2'>

                                            {/* Image */}
                                            <div className='h-28 border w-48 rounded-md overflow-hidden'>
                                                <img src={courseimage} className='object-cover h-28 w-48' />
                                            </div>

                                            <div className='flex-1 pl-3'>
                                                <div className='text-lg poppins-medium '>
                                                    {ele.courseName}
                                                </div>

                                                <div className='text-sm poppins-light'>
                                                    By John Doe
                                                </div>

                                                <div className='flex items-center'>
                                                    <div className='text-yellow-400 poppins-semibold'>
                                                        4.6
                                                    </div>
                                                    <div className='flex  items-center pl-2'>
                                                        <Star className='text-yellow-300 fill-yellow-300' size={17} />
                                                        <Star className='text-yellow-300 fill-yellow-300' size={17} />
                                                        <Star className='text-yellow-300 fill-yellow-300' size={17} />
                                                        <Star className='text-yellow-300 fill-yellow-300' size={17} />
                                                        <Star className='text-yellow-300 fill-yellow-300' size={17} />
                                                    </div>

                                                    <div className='text-sm text-gray-500'>
                                                        &nbsp; (250 ratings) | &nbsp;
                                                    </div>

                                                    <div className='text-sm'>
                                                        22 Total Hours | 155 Lectures
                                                    </div>

                                                </div>

                                                <Button variant="link" className='px-0 text-rose-500'>
                                                    Remove
                                                </Button>

                                            </div>

                                            <div className='px-5 text-2xl poppins-semibold'>
                                                $ {ele.courseFees}
                                            </div>

                                        </div>
                                    })
                                }

                            </div>
                        </ScrollArea>


                    </div>

                    <div className='w-[25%]  '>
                        <div className='mb-2 ml-2 poppins-medium text-xl'>Order Details</div>
                        <div className='border rounded-lg py-2 bg-[#f8fafc]'>
                            <div className='border-b pb-2 mx-6'>
                                <div className='flex justify-between  py-2 items-center'>
                                    <div className='text-sm poppins-medium'>Price</div>
                                    <div className='poppins-semibold'>$10</div>
                                </div>

                                <div className='flex justify-between  py-2 items-center'>
                                    <div className='text-sm poppins-medium'>Discount</div>
                                    <div className='poppins-semibold'>$10</div>
                                </div>

                                <div className='flex justify-between  py-2 items-center'>
                                    <div className='text-sm poppins-medium'>Tax</div>
                                    <div className='poppins-semibold'>$10</div>
                                </div>
                            </div>

                            <div className='flex justify-between mx-6 mt-3 mb-2'>
                                <div className='poppins-semibold text-xl'>Total</div>
                                <div className='poppins-semibold text-xl'>$60</div>
                            </div>
                        </div>

                        <div className='mt-5 w-full'>
                            <Button
                                className="w-full bg-black hover:bg-white hover:text-black hover:border-black border"
                                size="lg"
                                onClick={() => handleCheckout()}
                            >
                                Proceed to Checkout
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </HomepageLayout>
    )
}

export default CartPage