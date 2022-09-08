import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "../../App.css";

export default class HactivMeetUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organizers: "Irfan Zidni",
      members: 2030,
      lokasi: "Jawa Tengah",
    };
  }

  render() {
    return (
      <>
        <section className="profileMeetup">
          <div className="image">
            <img src="../../assets/image.jpg" alt="" />
          </div>
          <div className="about">
            <h3>Hacktiv8 Meetup</h3>
            <p>
              Location <span className="location">{this.state.lokasi}</span>
            </p>
            <p>
              Members <span className="members">{this.state.members}</span>
            </p>
            <p>
              Organizers{" "}
              <span className="organizers">{this.state.organizers}</span>
            </p>
            <div className="view">
              <Button variant="secondary">Join Us</Button>
            </div>
          </div>
        </section>
      </>
    );
  }
}
