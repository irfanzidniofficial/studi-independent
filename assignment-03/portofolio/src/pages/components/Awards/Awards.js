import React from "react";
import "./Awards.css";

export const IndexAwards = () => {
  return (
    <section className="awards section section-content" id="awards">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Awards</h2>
          </div>
        </div>
        <div className="row">
          <div className="awards-content padd-15">
            <div className="awards padd-15">
              <div className="row">
                <div className="timeline-box padd-15">
                  <div className="timeline shadow-dark">
                    <div className="timeline-item">
                      <div className="circle-dot"></div>
                      <h3 className="timeline-date">
                        <i className="fa fa-calendar"></i> 2022 - 2018
                      </h3>
                      <h4 className="timeline-title">
                        1st runner up aplication competition
                      </h4>
                      <p className="timeline-text">
                        <p>Dinacom by Universitas Dian Nuswantoro · Sep 2021</p>
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

export const Awards = React.memo(IndexAwards);
