import {
    Button,
    Timeline,
    TimelineBody,
    TimelineContent,
    TimelineItem,
    TimelinePoint,
    TimelineTime,
    TimelineTitle,
} from "flowbite-react";
import { enEducations } from "../../../data/education-en";
import { kMeducations } from "../../../data/education-km";
import { useTranslation } from "react-i18next";

const Education = () => {

    const { t, i18n } = useTranslation('about');

    return (
        <div>
            {i18n.language == 'en' ?

                <div className="my-10 mx-10 lg:md:mx-0">
                    <h2 className="font-bold text-2xl my-5">{t('education.title')}</h2>
                    <Timeline>
                        {enEducations && enEducations.map((edu) => (
                            <TimelineItem>
                                <TimelinePoint />
                                <TimelineContent>
                                    <TimelineTime>{edu.date}</TimelineTime>
                                    <TimelineTitle>{edu.title}</TimelineTitle>
                                    <TimelineBody>
                                        {edu.subtitle}
                                    </TimelineBody>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </div>
                :
                <div className="my-10 mx-10 lg:md:mx-0">
                    <h2 className="font-bold text-2xl my-5">{t('education.title')}</h2>
                    <Timeline>
                        {kMeducations && kMeducations.map((edu) => (
                            <TimelineItem>
                                <TimelinePoint />
                                <TimelineContent>
                                    <TimelineTime>{edu.date}</TimelineTime>
                                    <TimelineTitle>{edu.title}</TimelineTitle>
                                    <TimelineBody>
                                        {edu.subtitle}
                                    </TimelineBody>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </div>
            }
            <div className="border-[.5px] border-gray-200 dark:border-gray-600 w-full my-5" />
        </div>
    )
}

export default Education;