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

      <div className="flex justify-between gap-3 mt-6 mb-10 w-full dark:bg-gray-950">
        {/*CategoryFormpage*/}
        <CategoryForm />

        {/*CategoryTablepage*/}
        <CategoryTable />
      </div>
    </div>
  );
};

export default CategoriesPage;
