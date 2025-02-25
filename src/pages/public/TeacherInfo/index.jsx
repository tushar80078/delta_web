import { Button } from "@/components/ui/button";
import HomepageLayout from "@/layout/homepage";
import React from "react";
import teacher from "../../../assets/images/teacher.jpg";
import { useNavigate } from "react-router-dom";

const TecherInfo = () => {
  const navigate = useNavigate();
  return (
    <HomepageLayout>
      <div className="flex  items-center gap-[2rem] mx-20  pt-16">
        {/* left section */}
        <div className=" px-2 mx-5  w-[620px]  ">
          <h1 className="text-5xl font-semibold ">
            Unlock Your Potential with Delta
          </h1>
          <p className="text-[16px] py-5 text-gray-700 leading-relaxed">
            Welcome to delta, where learning knows no bounds. We believe that
            education is the key to personal and professional growth, and
            we&apos;re here to guide you on your journey to success.{" "}
          </p>
          <Button
            className="border-none py-6 my-3 text-base bg-blue-500 "
            onClick={() => navigate("/signup")}
          >
            Start your instructor journey
          </Button>
        </div>
        {/* right section */}
        <div className=" py-11  ">
          <img src={teacher} alt="teacher-image" className="" />
        </div>
      </div>
    </HomepageLayout>
  );
};

export default TecherInfo;
