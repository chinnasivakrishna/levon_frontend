import React, { useState } from 'react';
import { addTeacher } from '../services/api';

const AddTeacher = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addTeacher({ name, email, subject });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
      <button type="submit">Add Teacher</button>
    </form>
  );
};

export default AddTeacher;
