import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import "./App.scss";
import "./pages/stylesheets/common.scss";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="*" element={<Login />} />
      <Route path="home" element={<Home />} />
    </Routes>
  )
}

export default App;
