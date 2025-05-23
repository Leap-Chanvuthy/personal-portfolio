import {React} from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import NavBar from './components/layouts/Navbar';
import Layout from './components/layouts/Layout';
import PrimaryBtn from './components/resusable/primary-btn';
import Home from './pages/home/page';
import Components from './pages/components/page';
import Blog from './pages/blog/page';
import BlogDetail from './pages/blog/[id]/page';
import About from './pages/about/page';
import Service from './pages/service/page';
import Project from './pages/project/page';
import ProjectDetail from './pages/project/[id]/page';



function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}  />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/blog/:id' element={<BlogDetail/>} />
          <Route path='/projects' element={<Project />} />
          <Route path='/project/:id' element={<ProjectDetail />} />
          <Route path='/services' element={<Service/>} />
          <Route path='/components' element={<Components />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
