import React from "react";
import { Route, Routes } from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import PostsIdPage from "../pages/PostsIdPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<PostsIdPage />} />
      <Route path="*" element={<Posts />} />
    </Routes>
  );
};

export default AppRouter;
