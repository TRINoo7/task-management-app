import React from 'react';
import TaskList from '../components/tasklist';
// import TaskForm from '../components/taskform';

const HomePage = () => (
  <div>
    {/* <TaskForm onSave={() => window.location.reload()} /> */}
    <TaskList />
  </div>
);

export default HomePage;
