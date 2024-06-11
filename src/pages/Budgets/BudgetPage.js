import React from "react";
import DataTable from "react-data-table-component";
import { Edit } from "react-feather";


const BudgetPage = () => {
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
        selector: (row) => row.discription,
      },

    {
        name: "Action",
        
      },
  ];

  const data = [
    {
      id: 1,
      title: "",
      year: "",
      description:"",
    },
    {
      id: 2,
      title: "",
      year: "",
      description:"",
    },
  ];
  return (
    <div>
      <div className="pt-4">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default BudgetPage;
