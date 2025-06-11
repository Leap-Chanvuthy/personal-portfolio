import { FiMenu } from "react-icons/fi";

const AdminHeader = ({ setIsSidebarOpen }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow px-4 py-3 flex justify-between items-center sticky top-0 z-20">
      <button
        className="md:hidden text-2xl text-gray-700 dark:text-white"
        onClick={() => setIsSidebarOpen(true)}
      >
        <FiMenu />
      </button>
      <h1 className="text-lg font-semibold text-gray-700 dark:text-white">Admin Dashboard</h1>
    </header>
  );
};

export default AdminHeader;
