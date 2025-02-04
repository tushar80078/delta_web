import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const CategorySkeleton = () => {
    return (
        <div className="mx-20 my-10">
            <div className="flex justify-between ">
                <h1 className="text-[22px] font-semibold text-gray-900 ">
                    Top Categories
                </h1>
                <button className="text-[14px] text-[#3B82F6]">See all</button>
            </div>
            <div className="grid grid-cols-4 space-x-4 justify-evenly my-5 ml-4">
                {[...Array(4)].map((_, index) => (
                    <Card key={index} className="w-[300px] flex justify-center items-center">
                        <div className="flex flex-col justify-center items-center py-4">
                            <Skeleton className="w-[100px] h-[100px] rounded-full bg-blue-100" />
                            <CardHeader className="py-0 mt-3 font-semibold text-xl">
                                <Skeleton className="w-[150px] h-6" />
                            </CardHeader>
                            <CardContent className="py-2">
                                <Skeleton className="w-[100px] h-4" />
                            </CardContent>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export const CourseSkeleton = () => {
    return (
        <div className="mx-20 my-10">
            <div className="flex justify-between">
                <h1 className="text-[22px] font-semibold text-gray-900 ">Top Courses</h1>
                <button className="text-[14px] text-[#3B82F6]">See all</button>
            </div>
            <div className="grid grid-cols-4 space-x-4 justify-evenly my-5 ml-4">
                {[...Array(4)].map((_, index) => (
                    <Card key={index} className="w-[300px]">
                        <div className="w-full p-3">
                            <Skeleton className="w-full py-2 h-[170px] rounded" />
                            <CardHeader className="py-0 px-1 font-semibold text-lg text-gray-700">
                                <Skeleton className="w-[80%] h-6" />
                            </CardHeader>
                            <CardContent className="py-1 px-1">
                                <Skeleton className="w-full h-4" />
                            </CardContent>
                            <CardContent className="py-1 px-1 flex gap-3 items-center">
                                <Skeleton className="w-20 h-4" />
                                <Skeleton className="w-16 h-4" />
                            </CardContent>
                            <CardFooter className="px-1 py-1">
                                <Skeleton className="w-24 h-6" />
                            </CardFooter>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

