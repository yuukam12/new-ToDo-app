//import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import ToDoList from './pages/ToDoList';
//import Stack from '@mui/material/Stack';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/todos" element={<ToDoList/>} />
      </Routes>
    </Router>
  );
}

export default App;
