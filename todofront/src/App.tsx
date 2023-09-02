//import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import ToDoList from './pages/ToDoList';
import ToDoDetailPage from './pages/ToDoDetailPage';
//import Stack from '@mui/material/Stack';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/todos" element={<ToDoList/>} />
        <Route path="/todos/:id" element={<ToDoDetailPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
