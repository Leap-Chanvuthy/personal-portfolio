import History from "../components/History";
import Footer from "../components/layouts/Footer";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import Image from "../components/About/Images";
import { Avatar } from "flowbite-react";
import GitHubRepos from "../components/Project/GithubRepos";

const About = () => {
    return ( 
    <div className="h-full lg:md:mx-10 sm:mx-5 shadow-xl border-x2 border-black">
        <div className="lg:h-[21rem] md:h-[25rem] grid lg:grid-cols-2 md:sm:grid-cols-1 justify-items-center items-center my-10 px-10 py-5 gap-5">
            <div>
                <h1 className="capitalize text-2xl font-bold">As passionate learner, My journey start from here</h1>
                <p className="text font-thin">I am      
                    currently a fourth-year Computer Science student specializing in software
                    engineering at Cambodia Academy of Digital Technology. Throughout my
                    academic journey, I have developed a strong foundation in software
                    engineering principles and practices. My coursework has equipped me with a
                    solid understanding of Software Development !</p>
                <h5 className="text-center pt-4 pb-2 font-bold">Follow me </h5>
                <div className="flex justify-center items-center text-4xl gap-4">
                    <a href="https://www.linkedin.com/in/leap-chanvuthy-9402b8282/"><IoLogoLinkedin/></a>
                    <a href="https://github.com/Leap-Chanvuthy"><IoLogoGithub/></a>
                    <a href="https://t.me/Elon_Thy"><FaTelegram/></a>
                </div>
            </div>
            <div>
                <img src="../images/Leapchanvuthy.png" className="w-[250px] h-[250px] rounded-full border-2 border-green-600" />
            </div>
        </div>
        <div className="grid grid-cols-1 lg:md:grid-cols-2">
            <History/>
            <Image />
        </div>
        <GitHubRepos />
        <Footer/>
    </div>
     );
}
 
export default About;