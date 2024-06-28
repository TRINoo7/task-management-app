import React, { useState } from 'react';
import TaskForm from './taskform';
import TaskTable from './tasktable';

const TaskList = () => {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleEdit = (task) => {
    setSelectedTask(task);
  };

  const handleSave = () => {
    setSelectedTask(null);
  };

  return (
    <div>
      <h1>New Task</h1>
      <TaskForm task={selectedTask} onSave={handleSave} />
      <h1>Task List</h1>
      <TaskTable onEdit={handleEdit} />
    </div>
  );
};

export default TaskList;
