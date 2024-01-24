import {React} from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Home  from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import Project from './pages/Project';
import Contact from './pages/Contact';

function App() {

  return (
    <BrowserRouter>
        <div>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/projects" element={<Project />} />
              <Route path='/contact' element={<Contact />}/>
            </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App
