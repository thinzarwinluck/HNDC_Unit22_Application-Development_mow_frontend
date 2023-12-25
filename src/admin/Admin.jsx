import React from "react";
import "./admin.css";

const Admin = () => {
  return (
    <div className="container-fluid">
      <div className="admin_dashboard">
        <h1>Admin Dashboard</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Address</th>
          </tr>
          <tr>
            <td>Peter</td>
            <td>peter@gmail.com</td>
            <td>1001</td>
            <td>USA</td>
          </tr>
          <tr>
            <td>Lois</td>
            <td>lois@gmail.com</td>
            <td>1502</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Joe</td>
            <td>joe@gmail.com</td>
            <td>3002</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Cleveland</td>
            <td>cleveland@gmail.com</td>
            <td>2501</td>
            <td>Iceland</td>
          </tr>
          <tr>
            <td>Merry</td>
            <td>merry@gmail.com</td>
            <td>2581</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Brown</td>
            <td>brown@gmail.com</td>
            <td>1181</td>
            <td>UAE</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Admin;
