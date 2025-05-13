import {React} from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import NavBar from './components/layouts/Navbar';
import Layout from './components/layouts/Layout';

function App() {

  return (
    <BrowserRouter>
      <Layout>
        
      </Layout>
    </BrowserRouter>
  )
}

export default App
