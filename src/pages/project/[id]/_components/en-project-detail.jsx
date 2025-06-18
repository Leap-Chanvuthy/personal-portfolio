import { Badge } from "flowbite-react";
import { FaGithub } from "react-icons/fa";



const EnProejctDetail = ({project}) => {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
                <h1 className="text-2xl font-bold">{project.title}</h1>
                <p>{project.subtitle}</p>
                <div className="flex flex-wrap lg:md:flex-row items-center gap-3">
                    {project.tags && project.tags.map((badge) => (
                        <div className="flex flex-wrap gap-2">
                            <Badge color="gray">{badge}</Badge>
                        </div>
                    ))}
                </div>
            </div>
            <img className="w-full lg:md:h-[35rem] object-cover rounded-lg" src={project.images[0]} alt={project.images[0]}  />
            <div>
                <h3>Github Repositories</h3>
                <div className="flex flex-col gap-3 mt-5">
                    {project.githubRepo && project.githubRepo.map((git) => (
                        <a className="flex gap-3 items-center" href={git.link} target="_blank">
                            <FaGithub className="text-2xl" />
                            <p>{git.title}</p>
                        </a>
                    ))}
                </div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: project.body }} />
            <h3 className="font-bold">Some images</h3>
            <div className="grid bg-gray-100n dark:bg-gray-800 grid-cols-1 lg:md:grid-cols-2 gap-5">
                {project.images && project.images.map((img) => (
                    <img className="w-full lg:md:h-[20rem] object-cover rounded-lg" src={img} alt={img} />
                ))}
            </div>
        </div>
    )
}

export default EnProejctDetail;