import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./store/MovieContext";
import Panel from "./components/panel/Panel";
import Container from "./components/container/Container";
import Details from "./components/details/Details";

const App = () => {
  // const images = require.context('./images', false, /\.(png|jpe?g|svg)$/);
  // const imagePaths = images.keys();
  // console.log("images", images, "imagePaths", imagePaths);
  //   return (
  //     <div>
  //       {imagePaths.map((imagePath, index) => {
  //         const image = images(imagePath);
  //         console.log("imageAAAAAAAAAAAaa", image)
  //         return <img key={index} src={image} alt={`Image ${index}`} />;
  //       })}
  //     </div>
  //   );
  return (
    <div className="App">
      <MovieProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Panel />
                <Container />
              </>
            }
          />
          <Route path="/movie">
            <Route path=":movieId" element={<Details />} />
          </Route>
        </Routes>
      </MovieProvider>
    </div>
  );
};

export default App;
