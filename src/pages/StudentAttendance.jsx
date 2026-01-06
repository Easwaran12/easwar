import React from "react";

function StudentAttendance() {
  // sample data (later backend la irundhu varum)
  const student = {
    roll: "MSC101",
    name: "Arun Kumar",
    presentDays: 42,
    totalDays: 50
  };

  const percentage = (
    (student.presentDays / student.totalDays) * 100
  ).toFixed(2);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Student Attendance</h2>

      <div
        style={{
          width: "300px",
          margin: "20px auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px"
        }}
      >
        <p><b>Roll No:</b> {student.roll}</p>
        <p><b>Name:</b> {student.name}</p>
        <p><b>Present Days:</b> {student.presentDays}</p>
        <p><b>Total Days:</b> {student.totalDays}</p>

        <h3 style={{ color: percentage >= 75 ? "green" : "red" }}>
          Attendance: {percentage}%
        </h3>
      </div>
    </div>
  );
}

export default StudentAttendance;
