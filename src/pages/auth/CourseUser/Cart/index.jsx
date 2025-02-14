import useUserDetails from '@/hooks/useUserDtails';
import HomepageLayout from '@/layout/homepage'
import { useGetCartCoursesByIdQuery } from '@/redux/store/apiSlice/student.api'

const CartPage = () => {
    const { data } = useUserDetails();
    const { data: cartCourses } = useGetCartCoursesByIdQuery({ userId: data?.id }, { skip: data?.id });

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

                        <div className='w-full border rounded-lg    '>

                            hello
                        </div>
                    </div>

                    <div className='w-[25%] border'>
                        hello
                    </div>
                </div>
            </div>
        </HomepageLayout>
    )
}

export default CartPage