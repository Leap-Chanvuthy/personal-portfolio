// import Footer from "./Footer";
// import NavBar from "./Navbar";

// const Layout = ({ children, className = "" }) => {
//     return (
//         <div className={`flex flex-col justify-between min-h-screen ${className}`}>
//             <header>
//                 <NavBar />
//             </header>
//             <main className="flex-grow m-10">
//                 {children || <div>No content available</div>}
//             </main>
//             <footer>
//                 <Footer />
//             </footer>
//         </div>
//     );
// };

// export default Layout;


import BackgroundMusic from "../resusable/background-music";
import BuyMeCoffee from "../resusable/buy-me-coffee";
import Cookie from "../resusable/cookie";
import ScrollProgressBar from "../resusable/scroll-progress-bar";
import Footer from "./Footer";
import NavBar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main className="max-w-6xl mx-auto pt-20">
                <ScrollProgressBar />
                {children || <div>No content available</div>}
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