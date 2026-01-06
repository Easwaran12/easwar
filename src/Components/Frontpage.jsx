import React, { useState } from "react";

function FrontPage({ onSubmit }) {
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [section, setSection] = useState("");

  const handleSubmit = () => {
    if (!department || !year || !section) {
      alert("Please select all fields");
      return;
    }
    onSubmit({ department, year, section });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Smart Attendance Management System</h2>

      <select onChange={(e) => setDepartment(e.target.value)}>
        <option value="">Select Department</option>
        <option value="B.Sc">B.Sc</option>
        <option value="M.Sc">M.Sc</option>
        <option value="BCA">BCA</option>
      </select>

      <br /><br />

      <select onChange={(e) => setYear(e.target.value)}>
        <option value="">Select Year</option>
        <option value="1st Year">1st Year</option>
        <option value="2nd Year">2nd Year</option>
        <option value="3rd Year">3rd Year</option>
      </select>

      <br /><br />

      <select onChange={(e) => setSection(e.target.value)}>
        <option value="">Select Class</option>
        <option value="A">A</option>
        <option value="B">B</option>
      </select>

      <br /><br />

      <button onClick={handleSubmit}>
        Go to Attendance
      </button>
      
    </div>
  );
}

export default FrontPage;
