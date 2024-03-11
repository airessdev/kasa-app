import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Accueil from "./pages/Accueil/Accueil";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Accueil />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
