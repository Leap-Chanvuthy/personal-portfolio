import { Badge } from "flowbite-react";
import PrimaryBtn from "./primary-btn";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const WorkCard = ({id , image , title , badges , subtitle , body}) =>{

    const {t} = useTranslation('global');

    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <div>
            <div className="flex flex-col lg:md:flex-row gap-5 items-start">
                <img src={image} alt={image} className="w-full lg:md:w-80 h-40 object-cover rounded-lg" />
                <div className="flex flex-col gap-2 mt-3">
                    <h2 className="font-bold">{title}</h2>
                    <div className="flex flex-wrap lg:md:flex-row items-center gap-3">
                        {badges && badges.map((badge , index) =>(
                            <div className="flex flex-wrap gap-2" key={index}>
                                <Badge color="gray">{badge}</Badge>
                            </div>
                        ))}
                    </div>
                    <p className='text-sm'>
                        {truncateText(subtitle || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at erat id ligula efficitur facilisis. Donec euismod, nisi vel consectetur interdum, nisl nisi cursus nunc, eget tincidunt nunc nisl eget nunc.', 200)}
                    </p>
                    <Link to={`/project/${id}`}>
                        <p className="text-secondary underline">{t('projectCard.readMore')}</p>
                    </Link>
                </div>
            </div>
            <div className="border-[.5px] border-gray-200 dark:border-gray-600 w-full my-5" />
        </div>
    )
}


export default WorkCard;