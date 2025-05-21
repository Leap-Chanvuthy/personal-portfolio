import { useTranslation } from "react-i18next";
import Metatag from "../../components/resusable/meta-tag";
import Hero from "./_components/hero";
import Quote from "./_components/quote";
import Education from "./_components/education";
import WorkHistory from "./_components/work-history";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  

const About = () => {

    const { t } = useTranslation('meta');

    return (
        <div>
            <Metatag title={t('about.title')} description={t('about.description')} />
            
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <Hero />
            </motion.div>

            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <Quote />            
            </motion.div>

            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <Education />
            </motion.div>

            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <WorkHistory />
            </motion.div>
        </div>
    )
}


export default About;