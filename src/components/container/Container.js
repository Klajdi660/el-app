import React from "react";
import Filter from "../filter/Filter";
import Search from "../search/Search";
import Header from "../header/Header";
import MoviesList from "../moviesList/MoviesList";
import "./Container.css";

const Container = () => {
  return (
    <>
      <div className="header">
        <Search/>
      </div>
      <div className="container">
        {/* <Search /> */}
        <Filter/>
        <Header/>
        <MoviesList />
      </div>
    </>
  );
};

export default Container;
