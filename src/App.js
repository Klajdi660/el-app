import { Routes, Route } from "react-router-dom";
import Panel from "./components/panel/Panel";
import Container from "./components/container/Container";
import "./App.css";

const App = () => {
  return (
    <div className="App">
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
    </div>
  );
};

export default App;
