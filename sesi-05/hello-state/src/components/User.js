import React from "react";

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "user001",
    };
  }

  // create function > return
  getUsername() {
    return this.state.username;
  }
  getPass() {
    return this.state.password;
  }

  // Halaman 8 sesi 5
  // Creat function > change button

  setUsername = () => {
    this.setState({
      username: "username001",
    });
  };

  render() {
    return (
      <>
        <div className="text-center">
          <h1>Belajar State</h1>
          {/* Step one get this. state*/}
          {/* <div className="row">
            <div className="col">Username: {this.state.username}</div>
            <div className="col">Password: {this.state.password}</div>
          </div> */}
          <hr />
          {/* Step one get this. state*/}
          <div className="row">
            <div className="col">Username: {this.state.username}</div>
            <div className="col">Password: {this.state.password}</div>
          </div>
          <button onClick={this.setUsername}>Set Username</button>
        </div>
      </>
    );
  }
}

export default Users;
