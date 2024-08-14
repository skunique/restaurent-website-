
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Menu from './Pages/Menu';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/Menu" element={<Menu/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
