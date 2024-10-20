import React from "react";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
import { AiFillGoogleSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Footer = ({ isMobile }) => {
  // const mobileView = useSelector((state) => state.mobileView.mobileView);
  const mobileView = isMobile;
  const navigate = useNavigate();
  return (
    <div className="w-full bg-slate-800 flex flex-col justify-start gap-3 h-full pb-20">
      <div
        className={`flex justify-center ${
          mobileView ? "text-3xl" : "text-5xl"
        } text-white gap-3 p-3`}
      >
        <FaFacebookSquare />
        <FaTwitterSquare />
        <AiFillGoogleSquare />
        <FaLinkedin />
        <FaInstagramSquare />
        <FaGithubSquare />
      </div>
      <div
        className={`flex ${
          mobileView ? "flex-col" : ""
        } justify-center items-center gap-4 text-white font-medium py-3`}
      >
        <div>Sign up for our newsletter</div>
        <input
          type="email"
          className={`${
            mobileView ? "w-[70%]" : "w-[40%]"
          } rounded-lg h-10 bg-white text-black px-2`}
        />
        <button className="px-2 py-1 border-white border-2 rounded-md">
          Subscribe
        </button>
      </div>
      {!mobileView ? (
        <div className="text-slate-400 flex justify-evenly py-6">
          <div>
            <div className="text-white text-xl font-bold cursor-pointer">
              MSJ Membership
            </div>
            <ul className="flex flex-col gap-1 py-3 cursor-pointer">
              <li onClick={() => navigate("/underWork")}>
                The Journal Collection
              </li>
              <li onClick={() => navigate("/underWork")}>
                Subscription Options
              </li>
              <li onClick={() => navigate("/UnderWork")}>Why Subscribe?</li>
              <li onClick={() => navigate("/UnderWork")}>
                Corporate Subscription
              </li>
              <li onClick={() => navigate("/UnderWork")}>MSJ Live</li>
              <li onClick={() => navigate("/UnderWork")}>
                Commercial Partnerships
              </li>
            </ul>
          </div>
          <div className="border-l-2 border-gray-400 pl-2">
            <div
              className="text-white text-xl font-bold cursor-pointer"
              onClick={() => navigate("/UnderWork")}
            >
              Customer Service
            </div>
            <ul className="flex flex-col gap-1 py-3 cursor-pointer">
              <li onClick={() => navigate("/UnderWork")}>Customer Center</li>
              <li onClick={() => navigate("/UnderWork")}>Contact Us</li>
              <li onClick={() => navigate("/UnderWork")}>
                Cancel My Subscription
              </li>
            </ul>
          </div>
          <div className="border-l-2 border-gray-400 pl-2">
            <div
              className="text-white text-xl font-bold cursor-pointer"
              onClick={() => navigate("/UnderWork")}
            >
              Tools & Features
            </div>
            <ul className="flex flex-col gap-1 py-3 cursor-pointer">
              <li onClick={() => navigate("/UnderWork")}>
                Newsletters & Alerts
              </li>
              <li onClick={() => navigate("/UnderWork")}>Guides</li>
              <li onClick={() => navigate("/UnderWork")}>Topics</li>
              <li onClick={() => navigate("/UnderWork")}>Topics</li>
              <li onClick={() => navigate("/UnderWork")}>RSS Feeds</li>
              <li onClick={() => navigate("/UnderWork")}>Video Center</li>
              <li onClick={() => navigate("/UnderWork")}>Watchlist</li>
              <li onClick={() => navigate("/UnderWork")}>Visual Stories</li>
            </ul>
          </div>
          <div className="border-l-2 border-gray-400 pl-2">
            <div
              className="text-white text-xl font-bold cursor-pointer"
              onClick={() => navigate("/UnderWork")}
            >
              Ads
            </div>
            <ul className="flex flex-col gap-1 py-3 cursor-pointer">
              <li onClick={() => navigate("/UnderWork")}>Advertise</li>
              <li onClick={() => navigate("/UnderWork")}>
                Commercial Real Estate Ads
              </li>
              <li onClick={() => navigate("/UnderWork")}>
                Place a Classified Ad
              </li>
              <li onClick={() => navigate("/UnderWork")}>Metaverse Land Ads</li>
              <li onClick={() => navigate("/UnderWork")}>Blockchain Ads</li>
            </ul>
          </div>
          <div className="border-l-2 border-gray-400 pl-2">
            <div
              className="text-white text-xl font-bold cursor-pointer"
              onClick={() => navigate("/UnderWork")}
            >
              More
            </div>
            <ul className="flex flex-col gap-1 py-3 cursor-pointer">
              <li onClick={() => navigate("/UnderWork")}>About Us</li>
              <li onClick={() => navigate("/UnderWork")}>
                Content Partnerships
              </li>
              <li onClick={() => navigate("/UnderWork")}>Corrections</li>
              <li onClick={() => navigate("/UnderWork")}>New Archive</li>
              <li onClick={() => navigate("/UnderWork")}>Register For Free</li>
              <li onClick={() => navigate("/UnderWork")}>MSJ Shop</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-2 text-xl text-white justify-center items-center cursor-pointer">
          <div onClick={() => navigate("/UnderWork")}>MSJ Membership</div>
          <div onClick={() => navigate("/UnderWork")}>Customer Service</div>
          <div onClick={() => navigate("/UnderWork")}>Tools & Features</div>
          <div onClick={() => navigate("/UnderWork")}>Ads</div>
        </div>
      )}
    </div>
  );
};

export default Footer;
