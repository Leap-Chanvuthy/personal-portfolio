import { Outlet } from "react-router-dom";
import BackgroundMusic from "../../resusable/background-music";
import BuyMeCoffee from "../../resusable/buy-me-coffee";
import Cookie from "../../resusable/cookie";
import ScrollProgressBar from "../../resusable/scroll-progress-bar";
import Footer from "./Footer";
import NavBar from "./Navbar";
import StayWithCambodia from "../../resusable/stay-with-cambodia";

const Layout = ({children}) => {
    return (
        <div>
            <header>
                <NavBar />
                <StayWithCambodia />
            </header>
            <main className="max-w-6xl mx-auto pt-20">
                <ScrollProgressBar />
                {children}
            </main>
            <div className="max-w-6xl mx-auto">
                <BackgroundMusic />
                <BuyMeCoffee />
            </div>
            <footer className="max-w-6xl mx-auto px-5">
                <Cookie />
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;