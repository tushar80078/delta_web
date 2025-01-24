import { Button } from "@/components/ui/button";
import homepage from "../../../assets/images/homepage.png";
import { Plus } from "lucide-react";
import HomepageLayout from "@/layout/homepage";

export const courseRate = [
  {
    id: 1,
    number: 250,
  },
  {
    id: 2,
    number: 1000,
  },
  {
    id: 3,
    number: 15,
  },
  {
    id: 4,
    number: 2400,
  },
];

const Landing = () => {

  return (
    <HomepageLayout>
      {/* hero-section */}
      <div className="flex  items-center gap-[6rem] mx-20  pt-16">
        {/* left section */}
        <div className=" px-2 mx-5  w-[620px]  ">
          <h1 className="text-5xl font-semibold ">
            Unlock Your Potential with Delta
          </h1>
          <p className="text-[16px] py-5 text-gray-700 leading-relaxed">
            Welcome to Byway, where learning knows no bounds. We believe that
            education is the key to personal and professional growth, and we&apos;re
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
    </HomepageLayout>
  );
};

export default Landing;
