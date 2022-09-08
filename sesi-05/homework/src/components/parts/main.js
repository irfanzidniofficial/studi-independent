import React, { Component } from "react";
import Card from "../atoms/Card";
import AboutMeetup from "../molecules/AboutMeetUp";
import HactivMeetUp from "../molecules/HactivMeetUp";
import Member from "../molecules/Member";
import NextMeetup from "../molecules/NextMeetup";

export default class Main extends Component {
  render() {
    return (
      <div>
        <div>
          <HactivMeetUp />
        </div>
        <div>
          <NextMeetup />
        </div>
        <div>
          <AboutMeetup />
        </div>
        <div>
          <Member />
        </div>
        <h3>Past Meetup</h3>
        <div className="sectionCard">
          <Card date="29 Oktober 2022" />
          <Card date="1 Januari 2022" />
          <Card date="5 November 2022" />
        </div>
      </div>
    );
  }
}
