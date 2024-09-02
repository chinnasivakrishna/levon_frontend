import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getTeachers } from '../services/api';

const TeacherDashboard = () => {
  const [teachers, setTeachers] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchTeachers = async () => {
      const response = await getTeachers();
      setTeachers(response.data);
    };
    fetchTeachers();
  }, []);

  return (
    <div>
      <h1>Teacher Dashboard</h1>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher._id}>{teacher.name} - {teacher.subject}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherDashboard;
