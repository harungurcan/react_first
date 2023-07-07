import Homepage from "./Homepage";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Video from "./SampleVideo";
import {Routes, Route, Link} from 'react-router-dom';
import SampleVideo from "./SampleVideo";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about-me" className="nav-item">About Me</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
        <Link to="/samplevideo"  className="nav-item">Sample Video</Link>
      </nav>
      <Routes>
        <Route path="/" element= {<Homepage />} />
        <Route path="/about-me" element= {<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/samplevideo" element={<SampleVideo />} />
      </Routes>
    </div>
  );
}

export default App;
