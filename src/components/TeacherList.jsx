import React from 'react';

const TeacherList = ({ teachers }) => (
  <ul>
    {teachers.map(teacher => (
      <li key={teacher._id}>{teacher.name} - {teacher.subject}</li>
    ))}
  </ul>
);

export default TeacherList;
