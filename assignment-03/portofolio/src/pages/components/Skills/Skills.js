import React from 'react'

export const IndexSkills = () => {
  return (
    <section className="about section section-content" id="about">
    <div className="container">
      <div className="row">
        <div className="section-title padd-15">
          <h2>Skills</h2>
        </div>
      </div>
      <div className="row"> 
        <div className="about-content padd-15">
          <div className="row">
            <div className="skills padd-15">
              <div className="row">
                <div className="skill-item padd-15">
                  <h5>HTML</h5>
                  <div className="progress">
                    <div className="progress-in" style={{width: '96%'}}></div>
                    <div className="skill-percent">96%</div>
                  </div>
                </div>
                <div className="skill-item padd-15">
                  <h5>CSS</h5>
                  <div className="progress">
                    <div className="progress-in" style={{width: '72%'}}></div>
                    <div className="skill-percent">72%</div>
                  </div>
                </div>
                <div className="skill-item padd-15">
                  <h5>JS</h5>
                  <div className="progress">
                    <div className="progress-in" style={{width: '58%'}}></div>
                    <div className="skill-percent">58%</div>
                  </div>
                </div>
                <div className="skill-item padd-15">
                  <h5>REACT</h5>
                  <div className="progress">
                    <div className="progress-in" style={{width: '80%'}}></div>
                    <div className="skill-percent">80%</div>
                  </div>
                </div>
                <div className="skill-item padd-15">
                  <h5>VUE</h5>
                  <div className="progress">
                    <div className="progress-in" style={{width: '60%'}}></div>
                    <div className="skill-percent">60%</div>
                  </div>
                </div>
                <div className="skill-item padd-15">
                  <h5>Java</h5>
                  <div className="progress">
                    <div className="progress-in" style={{width: '88%'}}></div>
                    <div className="skill-percent">88%</div>
                  </div>
                </div>
                <div className="skill-item padd-15">
                  <h5>C++</h5>
                  <div className="progress">
                    <div className="progress-in" style={{width: '90%'}}></div>
                    <div className="skill-percent">90%</div>
                  </div>
                </div>
                <div className="skill-item padd-15">
                  <h5>Python</h5>
                  <div className="progress">
                    <div className="progress-in" style={{width: '70%'}}></div>
                    <div className="skill-percent">70%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </section>
  )
}

export const Skills = React.memo(IndexSkills)