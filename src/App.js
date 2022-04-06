import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navigation from "./components/Shared/Navigation/Navigation";
import About from "./components/About/About"
import Skill from "./components/Skill/Skill"
import Portfolio from "./components/Portfolio/Portfolio"
import Contact from "./components/Contact/Contact"
import Blog from "./components/Blog/Blog"
import More from "./components/More/More"
import Web from "./components/Skill/Web/Web";
import Programming from "./components/Skill/Programming/Programming";
import Others from "./components/Skill/Others/Others";
import Tools from "./components/Skill/Tools/Tools";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skill' element={<Skill/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/more' element={<More/>}/>
        <Route path='/web' element={<Web/>}/>
        <Route path='/programming' element={<Programming/>}/>
        <Route path='/others' element={<Others/>}/>
        <Route path='/tools' element={<Tools/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
