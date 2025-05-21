import { useTranslation } from "react-i18next";
import Metatag from "../../components/resusable/meta-tag";
import Hero from "./_components/hero";
import Quote from "./_components/quote";
import Education from "./_components/education";

const About = () =>{
    
    const {t} = useTranslation('meta');
    
    return (
        <div>
            <Metatag title={t('about.title')} description={t('about.description')} />
            <Hero />
            <Quote />
            <Education />
        </div>
    )
}


export default About;