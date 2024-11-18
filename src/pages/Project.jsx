import GitHubRepos from '../components/Project/GithubRepos';
import Projects from '../components/Projects';
import Footer from '../components/layouts/Footer';

const Project = () => {

    return ( 
        <div className="h-full lg:md:mx-10 sm:mx-5 shadow-xl border-x2 border-black">
            <div className="lg:h-[21rem] md:h-[25rem] grid lg:grid-cols-2 md:sm:grid-cols-1 justify-items-center items-center my-10 px-10 py-5 gap-5">
                <div>
                    <h1 className="capitalize text-2xl font-bold">Explore my portfolio where i put my dedication and innovative ideas here !   🚀 </h1>                    
                    <p className="text font-thin">In my journey as a Computer Science student specializing in software engineering at Cambodia Academy of Digital Technology, I have cultivated a robust skill set and a deep passion for web development. My academic endeavors have equipped me with a solid foundation in Node.js, and this knowledge has been fortified through hands-on experiences in various school projects. </p>
                </div>
                <div>
                    <img src="../images/Leapchanvuthy2.png" className="w-[250px] h-[250px] rounded-full border-2 border-green-600" />
                </div>
            </div>
            <GitHubRepos />
            <Footer/>
        </div>
     );
}
 
export default Project;