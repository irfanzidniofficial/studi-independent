import React, { memo } from "react";
import "./About.css";

export const IndexAbout = () => {
  return (
    <section className="about section section-content" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>
                  I'm Muhammad Irfan Zidni and <span>Mobile Developer</span>
                </h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum voluptas a cum, amet eos sapiente ipsa doloribus
                  tenetur aspernatur vitae molestiae perspiciatis explicabo quis
                  nemo deleniti sequi fugit animi ut!
                </p>
              </div>
            </div>
            <div className="row">
              <div className="personal-info padd-15">
                <div className="row">
                  <div className="info-item padd-15">
                    <p>
                      Birthday: <span>31 Februari 2008</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Age: <span>8</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Github: <span>https://github.com/irfanzidniofficial</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Email: <span>irfanzidniofficial@gmail.com</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Degree: <span>Engineers</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Phone: <span>085893124302</span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      City: <span>Semarang </span>
                    </p>
                  </div>
                  <div className="info-item padd-15">
                    <p>
                      Facebook:{" "}
                      <span>
                        <a href="https://www.facebook.com/">Irfan Zidni</a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="buttons padd-15">
                    <a
                      href="./files/CV-HoangVanLuan.pdf"
                      className="btn"
                      download="proposed_file_name"
                    >
                      Dowload CV
                    </a>
                    <a href="#contact" className="btn hire-me">
                      Hire me
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="education padd-15">
                <h3 className="title">Education</h3>
                <div className="row">
                  <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-date">
                          <i className="fa fa-calendar"></i> 2020 - now
                        </h3>
                        <h4 className="timeline-title">
                          Dian Nuswantoro University
                        </h4>
                        <p className="timeline-text">
                          <p>
                            Dian Nuswantoro University is one of the private
                            higher education institutions accredited A in
                            Semarang
                          </p>
                        </p>
                      </div>
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

export const About = memo(IndexAbout);
