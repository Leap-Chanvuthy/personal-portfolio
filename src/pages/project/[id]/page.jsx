import { useParams } from "react-router-dom";
import { enProjects } from "../../../data/project-en";
import { kmProjects } from "../../../data/project-km";
import Metatag from "../../../components/resusable/meta-tag";
import { useTranslation } from "react-i18next";
import NavigationButton from "../../../components/resusable/navigation-button";
import { Badge } from "flowbite-react";
import { FaGithub } from "react-icons/fa";
import EnProejctDetail from "./_components/en-project-detail";
import KmProejctDetail from "./_components/km-project-detail";



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

            {/* Check language */}
            {i18n.language == "en" ?
                <EnProejctDetail project={enProject} />
                :
                <KmProejctDetail project={kmProject} />
            }

        </div>
    )
}

export default ProjectDetail;