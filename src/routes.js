// routes.js

import React from "react";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/Dashboard/DashboardPage";
import UserPage from "./pages/User/UserPage";
import BudgetPage from "./pages/Budgets/BudgetPage";
import CategoriesPage from "./pages/Categories/CategoriesPage";
import AddBudgetPage from "./pages/Budgets/components/AddBudgetPage";
import SettingPage from "./pages/Setting/SettingPage";
import LoginPage from "./pages/Auth/LoginPage";
import Budgetgrouppage from "./pages/Budgetgroup/Budgetgrouppage";

const AppRoutes = () => {
  return (
    <Routes>
      {/* auth */}
      <Route path="/" element={<LoginPage />} />

      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/user" element={<UserPage />} />
      <Route path="/budget" element={<BudgetPage />} />
      <Route path="/Categories" element={<CategoriesPage />} />
      <Route path="/budgetgroup" element={<Budgetgrouppage />} />
      <Route path="/addbudgetpage" element={<AddBudgetPage />} />
      <Route path="/setting" element={<SettingPage />} />
    </Routes>
  );
};

export default AppRoutes;
