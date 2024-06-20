import React from "react";
import Breadcrumb from "../../components/layouts/Breadcrumb";
import CategoryTable from "./components/CategoryTable";
import CategoryForm from "./components/CategoryForm";

const CategoriesPage = () => {
  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Categories", link: "/categories" },
    { label: "Add", link: null },
  ];

  return (
    <div>
      <Breadcrumb breadcrumbData={breadcrumbItems} />

      <h1 className="text-xl font-bold text-white  my-4 dark:text-gray-200">
        Add New Category
      </h1>
      <div className="flex justify-between gap-3 w-full dark:bg-gray-950">
        {/*CategoryFormpage*/}
        <CategoryForm />

        {/*CategoryTablepage*/}
        <CategoryTable />
      </div>
    </div>
  );
};

export default CategoriesPage;
