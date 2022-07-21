import "./App.css";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Nav />
      <Carousel />
      <Products />
      <About />
      <Footer />
    </div>
  );
}

export default App;
