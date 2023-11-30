import {Link} from 'react-router-dom'
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
    return ( 
        <footer>
            <hr />
            <ul className="flex justify-between p-10 items-center gap-2 font-thin">
                <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols1 items-center gap-6'>
                    <Link to="/articles"><li>Articles</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <Link to="/blog"><li>Blog</li></Link>
                </div>
                <div>
                    <div className="flex justify-center items-center text-xl gap-4">
                        <a href="https://www.linkedin.com/in/leap-chanvuthy-9402b8282/"><IoLogoLinkedin/></a>
                        <a href="https://github.com/Leap-Chanvuthy"><IoLogoGithub/></a>
                        <a href="https://t.me/Elon_Thy"><FaTelegram/></a>
                    </div>
                </div>
            </ul>
        </footer>
     );
}
 
export default Footer;