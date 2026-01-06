import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";
import student from "./Components/StudentsData";
import FrontPage from "./Components/Frontpage";
// import AttendanceTable from "./AttendanceTable";
import Header from "./Components/Header";
import AttendanceTable from "./pages/AttendanceTable";
import StudentAttendance from "./pages/StudentAttendance";


<Route path="/student" element={<StudentAttendance />} />

function App() {
  const [page, setPage] = useState("front");
  const [classInfo, setClassInfo] = useState({});
  const [students, setStudents] = useState([]);

  const startAttendance = (data) => {
    setClassInfo(data);
    setPage("attendance");
  };
  // const [students, setStudents] = useState([
    
  // ]);

  const [newStudent, setNewStudent] = useState({ roll: "", name: "" });

  // CRUD: Create
  const addStudent = () => {
    if (newStudent.roll && newStudent.name) {
      const id = students.length ? students[students.length - 1].id + 1 : 1;
      setStudents([...students, { ...newStudent, id, status: "Absent" }]);
      setNewStudent({ roll: "", name: "" });
    }
  };

  // CRUD: Update
  const updateStudent = (id, updatedData) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, ...updatedData } : student
      )
    );
  };

  // CRUD: Delete
  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  // Mark Attendance
  const markAttendance = (id, status) => {
    setStudents(
      students.map((student) =>
        student.id === id ? { ...student, status } : student
      )
    );
  };

  // const [students, setStudents] = useState([]);

  return (


     <div>
      
    <div>
      <Header />
      {/* your remaining content */}
    </div>
    <table>
      <h1>THANTHAI PERIYAR ARTS & SCIENCE COLLEGE,TIRUCHIRAPPALLI</h1>
       {page === "front" ? (
        <FrontPage onSubmit={startAttendance} />
      ) : (
        <div style={{ textAlign: "center" }}>
          <h3>
            {classInfo.department} - {classInfo.year} - Section {classInfo.section}
          </h3>

          {/* <AttendanceTable
            students={students}
            setStudents={setStudents}
          /> */}
        </div>
      )}
      <center>
        {/* <h2>Smart Attendance Management System</h2> */}

        {/* Add New Student */}
        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Roll No"
            value={newStudent.roll}
            onChange={(e) =>
              setNewStudent({ ...newStudent, roll: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Name"
            value={newStudent.name}
            onChange={(e) =>
              setNewStudent({ ...newStudent, name: e.target.value })
            }
          />
          <button onClick={addStudent}>Add Student</button>
       
       
        </div>

        Attendance Table
        <AttendanceTable
          students={students}
          markAttendance={markAttendance}
          updateStudent={updateStudent}
          deleteStudent={deleteStudent}
        />
       

      </center>
      </table>
    </div>
  );

}
export default App;







