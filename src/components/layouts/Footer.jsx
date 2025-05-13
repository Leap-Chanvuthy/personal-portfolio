import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
    return (
        <footer className='flex flex-col justify-center items-center gap-5 my-10'>
            <div className="flex justify-center items-center gap-4">
                <Link to="https://www.facebook.com/leapchanvuthy" target="_blank">
                    <FaFacebook className="text-2xl" />
                </Link>
                <Link to="https://t.me/Leapchanvuthy" target="_blank">
                    <FaTelegram className="text-2xl" />
                </Link>
                <Link to="https://t.me/Leapchanvuthy" target="_blank">
                    <FaGithub className="text-2xl" />
                </Link>
                <Link to="https://t.me/Leapchanvuthy" target="_blank">
                    <FaLinkedin className="text-2xl" />
                </Link>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <span>Leap Chanvuthy</span>
                <p>Copyright ©2020 All rights reserved </p>
            </div>
        </footer>
    );
}

export default Footer;