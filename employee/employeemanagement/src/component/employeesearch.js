import { useState } from "react";

function EmployeeSearch() {
  const [search, setSearch] = useState("");

  const employees = [
    {
      id: 1,
      name: "Arun Kumar",
      department: "IT"
    },
    {
      id: 2,
      name: "Priya",
      department: "HR"
    },
    {
      id: 3,
      name: "Rahul",
      department: "Finance"
    }
  ];

  const results = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Search Employee</h2>

      <input
        type="text"
        placeholder="Enter employee name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      {results.map((employee) => (
        <div key={employee.id}>
          <p>ID: {employee.id}</p>
          <p>Name: {employee.name}</p>
          <p>Department: {employee.department}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default EmployeeSearch;