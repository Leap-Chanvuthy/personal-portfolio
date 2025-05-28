import { useTranslation } from "react-i18next";
import MindsetCard from "../../../components/resusable/mindset-card";
import { motion } from "framer-motion";

const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
};

const fadeInTop = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
};

const WhyWorkingWithMe = () => {
    const { t } = useTranslation("service");

    const mindsets = [
        {
            id: 1,
            img: `${t('hero.cards.card1.img')}`,
            title: `${t('hero.cards.card1.title')}`,
            body: `${t('hero.cards.card1.body')}`
        },
        {
            id: 2,
            img: `${t('hero.cards.card2.img')}`,
            title: `${t('hero.cards.card2.title')}`,
            body: `${t('hero.cards.card2.body')}`
        },
        {
            id: 3,
            img: `${t('hero.cards.card3.img')}`,
            title: `${t('hero.cards.card3.title')}`,
            body: `${t('hero.cards.card3.body')}`
        },
        {
            id: 4,
            img: `${t('hero.cards.card4.img')}`,
            title: `${t('hero.cards.card4.title')}`,
            body: `${t('hero.cards.card4.body')}`
        }
    ];

    return (
        <div className="mx-10 lg:md:mx-auto">
            <motion.div
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <div className="flex flex-col gap-5 my-10">
                    <h1 className="font-bold text-4xl lg:md:text-6xl">
                        {t('hero.title')}
                    </h1>
                    <p className="text-start lg:md:text-justify">
                        {t('hero.subtitle')}
                    </p>
                </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:md:grid-cols-2 gap-5 my-10">
                {mindsets.map((item, index) => (
                    <motion.div
                        key={item.id}
                        variants={fadeInTop}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                    >
                        <MindsetCard
                            title={item.title}
                            body={item.body}
                            img={item.img}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WhyWorkingWithMe;
