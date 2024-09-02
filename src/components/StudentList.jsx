import React from 'react';

const StudentList = ({ students }) => (
  <ul>
    {students.map(student => (
      <li key={student._id}>{student.name} - {student.grade}</li>
    ))}
  </ul>
);

export default StudentList;
