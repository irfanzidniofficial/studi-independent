import React, { memo } from "react";
import "./Services.css";

export const Services = () => {
  return (
    <section className="service section section-content" id="services">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Interest</h2>
          </div>
        </div>
        <div className="row">
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fa fa-mobile-alt"></i>
              </div>
              <h4>Mobile App</h4>
              <p>
                I love mobile development. Programming language I have learned
                js, java, dart, kotlin
              </p>
            </div>
          </div>

          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fa fa-laptop-code"></i>
              </div>
              <h4>Web Design</h4>
              <p>
                Web Dev is my passion, I'm faithful to learn in this field, for
                now focus on react js
              </p>
            </div>
          </div>

          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fa fa-palette"></i>
              </div>
              <h4>UI UX</h4>
              <p>I like UI & UX especially in the field of mobile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Interest = memo(Services);
