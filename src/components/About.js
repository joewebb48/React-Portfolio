import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id='about'>
        <div className='row'>
          <div className='three columns'>
            <img className='profile-pic' src='images/screencopy.png' alt='' />
          </div>

          <div className='nine columns main-col'>
            <h2 style={{ color: 'rgb(17, 171, 176)' }}>About Me</h2>
            <p>
              Joe Webb is a Full-Stack Web-Developer with experience in
              JavaScript, React, NodeJS, and postgresSQL. Joe considers himself
              a "forever-learner", eager to learn about new ideas and build
              creative solutions. Joe is currently working as an independent
              developer always looking for a challenge. Reach out to
              Joewebb48.jw@gmail.com to connect!
            </p>

            <div className='row'>
              <div className='columns contact-details'>
                <h2 style={{ color: 'rgb(17, 171, 176)' }}>Contact Details</h2>
                <p className='address'>
                  <span>{resumeData.name}</span>
                  <br />
                  <span>{resumeData.address}</span>
                  <br />
                  <span>{resumeData.website}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
