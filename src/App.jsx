// import { Suspense, lazy } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from './components/layouts/guest/Layout';
// import SpinnerPage from './components/resusable/spinner-page';
// import NotFound from './components/resusable/not-found';
// import AdminLayout from './components/layouts/admin/Layout';

// // Lazy load pages
// const Home = lazy(() => import('./pages/home/page'));
// const Components = lazy(() => import('./pages/components/page'));
// const Blog = lazy(() => import('./pages/blog/page'));
// const BlogDetail = lazy(() => import('./pages/blog/[id]/page'));
// const About = lazy(() => import('./pages/about/page'));
// const Service = lazy(() => import('./pages/service/page'));
// const Project = lazy(() => import('./pages/project/page'));
// const ProjectDetail = lazy(() => import('./pages/project/[id]/page'));

// function App() {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Suspense fallback={<SpinnerPage />}>
//           <Routes>
//             <Route path='*' element={<NotFound />} />
//             <Route path='/' element={<Home />} />
//             <Route path='/about' element={<About />} />
//             <Route path='/blogs' element={<Blog />} />
//             <Route path='/blog/:id' element={<BlogDetail />} />
//             <Route path='/projects' element={<Project />} />
//             <Route path='/project/:id' element={<ProjectDetail />} />
//             <Route path='/services' element={<Service />} />
//             <Route path='/components' element={<Components />} />
//           </Routes>
//         </Suspense>
//       </Layout>

//       <AdminLayout>
//         <Routes>
//           <Route path='/admin' element={<div>Admin Dashboard</div>} />
//         </Routes>
//       </AdminLayout>

//     </BrowserRouter>
//   );
// }

// export default App;



import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GuestLayout from './components/layouts/guest/Layout';
import AdminLayout from './components/layouts/admin/Layout';
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
      <Suspense fallback={<SpinnerPage />}>
        <Routes>
          {/* Guest routes */}
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/services" element={<Service />} />
            <Route path="/components" element={<Components />} />
          </Route>

          {/* Admin routes */}
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<div>Admin Dashboard</div>} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
