import { Link } from "react-router-dom";
import WorkCard from "../../../components/resusable/work-card";
import { useTranslation } from "react-i18next";
import { enProjects } from "../../../data/project-en";
import { kmProjects } from "../../../data/project-km";
import { motion } from "framer-motion";



const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const FeaturedWorks = () => {

    const { t, i18n } = useTranslation('home');

    return (
        <div className="my-10 p-5">
            <div className="flex justify-between my-5">
                <h3 className="text-lg font-bold">{t('featuredWork.title')}</h3>
                <Link to="/projects">
                    <p className="text-secondary underline">{t('featuredWork.view')}</p>
                </Link>
            </div>
            <div>
                {i18n.language == "en" ?
                    <div className="my-10">
                        {enProjects && enProjects.slice(0, 3).map((project) => (
                            <motion.div
                                key={project.id}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Link to={`/project/${project.id}`}>
                                    <WorkCard
                                        id={project.id}
                                        title={project.title}
                                        image={project.images[0]}
                                        badges={project.tags}
                                        subtitle={project.subtitle}
                                    />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                    :
                    <div className="my-10">
                        {kmProjects && kmProjects.slice(0, 3).map((project) => (
                            <motion.div
                                key={project.id}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6 }}
                            >
                                <Link to={`/project/${project.id}`}>
                                    <WorkCard
                                        id={project.id}
                                        title={project.title}
                                        image={project.images[0]}
                                        badges={project.tags}
                                        subtitle={project.subtitle}
                                    />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default FeaturedWorks;