import Button from "react-bootstrap/Button";
import React from "react";

export default function Card({ date }) {
  return (
    <>
      <div className="card">
        <p>{date}</p>
        <hr />
        <p>#39 JakartaJS April Meetup with kumparan</p>
        <p>
          139 <span>went</span>
        </p>
        <div className="view">
          <Button variant="secondary">View</Button>
        </div>
      </div>
    </>
  );
}
