import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";



const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className='flex flex-col justify-center items-center gap-5 my-10'>
            <div className="flex justify-center items-center gap-4">
                <Link to="https://www.facebook.com/leapchanvuthy" target="_blank">
                    <FaFacebook className="text-2xl" />
                </Link>
                <Link to="https://t.me/chanvuthyleap" target="_blank">
                    <FaTelegram className="text-2xl" />
                </Link>
                <Link to="https://github.com/Leap-Chanvuthy" target="_blank">
                    <FaGithub className="text-2xl" />
                </Link>
                <Link to="https://www.linkedin.com/in/leap-chanvuthy-9402b8282/" target="_blank">
                    <FaLinkedin className="text-2xl" />
                </Link>
                <Link to="mailto:leapchanvuthy@gmail.com" target="_blank">
                    <IoMail className="text-2xl" />
                </Link>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <span>Leap Chanvuthy</span>
                <p>Copyright ©{currentYear} All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;