import { useTranslation } from "react-i18next";
import { FiHome, FiUser, FiSettings, FiImage, FiFileText, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = ({ isOpen, setIsOpen }) => {

    const { t } = useTranslation('sidebar');
    const path = useLocation().pathname;
    
    const navLinks = [
    { path: '/admin/dashboard', label: t('dashboard') , icon : FiHome },
    { path: '/admin/media', label: t('media') , icon : FiImage },
    { path: '/admin/projects', label: t('project') , icon : FiFileText },
    { path: '/admin/blogs', label: t('blog') , icon : FiFileText },
  ];



  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden transition-opacity ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={`fixed z-40 md:static top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-sm transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div className="md:hidden flex justify-end p-4">
          <button onClick={() => setIsOpen(false)} className="text-gray-700 dark:text-white text-xl">
            <FiX />
          </button>
        </div>

        <nav className="px-6 py-4 space-y-4 text-gray-800 dark:text-gray-100">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 ${path == link.path ? 'bg-gray-100' : ''}  p-2 rounded-lg`}
              >
                <Icon />
                <p className="font-semibold">{link.label}</p>
              </Link>
            );
          })}
        </nav>

      </aside>
    </>
  );
};

export default AdminSidebar;
