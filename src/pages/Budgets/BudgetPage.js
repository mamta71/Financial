import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Breadcrumb from "../../components/layouts/Breadcrumb";
import { Edit, Trash } from "react-feather";
import { useNavigate } from "react-router-dom";

const BudgetPage = () => {
  const navigate = useNavigate();
  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Finance", link: "/budget" },
    { label: "List", link: null },
  ];

  // Table data
  const data = [
    { id: 1, title: "mamta", year: "2019", description: "hii hello" },
    { id: 2, title: "anu", year: "2001", description: "nice" },
    { id: 3, title: "anu1", year: "2002", description: "nice" },
    { id: 4, title: "anu2", year: "2003", description: "nice" },
    { id: 5, title: "ram", year: "2004", description: "nice" },
    { id: 6, title: "sita", year: "2005", description: "nice" },
    { id: 7, title: "hari", year: "2006", description: "nice" },
    { id: 8, title: "shyam", year: "2007", description: "nice" },
    { id: 9, title: "gita", year: "2008", description: "nice" },
    { id: 10, title: "rita", year: "2009", description: "nice" },
  ];

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  // Handle search input change
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  // Handle edit action
  const handleEdit = (row) => {
    console.log("Edit clicked", row);
    alert("Edit clicked", row);
  };

  // Handle delete action
  const handleDelete = (row) => {
    console.log("delete clicked", row);
    alert("Delete clicked", row);
  };

  //-- Define all columns
  const columns = [
    { name: "S.N", selector: (row) => row.id, sortable: true },
    { name: "Budget Name", selector: (row) => row.title, sortable: true },
    { name: "Budget Amount", selector: (row) => row.amount, sortable: true },
    { name: "Image", selector: (row) => row.image, sortable: true },
    { name: "Year", selector: (row) => row.year, sortable: true },
    { name: "Budget Description", selector: (row) => row.description, sortable: true },
    {
      name: "Action",
      cell: (row) => (
        <>
          <Edit
            size={14}
            onClick={() => handleEdit(row)}
            style={{ marginRight: "10px" }}
          />
          <Trash size={14} onClick={() => handleDelete(row)} />
        </>
      ),
    },
  ];

  return (
    <div>
      {/* Breadcrumb component */}
      <Breadcrumb breadcrumbData={breadcrumbItems} />
      <div className="pt-6">
        <div className="flex justify-end gap-2 items-center mb-2">
        <button
            onClick={() => navigate("/categories")}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Categories
          </button>
          <button
            onClick={() => navigate("/AddBudgetPage")}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
           Add Budget
          </button>
         
        </div>
        <input
          className="rounded-md"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
          style={{
            marginBottom: "10px",
            padding: "5px",
            width: "30%",
            float: "right",
            background: "rgb(17 24 38 / var(--tw-bg-opacity))",
            color: "white",
          }}
        />

        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          paginationPerPage={5}
          style={{
            width: "30px",
            float: "right",
            background: "transparent",
          }}
        />
      </div>
    </div>
  );
};

export default BudgetPage;
