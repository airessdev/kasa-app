import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Accueil from "./pages/Accueil/Accueil";
import Logement from "./pages/logement/logement";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          
          <Route path="/" element={<Accueil />}></Route>
          <Route path="/accueil" element={<Accueil />}></Route>
          <Route path="/logement/:id" element={<Logement />}></Route>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
