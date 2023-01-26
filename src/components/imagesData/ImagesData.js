import { motion } from "framer-motion";
import "./ImagesData.css";

const ImagesData = ({ image, id }) => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="imagesData-container"
    >
      <img src={image} alt={`img ${id}`}/>
    </motion.div>
  );
}

export default ImagesData;
