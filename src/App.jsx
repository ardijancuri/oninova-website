import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import YouGoSimPage from './pages/YouGoSimPage';
import SchedulePage from './pages/SchedulePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/work/yougosim" element={<YouGoSimPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>
    </Router>
  );
}

export default App;
