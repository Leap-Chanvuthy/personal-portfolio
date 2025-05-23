import { useTranslation } from "react-i18next";
import Metatag from "../../components/resusable/meta-tag";
import AllProjects from "./_components/all-projects";


const Project = () => {

    const {t} = useTranslation('meta');

    return (
        <div>
            <Metatag title={t("project.title")} description={t("project.description")} />
            <AllProjects />

        </div>
    )
}

export default Project;