import { Routes, Route } from "react-router-dom";
import { ImageProvider } from "./store/ImageContext";
import Panel from "./components/panel/Panel";
import Container from "./components/container/Container";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ImageProvider>
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
        </Routes>
      </ImageProvider>
    </div>
  );
};

export default App;
