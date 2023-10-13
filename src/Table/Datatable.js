import React, { useEffect, useMemo, useState } from "react";
import { data } from "../datasource";

const Datatable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(20);
  const [pagination, setPagination] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    generatePagination();
  }, [currentPage, itemPerPage]);

  // Clear the pagination array and generate new numbers
  const generatePagination = () => {
    let newPagination = [];
    const totalPages = Math.ceil(filteredData.length / itemPerPage);
    const maxVisiblePages = 3; // Maximum number of visible page numbers

    if (currentPage <= maxVisiblePages) {
      // If current page is in the first 3 pages, show all 3 pages.
      for (let i = 1; i <= Math.min(maxVisiblePages, totalPages); i++) {
        newPagination.push(i);
      }
    } else {
      // Add ellipsis before the last page.
      newPagination.push(1, "...");

      // Show the last 3 pages.
      for (let i = totalPages - maxVisiblePages + 1; i <= totalPages; i++) {
        newPagination.push(i);
      }
    }

    setPagination(newPagination);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const searchText = e.target.value;
    setSearch(searchText);
    setCurrentPage(1); // Reset to the first page when searching
  };

  // Filter data based on search input
  const filteredData = useMemo(() => {
    if (!search) {
      // If search is empty, return all data
      return data;
    }
    return data.filter((item) =>
      item.first_name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const computedData = () => {
    const firstIndex = (currentPage - 1) * itemPerPage;
    const lastIndex = (currentPage - 1) * itemPerPage + itemPerPage;
    return filteredData.slice(firstIndex, lastIndex);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleSearchChange}
        placeholder="Search by First Name"
      />
      <ul style={{ textAlign: "center" }}>
        {pagination.map((page, index) => (
          <li
            key={index}
            onClick={() => setCurrentPage(page === "..." ? currentPage + 1 : page)}
            style={{
              display: "inline-block",
              padding: "5px",
            }}
          >
            {page}
          </li>
        ))}
      </ul>
      <table
        cellPadding="5"
        cellSpacing="5"
        align="center"
        border="1"
        rules="all"
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Ip Address</th>
          </tr>
        </thead>
        <tbody>
          {computedData().map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.ip_address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Datatable;
