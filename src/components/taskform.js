import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './taskform.css';

const TaskForm = ({ task, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setDueDate(task.due_date.split('T')[0]);
    } else {
      setTitle('');
      setDescription('');
      setDueDate('');
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = { title, description, due_date: dueDate };

    if (task) {
      axios.put(`http://localhost:5000/update/${task._id}`, taskData)
        .then(response => onSave(response.data))
        .catch(error => console.error('Error updating task:', error));
    } else {
      axios.post('http://localhost:5000/create', taskData)
        .then(response => onSave(response.data))
        .catch(error => console.error('Error creating task:', error));
    }
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div><input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required /></div>
      <div><textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required /></div>
      <div><input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} required /></div>
      <div><button class="form-button" type="submit">{task ? 'Update' : 'Save'}</button></div>
    </form>
  );
};

export default TaskForm;
