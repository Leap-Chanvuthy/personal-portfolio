import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import Projects from "../components/Projects";
import Footer from "../components/layouts/Footer";



const Home = () => {
    return ( 
        <div className="h-full lg:md:mx-10 sm:mx-5 shadow-xl border-x2 border-black">
            <div className="lg:h-[21rem] md:h-[25rem] grid lg:grid-cols-2 md:sm:grid-cols-1 justify-items-center items-center my-10 px-10 py-5 gap-5">
                <div>
                    <h1 className="capitalize text-2xl font-bold">Hello 👋 I'm Leap Chanvuthy. I'm a FullStack developer based in phnom penh !</h1>
                    <p className="text font-thin">I am currently a third-year Computer Science student specializing in software
engineering at Cambodia Academy of Digital Technology. Throughout my
academic journey, I have developed a strong foundation in software
engineering principles and practices. My coursework has equipped me with a
solid understanding of Web Development !</p>
                    <h5 className="text-center pt-4 pb-2 font-bold">Follow me </h5>
                    <div className="flex justify-center items-center text-4xl gap-4">
                        <IoLogoLinkedin/>
                        <IoLogoGithub/>
                        <FaTelegram/>
                    </div>
                </div>
                <div>
                    <img src="../../public/images/leapchanvuthy.jpg" className="w-[250px] h-[250px] rounded-full border-2 border-green-600" />
                </div>
            </div>
            <h4 className="ps-10 font-bold text-xl text-green-600">My Portfolio</h4>
            <Projects/>
            <Footer/>
        </div>
     );
}
 
export default Home;