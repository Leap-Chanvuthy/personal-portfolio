import { Dropdown } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { HiCheck } from "react-icons/hi";

const languages = {
  en: { label: "English", iconClass: "fi fi-us" },
  km: { label: "ភាសាខ្មែរ", iconClass: "fi fi-kh" },
};

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const langKey = i18n.language?.split("-")[0] || "en";

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Dropdown
      label={
        <div className="flex items-center gap-2">
          <span className={`${languages[langKey]?.iconClass} text-xl`}></span>
          <span className={`text-sm ${i18n.language === 'km' ? 'font-kh font-semibold' : ''}`}>{languages[langKey]?.label}</span>
        </div>
      }
      inline
    >
      {Object.entries(languages).map(([lng, { label, iconClass }]) => (
        <Dropdown.Item
          key={lng}
          onClick={() => changeLanguage(lng)}
          icon={langKey === lng ? HiCheck : undefined}
        >
          <div className="flex items-center gap-2">
            <span className={`${iconClass} text-xl`}></span>
            <span className={`${i18n.language === 'km' ? 'font-kh font-semibold' : ''}`}>{label}</span>
          </div>
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};

export default LanguageSelector;
