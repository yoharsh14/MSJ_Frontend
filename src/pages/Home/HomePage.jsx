import React from "react";
import { useEffect } from "react";
import Card from "../../components/Cards/Card";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { articles } from "../../assets/json/articles.js";
const Home = () => {
  // const darkMode = useSelector((state) => state.mode.darkMode);
  // const articles = useSelector((state) => state.article.data);
  // const at =
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={` px-5`}>
      <div className="mb-10">
        <img
          src="/images/heroImage.webp"
          alt=""
          width={1000}
          className="m-auto"
        />
        <p className="text-center text-2xl font-semibold">
          WoW Summit Bangkok 2024
        </p>
      </div>
      <div className="text-center text-3xl mb-5 font-semibold">Upcoming Web3 Events</div>
      <div className="flex flex-wrap gap-2 justify-start">
        {articles ? (
          articles.map((el, index) => <Card key={index} el={el} />)
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Home;
