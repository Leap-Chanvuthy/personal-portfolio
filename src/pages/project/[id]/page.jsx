import { useParams } from "react-router-dom";
import { enProjects } from "../../../data/project-en";
import { kmProjects } from "../../../data/project-km";
import Metatag from "../../../components/resusable/meta-tag";
import { useTranslation } from "react-i18next";
import NavigationButton from "../../../components/resusable/navigation-button";
import { Badge } from "flowbite-react";
import { FaGithub } from "react-icons/fa";



const ProjectDetail = () => {
    const { i18n } = useTranslation('project');
    const { id } = useParams();

    const enProject = enProjects.find((project) => project.id == id);
    const kmProject = kmProjects.find((project) => project.id == id);


    return (
        <div className="mx-5 lg:md:mx-auto">
            {i18n.language == "en" ?
                <Metatag title={`${enProject.title} | Leap Chanvuthy`} description={enProject.subtitle} />
                :
                <Metatag title={`${kmProject.title} | លាភ​ ច័ន្ទវុទ្ធី`} description={kmProject.subtitle} />
            }

            <div className="mb-5">
                <NavigationButton />
            </div>

            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-5">
                    <h1 className="text-2xl font-bold">{enProject.title}</h1>
                    <p>{enProject.subtitle}</p>
                    <div className="flex flex-wrap lg:md:flex-row items-center gap-3">
                        {enProject.tags && enProject.tags.map((badge) => (
                            <div className="flex flex-wrap gap-2">
                                <Badge color="gray">{badge}</Badge>
                            </div>
                        ))}
                    </div>
                </div>
                <img className="w-full lg:md:h-[35rem] object-cover rounded-lg" src={enProject.images[0]} />
                <div>
                    <h3>Github Repositories</h3>
                    <div className="flex flex-col gap-3 mt-5">
                        {enProject.githubRepo && enProject.githubRepo.map((git) => (
                            <a className="flex gap-3 items-center" href={git.link} target="_blank">
                                <FaGithub className="text-2xl" />
                                <p>{git.title}</p>
                            </a>
                        ))}
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: enProject.body }} />
                <h3 className="font-bold">Some images</h3>
                <div className="grid grid-cols-1 lg:md:grid-cols-2 gap-5">
                    {enProject.images && enProject.images.map((img) => (
                        <img className="w-full lg:md:h-[20rem] object-cover rounded-lg" src={img} />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default ProjectDetail;