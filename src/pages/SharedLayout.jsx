import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { fetchArticles } from "../redux/thunk/ArticleThunk";
import { useSelector, useDispatch } from "react-redux";
import DeviceDetector from "../utils/DeviceDetector";
import Categories from "../components/Navbar/Categories";
const SharedLayout = () => {
  // const articles = useSelector((state) => state.article.data);
  const isLoading = useSelector((state) => state.article.isLoading);
  // const dispatch = useDispatch();
  // if (!articles) {
  //   dispatch(fetchArticles());
  // }
  // DeviceDetector();
  const mobileView = useSelector((state) => state.mobileView.mobileView);
  return (
    <div>
      <Navbar />
      {/* <div className="h-36"></div> */}
      {/* {mobileView ? (
        <div className="fixed bottom-10 bg-white text-[2.5svw]">
          <Categories />
        </div>
      ) : null} */}
      <div className={`${mobileView ? "mt-5" : "mt-10"} mb-10`}>
        {isLoading ? <div>isLoading</div> : <Outlet />}
      </div>
      <Footer />
    </div>
  );
};

export default SharedLayout;
