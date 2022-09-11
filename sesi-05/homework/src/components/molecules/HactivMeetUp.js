import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import "../../App.css";
import Gambar2 from "../../assets/image.jpg";
import PropTypes from "prop-types";

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
        <section className="profileMeetup container rounded">
          <div className="image">
            <img src={Gambar2} alt="macbook" className="rounded" />
          </div>
          <div className="about mt-3">
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
            <div className="view mb-3">
              <Button variant="secondary">Join Us</Button>
            </div>
          </div>
        </section>
      </>
    );
  }
}

HactivMeetUp.propTypes = {
  organizers: PropTypes.string,
};
