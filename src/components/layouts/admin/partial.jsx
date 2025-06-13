import { useTranslation } from "react-i18next";
import { IoChevronForwardSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Partial = ({ page, section , link }) => {
    const { t, i18n } = useTranslation('global');
    return (
        <div>
            <div className="flex items-center gap-1 mt-10">
                <Link to={`${link || ''}`} >
                    <h1 className={`font-bold capitalize`}>{page || 'Home'}</h1>
                </Link>
                <IoChevronForwardSharp className="text-sm" />
                <p className={`capitalize`}>{section || 'Section'}</p>
            </div>
        </div>
    );
};

export default Partial;
