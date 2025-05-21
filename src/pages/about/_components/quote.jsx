import { Blockquote } from "flowbite-react";
import { useTranslation } from "react-i18next";


const Quote = () => {

    const {t} = useTranslation('about')

    return (
        <div className="my-10 mx-10 lg:md:mx-0">
            <h2 className="font-bold text-2xl my-5 ">{t('quote.title')}</h2>
            <Blockquote>
                <svg
                    className="mb-4 h-8 w-8 text-gray-400 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                {t('quote.blockQuote')}
            </Blockquote>
            <div className="border-[.5px] border-gray-200 dark:border-gray-600 w-full my-5" />
        </div>
    )
}


export default Quote;