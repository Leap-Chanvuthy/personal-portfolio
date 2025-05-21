import { Button } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const NavigationButton = () => {

    const {t , i18n} = useTranslation('global');

    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }

    return (
        <Button onClick={handleBack} color="gray" className={`w-sm ${i18n.language === 'km' ? 'font-kh font-light' : ''}`} >
            <IoIosArrowBack className="mr-2" />
            {t('navigationButton')}
        </Button>
    )
}


export default NavigationButton;