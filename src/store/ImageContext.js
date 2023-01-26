import { createContext, useState } from "react";

const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const fetchImage = async () => {
    const appiKey = "b6d5f69938d3ae2a278c2ce59d25908a";
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${appiKey}&language=en-US&page=1`
    );
    
    const images = await data.json();
    setFiltered(images.results);
    setActiveGenre(0);
  };

  return (
    <ImageContext.Provider
      value={{
        filtered,
        setFiltered,
        fetchImage,
        activeGenre,
        setActiveGenre
      }}
    >
      {children}
    </ImageContext.Provider>
  );
}

export default ImageContext;
