import React from "react";
import Card from "../../components/Cards/Card";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/heroImage.jpg";
import { articles } from "../../assets/json/articles.js";
const Home = () => {
  const darkMode = useSelector((state) => state.mode.darkMode);
  // const articles = useSelector((state) => state.article.data);
  // const at =
  return (
    <div className={` px-5 ${darkMode ? "bg-slate-900" : "bg-white"}`}>
      <div className="text-center text-3xl mb-5 font-semibold">Todays News</div>
      <div className="mb-10">
        <img src={heroImage} alt="" width={1200} className="m-auto" />
        <p className="text-center text-2xl font-semibold">
          India Blockchain Summit
        </p>
      </div>
      <div className="flex flex-wrap gap-2 justify-start">
        {articles ? (
          articles.map((el, key) => (
            <Card key={el._id} darkMode={darkMode} el={el} />
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Home;
