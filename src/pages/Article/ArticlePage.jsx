import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { articles } from "../../assets/json/articles";
const ArticlePage = () => {
  // const articles = useSelector((state) => state.article.data);
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setArticle(articles ? articles.filter((el) => el._id == id) : null);
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
    <div className="pb-10">
      {article ? (
        <div
          className={`${
            isMobile ? "px-5" : "px-40"
          } flex flex-col justify-start items-center`}
        >
          <h1 className={` ${isMobile?"text-3xl":"text-5xl"} font-black pb-2`}>
            {article[0].title}
          </h1>
          <div className={`${isMobile ? "py-1" : "py-10"}`}>
            <img
              // src={`${article[0].featuredImage.imgUrl}`}
              src={article[0].imgUrl}
              alt=""
            />
          </div>
          <div>{parse(article[0].body)}</div>
          <div className="pt-2">
            You be the Arbiter of Truth the readers of
            <a
              href="https://metaversestreetjournal.com/"
              className="text-blue-800"
            >
              {" "}
              The Metaverse Street Journal
            </a>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default ArticlePage;
