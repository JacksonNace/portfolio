import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;




