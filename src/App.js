import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';

function App() {
  return (
  <BrowserRouter>
   <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="/contact" element={<Contact />} />  */}
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
