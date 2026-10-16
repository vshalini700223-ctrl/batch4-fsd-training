import { useState } from "react";
import { useParams } from "react-router-dom";

function UpdateEmployee() {
  const { id } = useParams();

  const [employee, setEmployee] = useState({
    name: "Arun Kumar",
    email: "arun@gmail.com",
    department: "IT",
    salary: "30000"
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated Employee:", employee);

    alert("Employee updated successfully!");
  };

  return (
    <div>
      <h2>Update Employee</h2>

      <p>Employee ID: {id}</p>

      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          name="name"
          value={employee.name}
          onChange={handleChange}
        />

        <br /><br />

        <label>Email: </label>
        <input
          name="email"
          value={employee.email}
          onChange={handleChange}
        />

        <br /><br />

        <label>Department: </label>
        <input
          name="department"
          value={employee.department}
          onChange={handleChange}
        />

        <br /><br />

        <label>Salary: </label>
        <input
          name="salary"
          value={employee.salary}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
}

export default UpdateEmployee;