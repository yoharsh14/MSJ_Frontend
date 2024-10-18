import React from "react";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "../pages/SharedLayout";
import Home from "../pages/Home/HomePage";
import ArticlePage from "../pages/Article/ArticlePage";
import Login from "../pages/auth/Login";
import CategoryPage from "../pages/Category/CategoryPage";
const Index = () => {
  return (
    <div>
      <Routes>
        <Route element={<SharedLayout />}>
          <Route path="" element={<Home />} index />
          <Route path="category/:category" element={<CategoryPage />} />
          <Route path="full/:id" element={<ArticlePage />} />
          {/* <Route path="login" element={<Login />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default Index;
