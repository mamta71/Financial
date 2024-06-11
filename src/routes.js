// routes.js

import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter import
import DashboardPage from './pages/Dashboard/DashboardPage';
import UserPage from './pages/User/UserPage';
import BudgetPage from './pages/Budgets/BudgetPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} /> {/* Render DashboardPage for the root path */}
      <Route path="/user" element={<UserPage />} /> {/* Render UserPage for the /user path */}
      <Route path="/budget" element={<BudgetPage />} />
      {/* Add more routes here if needed */}
    </Routes>
  );
};

export default AppRoutes;
