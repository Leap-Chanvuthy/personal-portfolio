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
import Footer from "./Footer";
import NavBar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div className="max-w-6xl mx-auto">
            <header>
                <NavBar />
            </header>
            <main className="max-w-6xl mx-auto my-28">
                {children || <div>No content available</div>}
            </main>
            <div>
                <BackgroundMusic />
                <BuyMeCoffee />
            </div>
            <footer className="max-w-5xl mx-auto px-5">
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;