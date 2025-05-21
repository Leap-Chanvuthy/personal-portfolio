import { Pagination } from "flowbite-react";

const GlobalPagination = ({ currentPage, totalPages, onPageChange , itemPerPage , data }) => {
    return (
        <div>
            <div className="text-center">Showing {(currentPage - 1) * itemPerPage + 1} to {Math.min(currentPage * itemPerPage, data.length)} of {data.length} Entries</div>
            <div className="flex overflow-x-auto sm:justify-center">
                <Pagination
                    layout="navigation"
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={onPageChange}
                    showIcons
                />
            </div>
        </div>
    );
};

export default GlobalPagination;
