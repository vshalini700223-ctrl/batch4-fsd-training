import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import AddEmployee from "./component/addemployee";
import EmployeeList from "./component/employeelist";
import EmployeeSearch from "./component/employeesearch";
import EmployeeUpdate from "./component/employeeupdate";
import Profile from "./component/profile";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Arun Kumar",
      email: "arun@gmail.com",
      department: "IT",
      salary: 30000
    },
    {
      id: 2,
      name: "Priya",
      email: "priya@gmail.com",
      department: "HR",
      salary: 28000
    }
  ]);

  const deleteEmployee = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (confirmDelete) {
      setEmployees(
        employees.filter((employee) => employee.id !== id)
      );
    }
  };

  return (
    <BrowserRouter>

      <h1>Employee Management System</h1>

      <nav>
        <Link to="/">Employee List</Link> |{" "}
        <Link to="/add">Add Employee</Link> |{" "}
        <Link to="/search">Search Employee</Link>
      </nav>

      <hr />

      <Routes>

        <Route
          path="/"
          element={
            <EmployeeList
              employees={employees}
              deleteEmployee={deleteEmployee}
            />
          }
        />

        <Route path="/add" element={<AddEmployee />} />

        <Route path="/search" element={<EmployeeSearch />} />

        <Route path="/profile/:id" element={<Profile />} />

        <Route path="/update/:id" element={<EmployeeUpdate />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;