import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

// import { fetchArticles } from "../redux/thunk/ArticleThunk";
// import { useSelector, useDispatch } from "react-redux";
// import DeviceDetector from "../utils/DeviceDetector";
import Categories from "../components/Navbar/Categories";
const SharedLayout = () => {
  // const articles = useSelector((state) => state.article.data);
  // const isLoading = useSelector((state) => state.article.isLoading);
  // const dispatch = useDispatch();
  // if (!articles) {
  //   dispatch(fetchArticles());
  // }
  // DeviceDetector();
  // const mobileView = useSelector((state) => state.mobileView.mobileView);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen width
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the width as per your need (e.g., 768px for mobile)
    };

    // Initial check
    checkMobile();

    // Add event listener on window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return (
    <div>
      <Navbar isMobile={isMobile} />
      {/* <div className="h-36"></div> */}
      {isMobile ? (
        <div className="fixed bottom-10 bg-white text-[3svw] w-full">
          <Categories />
        </div>
      ) : null}
      {/* <div className={`${mobileView ? "mt-5" : "mt-10"} mb-10`}>
        {isLoading ? <div>isLoading</div> : <Outlet />}
      </div> */}
      <div className="mt-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default SharedLayout;
