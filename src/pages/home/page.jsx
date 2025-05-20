import Hero from "./_components/hero";
import Metatag from "../../components/resusable/meta-tag";
import { useTranslation } from "react-i18next";

const Home = () =>{

    const {t} = useTranslation('meta');

    return (
        <div>
            <Metatag title={t('home.title')} description={t('home.description')} />
            <Hero />
        </div>
    )
}

export default Home;