import React, { useContext, useEffect } from "react";
import Movie from "../movie/Movie";
import MovieContext from "../../store/MovieContext";
import { motion } from "framer-motion";
import "./MoviesList.css";

const MoviesList = () => {
  const { filtered, fetchPopular, header } = useContext(MovieContext);

  useEffect(() => {
    if (header === "Trending") {
      fetchPopular();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [header]);

  return (
    <>
      <motion.div layout className="popular-movies">
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </motion.div>
      {filtered.length === 0 && <p className="info">No movies to display</p>}
    </>
  );
};

export default MoviesList;
