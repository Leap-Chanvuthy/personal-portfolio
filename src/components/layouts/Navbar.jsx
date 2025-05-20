import { Link, useLocation } from 'react-router-dom';
import { Navbar } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/slices/themeSlice';
import { MdLightMode, MdNightlight } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../resusable/language-selector';
const NavBar = () => {
    const { t, i18n } = useTranslation('navbar');
    const path = useLocation().pathname;
    const dispatch = useDispatch();
    const { theme } = useSelector((state) => state.theme);
    const toggle = () => {
        dispatch(toggleTheme());
    }


    return (
        <div className='max-w-6xl mx-auto  sticky top-0 z-0'>
            <Navbar fluid rounded>
                <Navbar.Brand as={Link} href="/">
                    <img src="images/Leapchanvuthy.png" className="mr-3 h-10 rounded-md" alt="Flowbite React Logo" />
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
                        <Navbar.Link className='rounded-lg' active={path == '/'}>
                            <Link to='/'>{t('home')}</Link>
                        </Navbar.Link>
                        <Navbar.Link className='rounded-lg'  active={path == '/about'}>
                            <Link to='/about'>{t('about')}</Link>
                        </Navbar.Link>
                        <Navbar.Link className='rounded-lg'  active={path == '/projects'}>
                            <Link to='/projects'>{t('project')}</Link>
                        </Navbar.Link>
                        <Navbar.Link className='rounded-lg'  active={path == '/blogs'}>
                            <Link to='/blogs'>{t('blog')}</Link>
                        </Navbar.Link>
                        <Navbar.Link className='rounded-lg'  active={path == '/services'}>
                            <Link to='/services'>{t('service')}</Link>
                        </Navbar.Link>
                        <Navbar.Link className='rounded-lg'  active={path == '/components'}>
                            <Link to='/components'>Component</Link>
                        </Navbar.Link>
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