import { Link } from "react-router-dom";

function EmployeeList({ employees, deleteEmployee }) {
  return (
    <div>
      <h2>Employee List</h2>

      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        employees.map((employee) => (
          <div key={employee.id}>

            <h3>{employee.name}</h3>

            <p>Email: {employee.email}</p>

            <p>Department: {employee.department}</p>

            <p>Salary: ₹{employee.salary}</p>

            <Link to={`/profile/${employee.id}`}>
              View Profile
            </Link>

            {" | "}

            <Link to={`/update/${employee.id}`}>
              Update
            </Link>

            {" | "}

            <button onClick={() => deleteEmployee(employee.id)}>
              Delete
            </button>

            <hr />

          </div>
        ))
      )}
    </div>
  );
}

export default EmployeeList;