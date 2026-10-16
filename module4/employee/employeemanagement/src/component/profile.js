import { useParams, Link } from "react-router-dom";

function EmployeeProfile() {
  const { id } = useParams();

  return (
    <div>
      <h2>Employee Profile</h2>

      <p>Employee ID: {id}</p>
      <p>Name: Arun Kumar</p>
      <p>Email: arun@gmail.com</p>
      <p>Department: IT</p>
      <p>Salary: ₹30,000</p>

      <Link to={`/update/${id}`}>
        Update Employee
      </Link>
    </div>
  );
}

export default EmployeeProfile;