import React, { Component } from 'react'

export default class NextMeetup extends Component {
  render() {
    return (
      <div>
        <h3>Next Meetup</h3>
        <article className="nextMeetUp">
          <p>
            <b>Awesome Meetup and event</b>{" "}
          </p>
          <p className="date">25 January 2019</p>
          <p>
            <b>
              Hello, Javascript & Node.js Ninjas! <br />
              Get Ready for our montly meetup JakartaJS! This will be our fifth
              meetup of 2018! <br />
              The meetup format will contain some short stories and technical
              talks. <br /> If you have a short announcement you'd like to share
              with the audience, you may do so during open mic announcements.{" "}
              <br />
              <br />
              Remember to bring a photo ID to get throught building security.{" "}
              <br /> <br />
              ..... <br /> <br />
              See you there! <br />
              <br />
              Best,Hengki, Giovanni, Sofian, Riza, Agung The Jakarta Organizers
            </b>
          </p>
        </article>
      </div>
    );
  }
}
