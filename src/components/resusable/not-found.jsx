import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {

  const {t} = useTranslation('global'); 

  return (
    <>
      <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-primary">
            {t('notFound.404')}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-7xl">
            {t('notFound.title')}
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            {t('notFound.description')}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white hover:text-black shadow-xs hover:bg-secondary_light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {t('notFound.backButton')}
            </Link>
            {/* <a href="#" className="text-sm font-semibold">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a> */}
          </div>
        </div>
      </main>
    </>
  )
}

export default NotFound;