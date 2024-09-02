import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/student-dashboard" component={<StudentDashboard />} />
        <Route path="/teacher-dashboard" component={<TeacherDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
