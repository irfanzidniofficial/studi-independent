import React, { Component } from "react";
import "./Card.css";

export default function Card({ date }) {
  return (
    <div class="card">
      <p>{date}</p>
      <hr />
      <p>#39 JakartaJS April Meetup with kumparan</p>
      <p>
        139 <span>went</span>
      </p>
      <div class="view">
        <p>View</p>
      </div>
    </div>
  );
}
