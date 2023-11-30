import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
            <nav>
                <ul className="flex justify-center items-center gap-6 w-[full] h-[3rem] font-medium">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/articles"><li>Articles</li></Link>
                    {/* <Link to="/contact"><li>Contact</li></Link> */}
                    <Link to="/project"><li>Projects</li></Link>
                </ul>
            </nav>
     );
}
 
export default Navbar;