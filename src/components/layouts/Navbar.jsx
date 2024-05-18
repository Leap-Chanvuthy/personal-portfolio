import {Link , useLocation} from 'react-router-dom';

const Navbar = () => {
    const path = useLocation().pathname;

    return ( 
            <nav>
                <ul className="flex justify-center items-center gap-6 w-[full] h-[3rem] font-medium">
                    <Link to="/" className={` ${path == '/' ? 'text-green-600 underline font-bold' : ''}`}><li>Home</li></Link>
                    <Link to="/about" className={` ${path == '/about' ? 'text-green-600 underline font-bold' : ''}`}><li>About</li></Link>
                    {/* <Link to="/articles" className={` ${path == '/articles' ? 'text-green-600 underline font-bold' : ''}`}><li>Articles</li></Link> */}
                    {/* <Link to="/contact"><li>Contact</li></Link> */}
                    <Link to="/projects" className={` ${path == '/projects' ? 'text-green-600 underline font-bold' : ''}`}><li>Projects</li></Link>
                </ul>
            </nav>
     );
}
 
export default Navbar;