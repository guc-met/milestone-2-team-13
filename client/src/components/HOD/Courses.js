import React, { Component } from "react";
import Staff from "./staff.js";

var axios = require("axios");

export class Courses extends Component {
  /*  handleLogin(event) {
    event.preventDefault();
    const payload = {
      email: this.state.email,
      password: this.state.password,
    };

    authService
      .onLogin(payload)
      .then((token) => {
        localStorage.setItem("token", token);
        window.location.reload();
      })
      .catch((error) => {
        this.setState({ serverErr: error.response.data.msg });
      });
  } */
  render() {
    return (
      <div>
        <Staff></Staff>
      </div>
    );
  }
}

export default Courses;
