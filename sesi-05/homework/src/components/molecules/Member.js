import React, { Component } from "react";

export default class Member extends Component {
  render() {
    return (
      <div className="rounded">
        <div className="Members ">
          <div className="mt-3 mb-3 d-flex justify-content-between">
            <h3> Members </h3>
            <h5> See all</h5>
          </div>
        </div>
        <div className="profileMembers rounded">
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
      </div>
    );
  }
}
