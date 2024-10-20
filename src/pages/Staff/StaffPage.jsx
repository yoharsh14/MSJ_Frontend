import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { useEffect } from "react";
const StaffPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div className=" flex flex-col justify-center items-center ">
        <img src="/images/tanPic.png" alt="" width={200} />
        <h1 className="text-lg font-semibold flex items-center gap-2">
          Tanmaya Sharma
          <a
            href="https://www.linkedin.com/in/tanmaya-sharma/"
            className="text-md"
          >
            <FaLinkedin />
          </a>
        </h1>
        <h2 className="text-center">Founder and CEO</h2>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <img src="/images/harshPic.jpg" alt="" width={200} />
        <h1 className="text-lg font-semibold flex items-center gap-2">
          Harsh Dambhare
          <a
            href="https://www.linkedin.com/in/harshdambhare/"
            className="text-md"
          >
            <FaLinkedin />
          </a>
        </h1>
        <h2 className="text-center">Web Developer</h2>
      </div>
    </div>
  );
};

export default StaffPage;
