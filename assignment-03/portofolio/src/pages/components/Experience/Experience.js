import React from "react";
import "./Experience.css";

export const IndexExperience = () => {
  return (
    <section className="experience section section-content" id="experience">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Experience</h2>
          </div>
        </div>
        <div className="row">
          <div className="experience-content padd-15">
            <div className="experience padd-15">
              <div className="row">
                <div className="timeline-box padd-15">
                  <div className="timeline shadow-dark">
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> 2021 - 2022
                      </h3>
                      <h4 className="timeline-title">Mobile Developer</h4>
                      <p className="timeline-text">
                        <p>Become mobile developer using Flutter</p>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Experience = React.memo(IndexExperience);
