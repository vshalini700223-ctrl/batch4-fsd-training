import { useState } from "react";

function AddEmployee() {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    salary: ""
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Employee Added:", employee);

    alert("Employee added successfully!");

    setEmployee({
      name: "",
      email: "",
      department: "",
      salary: ""
    });
  };

  return (
    <div>
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
        />

        <br /><br />

        <label>Email: </label>
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
        />

        <br /><br />

        <label>Department: </label>
        <input
          type="text"
          name="department"
          value={employee.department}
          onChange={handleChange}
        />

        <br /><br />

        <label>Salary: </label>
        <input
          type="number"
          name="salary"
          value={employee.salary}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default AddEmployee;