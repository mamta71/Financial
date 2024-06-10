// routes.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/Dashboard/DashboardPage';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} /> {/* Render DashboardPage for the root path */}
        {/* Add more routes here if needed */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
