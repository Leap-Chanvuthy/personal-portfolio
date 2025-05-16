import {React} from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import NavBar from './components/layouts/Navbar';
import Layout from './components/layouts/Layout';
import PrimaryBtn from './components/resusable/primary-btn';
import Home from './pages/home/page';
import Components from './pages/components/page';

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/components' element={<Components />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
