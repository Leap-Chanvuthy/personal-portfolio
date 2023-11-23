import { useEffect, useState } from 'react';
import {data} from '../components/data/data';
import { GoLink } from "react-icons/go";



const Projects = () => {
    const [projects , setProjects] = useState([]);
    const [loading , setLoading] = useState(true);
    useEffect(() => {
        setProjects(data);
        setLoading(false);
    } , [])
    console.log(projects);

    return (
        <div>
            {loading && <h3>loading</h3>}
            <div  className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-3 p-4 pt-10'>
                {projects && projects.map((project) => (
                    <div key={project.id} className='w-full h-full  hover:text-gray-600'>
                        <div  className='h-full border-l-2 border-l-green-600  hover:bg-gray-100 px-4 py-2 '>
                            <h4 className='text-lg font-bold'>{project.title}</h4>
                            <p>{project.description}</p>
                            <a href={project.link} className='pt-4 flex items-center gap-3 text-green-600'>
                                <GoLink className='text-sm'/>
                                <p>view portfolio</p>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>        
     );
}
 
export default Projects;