import Filter from "../filter/Filter";
import ImagesDataList from "../imagesDataList/ImagesDataList";
import "./Container.css";

const Container = () => {
  return (
    <>
      <div className="header">
        <Filter/>
      </div>
      <div className="container">
        <ImagesDataList />
      </div>
      <div className="footer"></div>
    </>
  );
};

export default Container;
