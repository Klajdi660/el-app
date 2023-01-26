import { useContext, useEffect, useState } from "react";
import ImageContext from "../../store/ImageContext";
import genres from "../../genres";
import { BiArrowFromRight } from "react-icons/bi";
import { MdMoreHoriz } from "react-icons/md";
import "./Filter.css";

const Filter = () => {
  const { setActiveGenre, activeGenre, setFiltered, movies } = useContext(ImageContext);
  const [moreGenres, setMoreGenres] = useState(false);

  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(movies);
    } else {
      const filtered = movies.filter((movie) =>
        movie.genre_ids.includes(activeGenre)
      );
      setFiltered(filtered);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeGenre]);

  return (
    <div className="filter-container">
      <button className={activeGenre === 0 ? "active" : null}>
        All
      </button>
      <button
        className={activeGenre === 28 ? "active" : null}
      >
        Action
      </button>
      <button
        className={activeGenre === 12 ? "active" : null}
      >
        Adventure
      </button>
      {moreGenres &&
        genres.map((genre) => (
          <button
            key={genre.id}
            className={activeGenre === genre.id ? "active" : null}
            onClick={() => setActiveGenre(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      <button className="more" onClick={() => setMoreGenres(!moreGenres)}>
        {moreGenres ? <BiArrowFromRight /> : <MdMoreHoriz />}
      </button>
    </div>
  );
};

export default Filter;
