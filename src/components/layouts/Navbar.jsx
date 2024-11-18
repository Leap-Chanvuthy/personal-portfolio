import {Link , useLocation} from 'react-router-dom';
import { Navbar } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/slices/themeSlice';
import {MdLightMode , MdNightlight } from 'react-icons/md';
const NavBar = () => {
    const path = useLocation().pathname;

    const dispatch =  useDispatch();
    const {theme} = useSelector((state) => state.theme);
    const toggle = () =>{
      dispatch(toggleTheme());
    }
  

    return ( 
            // <nav>
            //     <ul className="flex justify-center items-center gap-6 w-[full] h-[3rem] font-medium">
            //         <Link to="/" className={` ${path == '/' ? 'text-green-600 underline font-bold' : ''}`}><li>Home</li></Link>
            //         <Link to="/about" className={` ${path == '/about' ? 'text-green-600 underline font-bold' : ''}`}><li>About</li></Link>
            //         {/* <Link to="/articles" className={` ${path == '/articles' ? 'text-green-600 underline font-bold' : ''}`}><li>Articles</li></Link> */}
            //         {/* <Link to="/contact"><li>Contact</li></Link> */}
            //         <Link to="/projects" className={` ${path == '/projects' ? 'text-green-600 underline font-bold' : ''}`}><li>Projects</li></Link>
            //     </ul>
            // </nav>

            <div className='mx-10  sticky top-0 z-0'>
                <Navbar fluid rounded>
                    <Navbar.Brand as={Link} href="/">
                    <img src="images/Leapchanvuthy.png" className="mr-3 h-10" alt="Flowbite React Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Navbar.Link active={path == '/'}>
                            <Link to='/'>Home</Link>
                        </Navbar.Link>
                        <Navbar.Link active={path == '/about'}>
                            <Link to='/about'>About</Link>
                        </Navbar.Link>
                        <Navbar.Link active={path == '/projects'}>
                            <Link to='/projects'>Projects</Link>
                        </Navbar.Link>
                        <div>
                            {theme == 'dark' ?
                                <div className="border-2 border-gray-200 p-2 rounded-md cursor-pointer" onClick={toggle}>
                                <MdLightMode className="text-gray-500"/>
                                </div>
                                :
                                <div className="border-2 border-gray-200 p-2 rounded-md cursor-pointer" onClick={toggle}>
                                <MdNightlight className="text-gray-500" />
                                </div>
                            }
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </div>
     );
}
 
export default NavBar;