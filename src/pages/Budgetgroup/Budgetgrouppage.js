import React from 'react';
import Breadcrumb from "../../components/layouts/Breadcrumb";
import BudgetgroupForm from "./components/BudgetgroupForm";
import BudgetgroupTable from "./components/BudgetgroupTable";

const Budgetgrouppage = () => {

    // Breadcrumb items
  const breadcrumbItems = [
    { label: "BudgetGroup", link: "/budgetgroup" },
    { label: "Add", link: null },
  ];
  return (
    <div>

<Breadcrumb breadcrumbData={breadcrumbItems} />

<div className="flex justify-between gap-3 mt-6 mb-10 w-full dark:bg-gray-950">
     {/*BudgetgroupForm*/} 
     <BudgetgroupForm/>

      {/*BudgetgroupTable*/} 
      <BudgetgroupTable/>

    </div>
    </div>
  );
}

export default Budgetgrouppage;
