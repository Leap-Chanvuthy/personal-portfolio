import { Link } from "react-router-dom";
import { enProjects } from "../../../data/project-en";
import { kmProjects } from "../../../data/project-km";
import WorkCard from "../../../components/resusable/work-card";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";


    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };


const AllProjects = () => {

    const { t , i18n } = useTranslation("project")

    return (
        <div className="my-10 mx-10 lg:md:mx-auto">
            <div className="flex justify-between my-5">
                <h3 className="text-lg font-bold">{t('allProjects.title')}</h3>
                <Link to="/projects">
                    <p className="text-secondary underline">{t('allProjects.view')}</p>
                </Link>
            </div>

            {i18n.language == "en" ? 
                <div className="my-10">
                    {enProjects && enProjects.map((project) => (
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Link to={`/project/${project.id}`} key={project.id}>
                                <WorkCard
                                    id={project.id}
                                    title={project.title}
                                    image={project.images[1]}
                                    badges={project.tags}
                                    subtitle={project.subtitle}
                                />
                            </Link>
                        </motion.div>
                    ))}
                </div>
                :
                <div className="my-10">
                    {kmProjects && kmProjects.map((project) => (
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                        >                      
                            <Link to={`/project/${project.id}`} key={project.id}>
                                <WorkCard
                                    id={project.id}
                                    title={project.title}
                                    image={project.images[1]}
                                    badges={project.tags}
                                    subtitle={project.subtitle}
                                />
                            </Link>
                        </motion.div>  
                    ))}
                </div>
            }

        </div>
    )
}

export default AllProjects;