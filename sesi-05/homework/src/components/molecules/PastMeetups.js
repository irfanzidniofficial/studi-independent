import React, { Component } from "react";
import Card from "../atoms/Card";

export default class PastMeetups extends Component {
  render() {
    return (
      <div>
        <div className="mt-3 mb-3 d-flex justify-content-between">
          <h3>Past Meetup</h3>
          <h5>See all</h5>
        </div>

        <div className="sectionCard container">
          <Card date="29 Oktober 2022" />
          <Card date="1 Januari 2022" />
          <Card date="5 November 2022" />
        </div>
        <hr />
      </div>
    );
  }
}
