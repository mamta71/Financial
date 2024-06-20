// routes.js

import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import DashboardPage from './pages/Dashboard/DashboardPage';
import UserPage from './pages/User/UserPage';
import BudgetPage from './pages/Budgets/BudgetPage';
import CategoriesPage from './pages/Categories/CategoriesPage';
import AddBudgetPage from './pages/Budgets/components/AddBudgetPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} /> 
      <Route path="/user" element={<UserPage />} /> 
      <Route path="/budget" element={<BudgetPage />} />
      <Route path="/Categories" element={<CategoriesPage />} />
      <Route path="/addbudgetpage" element={<AddBudgetPage />} />
    </Routes>
  );
};

export default AppRoutes;
