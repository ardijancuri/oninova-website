import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import YouGoSimPage from './pages/YouGoSimPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/yougosim" element={<YouGoSimPage />} />
      </Routes>
    </Router>
  );
}

export default App;
