import Hero from "./_components/hero";
import Metatag from "../../components/resusable/meta-tag";
import { useTranslation } from "react-i18next";
import RecentPost from "./_components/recent-post";
import FeaturedWorks from "./_components/featured-works";

const Home = () =>{

    const {t} = useTranslation('meta');

    return (
        <div>
            <Metatag title={t('home.title')} description={t('home.description')} />
            <Hero />
            <RecentPost />
            <FeaturedWorks />
        </div>
    )
}

export default Home;