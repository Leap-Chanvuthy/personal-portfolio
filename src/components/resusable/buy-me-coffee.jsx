import { useTranslation } from "react-i18next";


const BuyMeCoffee = () => {

    const {t} = useTranslation('global');

    return (
        <div className="my-10 mx-10 lg:md:mx-0">
            <h3 className="text-2xl font-bold">{t('supportMe.hi')}</h3>
            <p>{t('supportMe.thanks')}</p>
            <div className="flex flex-col lg:md:flex-row items-start gap-5 my-5">
                <img src="/assets/bmc-logo.svg" alt="coffee" />
                <div>
                    <p className="font-bold">{t('supportMe.title')}</p>
                    <a className="underline" target="_blank" href={`${t('supportMe.abaLink')}`}>{t('supportMe.abaLink')}</a>
                </div>
            </div>
        </div>
    );
}

export default BuyMeCoffee;