import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor"; // <- import it

function App() {
  return (
    <div className="app-container">
      <CustomCursor /> {/* <- add it here, at the top level */}
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
