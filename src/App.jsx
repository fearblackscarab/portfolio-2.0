import { Route, Routes } from "react-router-dom";
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";

const App =()=> {

  return (
    <div className='app'>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/projects" element={<Projects />}/>
    </Routes>
    <Footer/>
    </div>
  )
};

export default App;