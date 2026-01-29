import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CustomCursor from "./CustomCursor";

function App() {
  return (
    <div className="app-container">
            <CustomCursor />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
