import React, { useState } from "react";

function AttendanceTable({ students, markAttendance, updateStudent, deleteStudent }) {
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ roll: "", name: "" });

  const presentCount = students.filter((s) => s.status === "Present").length;
  const absentCount = students.filter((s) => s.status === "Absent").length;

  const handleEdit = (student) => {
    setEditId(student.id);
    setEditData({ roll: student.roll, name: student.name });
  };

  const handleSave = (id) => {
    // Apply your update here
    updateStudent(id, editData); // ✅ This is where you put it
    setEditId(null);
  };

   const submitAttendance = () => {
    console.log("Registered Students:", students);
    alert("Students Registered Successfully!");
    
    // 👉 later backend API call here
  };

  return (
    <div>
      <p>
        <strong>
          Total Students: {students.length} | Present: {presentCount} | Absent: {absentCount}
        </strong><br/>
        <br />
        <strong>
          Attendance Percentage:{" "}
          {students.length ? ((presentCount / students.length) * 100).toFixed(2) : 0}%
        </strong>
      </p>
       
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Status</th>
            <th>Mark</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>
                {editId === student.id ? (
                  <input
                    type="text"
                    value={editData.roll}
                    onChange={(e) =>
                      setEditData({ ...editData, roll: e.target.value })
                    }
                  />
                ) : (
                  student.roll
                )}
              </td>
              <td>
                {editId === student.id ? (
                  <input
                    type="text"
                    value={editData.name}
                    onChange={(e) =>
                      setEditData({ ...editData, name: e.target.value })
                    }
                  />
                ) : (
                  student.name
                )}
              </td>
              <td>{student.status}</td>
              <td>
                <button onClick={() => markAttendance(student.id, "Present")}>
                  Present
                </button>
                <button onClick={() => markAttendance(student.id, "Absent")}>
                  Absent
                </button>
              </td>
              <td>
                {editId === student.id ? (
                  <button onClick={() => handleSave(student.id)}>Save</button>
                ) : (
                  <>
                    <button onClick={() => handleEdit(student)}>Edit</button>
                    <button onClick={() => deleteStudent(student.id)}>Delete</button>
                  </>
               
                )}
              </td>
            </tr>
          ))}
          
          
        </tbody><br/>
        <tfoot>
           {/* Submit Button */}
      {students.length > 0 && (
        <button className="submit-btn"
          onClick={submitAttendance}
          style={{
            marginRight: "80px",
            backgroundColor: "green",
            color: "white",
            // float: "right",
            padding: "12px 20px",
            border: "none",
            
          }}
        >
          Submit Attendance
        </button>
      )}
        </tfoot>
      </table>
      
    </div>
  );
}

export default AttendanceTable;
