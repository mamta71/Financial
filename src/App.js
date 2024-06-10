import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import Budget from './pages/Budget';

function App() {
  return (
  <BrowserRouter>
   <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
         <Route path="budget" element={<Budget />} />  
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
