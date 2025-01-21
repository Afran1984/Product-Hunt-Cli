import { useState, useEffect } from "react";
import "./AdmineManage.css";
import toast from "react-hot-toast";
import axios from "axios";

const AdmineManage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/users`);
        setUsers(res.data);
      } catch (err) {
        toast.error(
          err.response?.data?.message ||
            "An error occurred while fetching users."
        );
      }
    };

    fetchUsers();
  }, []);

  const handleRoleUpdate = async (userId, newRole) => {
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/user/role/${userId}`,
        { role: newRole },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        toast.success(`Role updated to ${newRole} successfully!`);
        // Update the user's role in the UI
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === userId ? { ...user, role: newRole } : user
          )
        );
      } else {
        toast.error(response.data.message || "Failed to update role.");
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Failed to update role.");
    }
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
            <tr key={user._id}>
              <td>{user.name || "N/A"}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                {user.role !== "moderator" && (
                  <button
                    onClick={() => handleRoleUpdate(user._id, "moderator")}
                    className="update-role-btn"
                  >
                    Make Moderator
                  </button>
                )}
                {user.role !== "admin" && (
                  <button
                    onClick={() => handleRoleUpdate(user._id, "admin")}
                    className="update-role-btn"
                  >
                    Make Admin
                  </button>
                )}
                {user.role !== "user" && (
                  <button
                    onClick={() => handleRoleUpdate(user._id, "user")}
                    className="update-role-btn"
                  >
                    Revoke Role
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdmineManage;
