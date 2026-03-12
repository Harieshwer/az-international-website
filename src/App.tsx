import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Product';
// import Features from './components/Features';
import Contact from './pages/Footer';

function App() {
  return (
    <div className="scroll-smooth overflow-x-hidden">
      <Navbar />
      <Home />
      <About />
      <Products />
      {/* <Features /> */}
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
