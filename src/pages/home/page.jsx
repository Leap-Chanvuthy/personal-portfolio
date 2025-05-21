// import Hero from "./_components/hero";
// import Metatag from "../../components/resusable/meta-tag";
// import { useTranslation } from "react-i18next";
// import RecentPost from "./_components/recent-post";
// import FeaturedWorks from "./_components/featured-works";
// import { motion } from "framer-motion";

// const Home = () =>{

//     const {t} = useTranslation('meta');

//     return (
//         <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         >
//             <Metatag title={t('home.title')} description={t('home.description')} />
//             <Hero />
//             <RecentPost />
//             <FeaturedWorks />
//         </motion.div>
//     )
// }

// export default Home;


import Hero from "./_components/hero";
import Metatag from "../../components/resusable/meta-tag";
import { useTranslation } from "react-i18next";
import RecentPost from "./_components/recent-post";
import FeaturedWorks from "./_components/featured-works";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const { t } = useTranslation("meta");

  return (
    <div>
      <Metatag title={t("home.title")} description={t("home.description")} />

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
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <RecentPost />
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <FeaturedWorks />
      </motion.div>
    </div>
  );
};

export default Home;
