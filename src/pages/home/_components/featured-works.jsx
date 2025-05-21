import { Link } from "react-router-dom";
import WorkCard from "../../../components/resusable/work-card";
import { useTranslation } from "react-i18next";


const FeaturedWorks = () => {

    const {t} = useTranslation('home');

    return (
        <div className="my-10 p-5">
            <div className="flex justify-between my-5">
            <h3 className="text-lg font-bold">{t('featuredWork.title')}</h3>
                <Link to="/blogs">
                    <p className="text-secondary underline">{t('featuredWork.view')}</p>
                </Link>
            </div>
            <div>
                <WorkCard
                    title="Web Development and Web Design"
                    subtitle="Vuthy Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat id ligula efficitur facilisis. Donec euismod, nisi vel consectetur interdum, nisl nisi cursus nunc, eget tincidunt nunc nisl eg..."
                    image="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg"
                    badge="Web Design"
                />
                <WorkCard
                    title="Web Development and Web Design"
                    subtitle="Vuthy Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat id ligula efficitur facilisis. Donec euismod, nisi vel consectetur interdum, nisl nisi cursus nunc, eget tincidunt nunc nisl eg..."
                    image="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg"
                    badge="Web Design"
                />
            </div>
        </div>
    )
}

export default FeaturedWorks;