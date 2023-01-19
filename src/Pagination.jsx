import React from "react";
import "./Pagination.css";

const Pagination = ({
    totalData,
    itemsPerPage,
    setCurrentPage,
    currentPage,
}) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalData / itemsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className='pagination'>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page === currentPage ? "active" : ""}
                        data-testid="pagination-btn">
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;