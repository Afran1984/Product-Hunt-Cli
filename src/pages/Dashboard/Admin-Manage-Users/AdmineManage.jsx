import { useState, useEffect } from "react";
import "./AdmineManage.css";

const AdmineManage = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from the backend or a mock JSON file
  useEffect(() => {
    fetch("./user.json") // Replace with your backend API endpoint
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  // Handle role change
  const updateUserRole = (userId, newRole) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, role: newRole } : user
      )
    );

    // Send updated role to the backend
    fetch(`/updateUserRole/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ role: newRole }),
    }).catch((error) => console.error("Error updating role:", error));
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>User Name</th>
            <th>User Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <button
                  onClick={() => updateUserRole(user.id, "Moderator")}
                  disabled={user.role === "Moderator"}
                  className="role-button"
                >
                  Make Moderator
                </button>
                <button
                  onClick={() => updateUserRole(user.id, "Admin")}
                  disabled={user.role === "Admin"}
                  className="role-button"
                >
                  Make Admin
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdmineManage;
