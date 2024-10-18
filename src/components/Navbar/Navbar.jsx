import React from "react";
import Categories from "./Categories";
import heading from "../../assets/heading.png";
import { useNavigate } from "react-router-dom";
const Navbar = ({ isMobile }) => {
  // const darkMode = useSelector((state) => state.mode.darkMode);
  const navigate = useNavigate();
  // const mobileView = useSelector((state) => state.mobileView.mobileView);

  return (
    <div className="sticky top-10">
      <div className="w-full h-[2px] bg-slate-200"></div>
      <div className="flex-col w-full px-1 py-1  flex cursor-default sticky top-10 bg-white">
        <div onClick={() => navigate("/")}>
          <img src={heading} alt="" width={600} className="m-auto" />
        </div>
        {/* <button className="" onClick={() => navigate("/login")}>
          login
        </button> */}
        {!isMobile ? (
          <div className="w-full h-[2px] bg-slate-200">
            <Categories />
          </div>
        ) : null}
      </div>
      {/* {!mobileView ? <Subcategories darkMode={darkMode} /> : null} */}
    </div>
  );
};

export default Navbar;
