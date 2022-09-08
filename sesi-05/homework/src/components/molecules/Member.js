import React, { Component } from "react";

export default class Member extends Component {
  render() {
    return (
      <div>
        <div className="Members">
          <div className="header">
            <h3> Members </h3>
            <h4> See all</h4>
          </div>
        </div>
        <article className="mainMember">
          <div className="profileMembers">
            <div className="image">
              <img src="" alt="" />
            </div>
            <div className="nameProfile">
              <p>Organizers</p>
              <p>
                Adhy Wiranata <span>4 others.</span>
              </p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
