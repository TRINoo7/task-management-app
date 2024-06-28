import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './tasktable.css'


const TaskTable = ({ onEdit }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/fetch');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
        console.log(id);
      await axios.post(`http://localhost:5000/delete/${id}`);
      setTasks(tasks.filter(task => task._id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <table class="table-class">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <tr key={task._id}>
            <td><Link to={`http://localhost:5000/${task._id}`}>{task.title}</Link></td>
            <td>{task.description}</td>
            <td>{new Date(task.due_date).toLocaleDateString()}</td>
            <td class="table-button">
              <button class="table-button-element" onClick={() => onEdit(task)}>Edit</button>
              <button class="table-button-element" onClick={() => handleDelete(task._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
