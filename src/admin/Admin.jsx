import React, { useState, useEffect } from "react";
import axios from "axios";
import service from "../api/apiFetching";
import { Button, Table, Container } from "react-bootstrap";
import _, { findIndex } from "lodash";
const Admin = () => {
  const [usersData, setUserData] = useState([]);
  const acceptUser = (user) => {
    let usera = _.find(usersData, (data) => data.usersId === user.usersId);
    usera.emailVerified = true;
    const findUser = _.findIndex(
      usersData,
      (data) => data.usersId === user.usersId
    );
    if (findUser > -1) {
      usersData[findUser] = usera;
      setUserData([...usersData]);
    }
  };
  useEffect(() => {
    const getAllUsersData = async () => {
      try {
        const response = await service.get("/user/getAll");
        console.log(response.data);
        setUserData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllUsersData();
  }, []);

  return (
    <Container fluid className="mt-5">
      <h1 className="pt-3">Admin Dashboard</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Health Information</th>
            <th>User Information</th>
            <th>User Status</th>
            <th>User Type</th>
            <th>Work Available</th>
          </tr>
        </thead>
        <tbody>
          {usersData.length > 0 ? (
            usersData.map((user) => (
              <tr key={user.usersId}>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>Yangon Hlaing</td>
                <td>{user.information}</td>
                <td>{user.health}</td>
                <td>{user.emailVerified ? "Verified" : "Not Verified"}</td>
                <td>{user.user_profile}</td>
                <td>
                  {user.user_profile === "member" ||
                  user.user_profile === "care-giver"
                    ? user.work_type
                      ? "Part Time"
                      : "Full Time"
                    : " - "}
                </td>
                <td>
                  <Button variant="primary" onClick={() => acceptUser(user)} disabled={user.emailVerified}>
                    Accept
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr></tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default Admin;
