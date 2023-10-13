import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPages = () => {
    const pages = [];
    const visiblePages = 5; // Number of visible page numbers

    // Calculate the range of page numbers to display
    let start = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let end = Math.min(totalPages, start + visiblePages - 1);

    if (end - start < visiblePages - 1) {
      start = Math.max(1, end - visiblePages + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <li
          key={i}
          onClick={() => onPageChange(i)}
          className={i === currentPage ? "active" : ""}
        >
          {i}
        </li>
      );
    }

    return pages;
  };

  return (
    <div className="pagination">
      <ul>{renderPages()}</ul>
    </div>
  );
};

export default Pagination;
