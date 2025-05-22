import { Link, useLocation } from 'react-router-dom';
import { Navbar } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/slices/themeSlice';
import { MdLightMode, MdNightlight } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../resusable/language-selector';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };


const NavBar = () => {
    const { t, i18n } = useTranslation('navbar');
    const path = useLocation().pathname;
    const dispatch = useDispatch();
    const { theme } = useSelector((state) => state.theme);
    const toggle = () => {
        dispatch(toggleTheme());
    }


    const navLinks = [
        {
            path : "/",
            label : `${t('home')}`
        },
        {
            path : "/about",
            label : `${t('about')}`
        },
        {
            path : "/projects",
            label : `${t('project')}`
        },        {
            path : "/blogs",
            label : `${t('blog')}`
        },
        {
            path : "/services",
            label : `${t('service')}`
        },        {
            path : "/components",
            label : "Components"
        },
    ];


    return (
        <div className='max-w-6xl mx-10 py-5 lg:md:mx-auto  sticky top-0 z-0'>
            <Navbar fluid rounded>
                <Navbar.Brand as={Link} href="/">
                    <Link to="/"><img src="images/Leapchanvuthy.png" className="mr-3 h-10 rounded-md" alt="Flowbite React Logo" /></Link>
                </Navbar.Brand>
                <div className='flex gap-3 items-center'>
                    <div className='flex lg:md:hidden'>
                        <LanguageSelector/>
                    </div>
                    <div className='flex lg:md:hidden'>
                        {theme == 'dark' ?
                            <div className="border-2 border-gray-200 p-2 rounded-md cursor-pointer" onClick={toggle}>
                                <MdLightMode className="text-gray-500" />
                            </div>
                            :
                            <div className="border-2 border-gray-200 p-2 rounded-md cursor-pointer" onClick={toggle}>
                                <MdNightlight className="text-gray-500" />
                            </div>
                        }
                    </div>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <div className={`flex flex-col lg:md:flex-row w-full lg:items-center font-bold text-md dark:text-white  gap-6 ${i18n.language == 'km' ? 'font-kh' : '' } `}>
                        {navLinks && navLinks.map((navLink , index) => (
                            <motion.div
                                  variants={fadeInUp}
                                  initial="hidden"
                                  whileInView="visible"
                                  viewport={{ once: true, amount: 0.3 }}
                                  transition={{ duration: 0.6 }}
                                >
                                <Navbar.Link key={index} className='rounded-lg' active={path == `${navLink.path}`}>
                                    <Link to={`${navLink.path}`}>{navLink.label}</Link>
                                </Navbar.Link>
                            </motion.div>
                        ))}
                        <div className='hidden lg:md:flex'>
                            <LanguageSelector />
                        </div>
                        <div className='hidden lg:md:flex'>
                            {theme == 'dark' ?
                                <div className="border-2 border-gray-200 p-2 rounded-md cursor-pointer" onClick={toggle}>
                                    <MdLightMode className="text-gray-500" />
                                </div>
                                :
                                <div className="border-2 border-gray-200 p-2 rounded-md cursor-pointer" onClick={toggle}>
                                    <MdNightlight className="text-gray-500" />
                                </div>
                            }
                        </div>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;