// import {React} from 'react';
// import {BrowserRouter , Routes , Route} from 'react-router-dom';
// import NavBar from './components/layouts/Navbar';
// import Layout from './components/layouts/Layout';
// import PrimaryBtn from './components/resusable/primary-btn';
// import Home from './pages/home/page';
// import Components from './pages/components/page';
// import Blog from './pages/blog/page';
// import BlogDetail from './pages/blog/[id]/page';
// import About from './pages/about/page';
// import Service from './pages/service/page';
// import Project from './pages/project/page';
// import ProjectDetail from './pages/project/[id]/page';



// function App() {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about' element={<About />}  />
//           <Route path='/blogs' element={<Blog />} />
//           <Route path='/blog/:id' element={<BlogDetail/>} />
//           <Route path='/projects' element={<Project />} />
//           <Route path='/project/:id' element={<ProjectDetail />} />
//           <Route path='/services' element={<Service/>} />
//           <Route path='/components' element={<Components />} />
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   )
// }

// export default App


import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layouts/guest/Layout';
import SpinnerPage from './components/resusable/spinner-page';
import NotFound from './components/resusable/not-found';

// Lazy load pages
const Home = lazy(() => import('./pages/home/page'));
const Components = lazy(() => import('./pages/components/page'));
const Blog = lazy(() => import('./pages/blog/page'));
const BlogDetail = lazy(() => import('./pages/blog/[id]/page'));
const About = lazy(() => import('./pages/about/page'));
const Service = lazy(() => import('./pages/service/page'));
const Project = lazy(() => import('./pages/project/page'));
const ProjectDetail = lazy(() => import('./pages/project/[id]/page'));

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<SpinnerPage />}>
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/blogs' element={<Blog />} />
            <Route path='/blog/:id' element={<BlogDetail />} />
            <Route path='/projects' element={<Project />} />
            <Route path='/project/:id' element={<ProjectDetail />} />
            <Route path='/services' element={<Service />} />
            <Route path='/components' element={<Components />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;