import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { articles } from "../../assets/json/articles";
import Card from "../../components/Cards/Card";
const CategoryPage = () => {
  const { category } = useParams();
  return (
    <div className={`px-5`}>
      <div className="text-center text-3xl mb-5 font-semibold">
        {category.toUpperCase()}
      </div>
      <div className="flex flex-wrap gap-2 justify-start">
        {articles.map((el, index) =>
          el.categories.includes(category) ? <Card el={el} key={index} /> : null
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
