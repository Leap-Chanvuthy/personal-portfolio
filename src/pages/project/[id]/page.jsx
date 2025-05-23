import { useParams } from "react-router-dom";
import { enProjects } from "../../../data/project-en";
import { kmProjects } from "../../../data/project-km";
import Metatag from "../../../components/resusable/meta-tag";
import { useTranslation } from "react-i18next";


const ProjectDetail = () =>{
    const {i18n} = useTranslation('project');
    const {id} = useParams();

    const enProject = enProjects.find((project) => project.id == id);
    const kmProject = kmProjects.find((project) => project.id == id);


    return (
        <div>
            {i18n.language == "en" ? 
            <Metatag title={`${enProject.title} | Leap Chanvuthy`} description={enProject.subtitle} />
            :
            <Metatag title={`${kmProject.title} | លាភ​ ច័ន្ទវុទ្ធី`} description={kmProject.subtitle} />
            }

            This is project detail page.
        </div>
    )
}

export default ProjectDetail;