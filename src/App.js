import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import TaskDetail from './components/taskdetails';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/tasks/:id" element={<TaskDetail />} /> */}
    </Routes>
  </Router>
);

export default App;
