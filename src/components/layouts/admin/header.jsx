import { FiMenu } from "react-icons/fi";
import LanguageSelector from "../../resusable/language-selector";

const AdminHeader = ({ setIsSidebarOpen }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow px-4 py-3 flex justify-between items-center sticky top-0 z-20">
      <button
        className="md:hidden text-2xl text-gray-700 dark:text-white"
        onClick={() => setIsSidebarOpen(true)}
      >
        <FiMenu />
      </button>
      <div className="flex justify-between gap-4">
        <h1 className="text-lg font-semibold text-gray-700 dark:text-white">Admin Dashboard</h1>
        <LanguageSelector />
      </div>
    </header>
  );
};

export default AdminHeader;
