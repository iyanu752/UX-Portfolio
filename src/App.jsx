import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './homepage/Navbar';
import Home from './pages/Home';
import Footer from './homepage/footer';
import About from './pages/About';
import Project from './pages/Projects';

function App() {
  return (
    <Router>
      <div className="bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;