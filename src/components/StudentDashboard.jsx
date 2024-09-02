import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getStudents } from '../services/api';

const StudentDashboard = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchStudents = async () => {
      const response = await getStudents();
      setStudents(response.data);
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h1>Student Dashboard</h1>
      <ul>
        {students.map((student) => (
          <li key={student._id}>{student.name} - {student.grade}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
