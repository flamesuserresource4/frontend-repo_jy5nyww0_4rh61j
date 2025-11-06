import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.12),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.12),transparent_40%)] text-neutral-900">
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
