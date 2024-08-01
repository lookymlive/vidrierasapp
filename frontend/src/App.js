import  {Home,  Register, Login } from './pages/index.js';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideoUpload from './components/VideoUpload.js';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<VideoUpload />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
