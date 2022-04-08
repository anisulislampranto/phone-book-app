import React, { useState } from "react";
import ReactDOM from "react-dom";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
};

function PhoneBookForm({ userInfo, setUserInfo }) {
  const [firstName, setFirstName] = useState({});
  const [lastName, setLastName] = useState({});
  const [phoneNumber, setPhoneNumber] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = { firstName, lastName, phoneNumber };
    const users = [...userInfo, userDetails];
    setUserInfo(users);
  };

  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="userFirstname"
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
        defaultValue="Coder"
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="userLastname"
        type="text"
        onChange={(e) => setLastName(e.target.value)}
        defaultValue="Byte"
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="userPhone"
        type="text"
        onChange={(e) => setPhoneNumber(e.target.value)}
        defaultValue="8885559999"
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
      />
    </form>
  );
}

function InformationTable({ userInfo }) {
  console.log(userInfo);

  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {userInfo.map((user) => (
          <tr>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.phoneNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Application() {
  const [userInfo, setUserInfo] = useState([]);
  console.log(userInfo);

  return (
    <section>
      <PhoneBookForm setUserInfo={setUserInfo} userInfo={userInfo} />
      <InformationTable userInfo={userInfo} />
    </section>
  );
}

ReactDOM.render(<Application />, document.getElementById("root"));
