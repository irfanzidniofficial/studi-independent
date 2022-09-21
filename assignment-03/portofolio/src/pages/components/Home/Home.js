import React from "react";
import "./Home.css";
import avatar from "../../../images/me.jpg";
import { Link } from "react-router-dom";

export const IndexHome = () => {
  return (
    <section className="home section" id="home">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello">
              Hello, my name is{" "}
              <span className="name">Muhammad Irfan Zidni</span>
            </h3>
            <h3 className="my-profession">
              I'm a <span className="typing">Mobile Developer</span>
            </h3>
            <p>
              My name is Irfan Zidni I'm a Beginner Mobile Developer based in
              Indonesia. I describe myself as a passionate developer who loves
              coding, open source, and the mobile platform. Aside from my Role,
              I like to create and contribute to open source projects. That
              helps me to learn a ton of new stuff, grow as a developer and
              support other open source projects.
            </p>
            <Link to={"contact"}>
              <a href="#contact" className="btn hire-me">
                Hire Me
              </a>
            </Link>
          </div>
          <div className="home-img">
            <img src={avatar} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Home = React.memo(IndexHome);
