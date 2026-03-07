import { Home } from "./Pages/Home";
import { Passions } from "./Pages/Passions";
import { Projects } from "./Pages/Projects";
import { Photography } from "./Pages/Photography";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Passions" element={<Passions />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Photography" element={<Photography />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
