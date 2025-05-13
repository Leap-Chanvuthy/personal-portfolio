import Footer from "./Footer";
import NavBar from "./Navbar";

const Layout = ({ children, className = "" }) => {
    return (
        <div className={`flex flex-col justify-between min-h-screen ${className}`}>
            <header>
                <NavBar />
            </header>
            <main className="flex-grow m-10">
                {children || <div>No content available</div>}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;