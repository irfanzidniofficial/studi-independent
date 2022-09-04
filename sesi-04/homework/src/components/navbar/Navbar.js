import React, { Component } from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div class="topnav">
      <a href="#qtemu" class="qtemu">
        Qtemu
      </a>
      <a href="#meet-up">Create Meet Up</a>
      <a href="#explore">Explore</a>
      <a href="#login" class="split">
        Login
      </a>
    </div>
  );
}
