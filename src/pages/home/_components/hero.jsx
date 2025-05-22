import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";
import PrimaryBtn from "../../../components/resusable/primary-btn";
import GridImage from "../../../components/resusable/grid-image";

const Hero = () => {

    const { t, i18n } = useTranslation('home');

    return (
        <div className={`flex flex-col-reverse md:flex-row mx-10 lg:md:mx-auto justify-between items-center gap-10 ${i18n.language == "km" ? "font-kh" : ""}`}>
            <div>
            <h1 className={`text-4xl lg:md:text-5xl font-bold mb-10 leading-snug sm:leading-tight`}>
  {t('hero.title')}
</h1>
                <TypeAnimation
                    className="font-bold text-primary"
                    sequence={[
                        `${t('hero.textAnimated.text1')}`,
                        3000,
                        `${t('hero.textAnimated.text2')}`,
                        3000,
                    ]}
                    wrapper="span"
                    speed={40}
                    style={{ fontSize: '2em', display: 'block' }}
                    repeat={Infinity}
                />
                <p className="max-w-[497px] my-10">{t('hero.subtitle')}</p>
                <a target="_blank" href={`${import.meta.env.VITE_RESUME_LINK}`}>
                    <PrimaryBtn text={t('hero.resume')} />
                </a>
            </div>

            <GridImage 
                image1={t('hero.images.image1')} 
                image2={t('hero.images.image2')} 
                image3={t('hero.images.image3')} 
            />
        </div>
    )
}

export default Hero;