
import React, { useState } from "react";
import DataTable from "react-data-table-component";

const BudgetPage = () => {
  const data = [
    {
      id: 1,
      title: "mamta",
      year: "2019",
      description: "hii hello",
    },
    {
      id: 2,
      title: "anu",
      year: "2000",
      description: "nice",
    },
  ];

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearch(searchTerm);

    const filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm) ||
        item.year.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
  };

  const handleAction = (row) => {
    // Add your action handling logic here
    console.log("Edit row Delete row:", row);
  };

  const columns = [
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Year",
      selector: (row) => row.year,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Action",
      cell: (row) => (
        <button onClick={() => handleAction(row)}>Edit Delete</button>
      ),
    },
  ];

  const conditionalRowStyles = [
    {
      when: row => true, // Apply to all rows
      style: {
      
      },
    },
  ];

  return (
    <div>
      <div className="pt-6">
        <input
          className="rounded-md "
          type="text"
          placeholder="Search..."
          value={search}
          onChange={handleSearch}
          style={{
           
            marginBottom: "10px",
            padding: "5px",
            width: "30%",
            float: "inline-end",
            background: "rgb(17 24 38 / var(--tw-bg-opacity))"
            
          }}
        />
       
        <DataTable columns={columns} data={filteredData}   conditionalRowStyles={conditionalRowStyles}/>
     
       
       
      </div>
    </div>
  );
};

export default BudgetPage;
