import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Breadcrumb from "../../components/layouts/Breadcrumb";
import { Edit, Trash } from "react-feather";

const BudgetPage = () => {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Finance", link: "/" },
    { label: "List", link: null },
  ];

  // Table data
  const data = [
    { id: 1, title: "mamta", year: "2019", description: "hii hello" },
    { id: 2, title: "anu", year: "2000", description: "nice" },
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

  const columns = [
    { name: "Title", selector: (row) => row.title, sortable: true },
    { name: "Year", selector: (row) => row.year, sortable: true },
    { name: "Description", selector: (row) => row.description, sortable: true },
    {
      name: "Action",
      cell: (row) => (
        <>
          <Edit size={14} onClick={() => handleEdit(row)} style={{ marginRight: '10px' }} />
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
        />
      </div>
    </div>
  );
};

export default BudgetPage;
