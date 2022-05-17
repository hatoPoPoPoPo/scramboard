import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import "./App.scss";
import "./pages/stylesheets/common.scss";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="*" element={<Login />} />
    </Routes>
  )
}

export default App;
