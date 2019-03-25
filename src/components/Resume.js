import React, { Component } from 'react';
import { reactcon } from './skillIcons/reactcon';
import './Resume.css';
let iconStyle = { height: '10em', padding: '3%' };
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id='resume'>
        {/* <div className='row education'>
          <div className='three columns header-col'>
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className='nine columns main-col'>
            {resumeData.education &&
              resumeData.education.map(item => {
                return (
                  <div className='row item'>
                    <div className='twelve columns'>
                      <h3>{item.UniversityName}</h3>
                      <p className='info'>
                        {item.specialization}
                        <span>&bull;</span>{' '}
                        <em className='date'>
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div> */}
        {/* <div className='row work'>
          <div className='three columns header-col'>
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className='nine columns main-col'>
            {resumeData.work &&
              resumeData.work.map(item => {
                return (
                  <div className='row item'>
                    <div className='twelve columns'>
                      <h3>{item.CompanyName}</h3>
                      <p className='info'>
                        {item.specialization}
                        <span>&bull;</span>{' '}
                        <em className='date'>
                          {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div> */}

        <div className='row skill'>
          <div className='three columns header-col'>
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className='bars'>
            <ul>
              <div className='skills_1'>
                <div style={{ margin: '1em' }}>
                  <img
                    className='skill_img'
                    src='https://icongr.am/devicon/react-original-wordmark.svg'
                    alt='react'
                  />
                  <h5 className='skills_h5'>REACT</h5>
                </div>
                <div
                  style={{
                    margin: '1em',
                    alignItems: 'center'
                  }}
                >
                  <img
                    className='skill_img'
                    src='https://icongr.am/devicon/javascript-original.svg'
                    alt='javascript'
                  />
                  <h5 className='skills_h5'>JavaScript</h5>
                </div>
                <div style={{ margin: '1em' }}>
                  <img
                    className='skill_img'
                    src='https://icongr.am/devicon/nodejs-original-wordmark.svg'
                    alt='nodejs'
                  />
                  <h5 className='skills_h5'>NodeJs</h5>
                </div>
                <div style={{ margin: '1em' }}>
                  <img
                    className='skill_img'
                    src='https://icongr.am/devicon/postgresql-original-wordmark.svg'
                    alt='postgresql'
                  />
                  <h5 className='skills_h5'>PostgreSQL</h5>
                </div>
                <div style={{ margin: '1em' }}>
                  <img
                    className='skill_img'
                    src='https://icongr.am/devicon/html5-original-wordmark.svg'
                    alt='html5'
                  />
                  <h5 className='skills_h5'>HTML5</h5>
                </div>
              </div>
              <div className='skills_2'>
                <div style={{ margin: '1em' }}>
                  <img
                    className='skill_img'
                    src='https://icongr.am/devicon/css3-original-wordmark.svg'
                    alt='css3'
                  />
                  <h5 className='skills_h5'>CSS3</h5>
                </div>
                <div style={{ margin: '1em' }}>
                  <img
                    className='skill_img'
                    src='https://icongr.am/devicon/express-original-wordmark.svg'
                    alt='express'
                  />
                  <h5 className='skills_h5'>Express</h5>
                </div>
                <div style={{ margin: '1em' }}>
                  <img
                    className='skill_img'
                    src='https://icongr.am/devicon/git-original-wordmark.svg'
                    alt='git'
                  />
                  <h5 className='skills_h5'>GIT</h5>
                </div>
                <div style={{ margin: '1em' }}>
                  <img
                    className='skill_img'
                    src='https://icongr.am/devicon/heroku-original-wordmark.svg'
                    alt='heroku'
                  />
                  <h5 className='skills_h5'>Heroku</h5>
                </div>
                <div style={{ margin: '1em' }}>
                  <img
                    className='skill_img'
                    src='https://icongr.am/devicon/npm-original-wordmark.svg'
                    alt='npm'
                  />
                  <h5 className='skills_h5'>NPM</h5>
                </div>
              </div>
            </ul>
          </div>

          {/* <div className='nine columns main-col'>
            <p>{resumeData.skillsDescription}</p>

            <div className='bars'>
              <ul className='skills'>
                {resumeData.skills &&
                  resumeData.skills.map(item => {
                    return (
                      <li>
                        <span
                          className={`bar-expand ${item.skillname.toLowerCase()}`}
                        />
                        <em>{item.skillname}</em>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div> */}
        </div>
      </section>
    );
  }
}
