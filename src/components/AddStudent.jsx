import React, { useState } from 'react';
import { addStudent } from '../services/api';

const AddStudent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addStudent({ name, email, age, grade });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
      <input value={grade} onChange={(e) => setGrade(e.target.value)} placeholder="Grade" />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudent;
