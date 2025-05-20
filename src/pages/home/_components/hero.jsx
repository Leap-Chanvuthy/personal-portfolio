import { Avatar } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";
import PrimaryBtn from "../../../components/resusable/primary-btn";

const Hero = () => {

    const { t, i18n } = useTranslation('home');

    const sequence = [
        `${t('hero.textAnimated.text1')}`
    ]

    return (
        <div className={`flex flex-col-reverse md:flex-row mx-10 lg:md:mx-auto justify-between items-center gap-10 ${i18n.language == "km" ? "font-kh" : ""}`}>
            <div>
                <h1 className={`text-5xl font-bold mb-10`}>{t('hero.title')}</h1>
                <TypeAnimation
                    className="font-bold text-secondary"
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
                <a>
                    <PrimaryBtn text="Download Resume" />
                </a>
            </div>
            <img src={`${t('hero.imageUrl')}`} className="w-[250px] rounded-full" rounded />
        </div>
    )
}

export default Hero;