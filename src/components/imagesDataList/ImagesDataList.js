import ImagesData from "../imagesData/ImagesData";
import { motion } from "framer-motion";
import "./ImagesDataList.css";

const ImagesDataList = () => {
  const images = require.context('../../images', false, /\.(png|jpe?g|svg)$/);
  const imagePaths = images.keys();

  return (
    <>
      <motion.div layout className="imagesDataList-container">
        {imagePaths.map((movie, index) => {
          const image = images(movie);
          return (
            <ImagesData
              key={index} 
              id={index} 
              image={image}
            />
          );
        })}
      </motion.div>
    </>
  );
};

export default ImagesDataList;
