import React from "react";
import TanPic from "../../assets/tanPic.png";
import harshPic from "../../assets/harshPic.jpg";
import { FaLinkedin } from "react-icons/fa6";
const StaffPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div className=" flex flex-col justify-center items-center ">
        <img src={TanPic} alt="" width={200} />
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
        <img src={harshPic} alt="" width={200} />
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
