import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id='contact'>
        <div className='row section-head'>
          <div className='ten columns'>
            <h3 style={{ color: 'white' }} className='lead'>
              Contact me Here!
            </h3>
          </div>
        </div>
        <div className='row'>
          <aside className='eigth columns footer-widgets'>
            <div className='widget'>
              <h4>
                Linked-In:{'    '}
                {''}
                <a href='https://www.linkedin.com/in/josephdwebb/'>
                  {resumeData.linkedinId}
                </a>
              </h4>
              <h4>
                Email:{'    '}
                {''}
                <a href='https://mail.google.com/mail/u/0/#inbox'>
                  Joewebb48.jw@gmail.com
                </a>
              </h4>
              <h4>
                GitHub:{'    '}
                {''}
                <a href='https://github.com/joewebb48'>GitHub/joewebb48</a>
              </h4>
              <h4>
                Facebook:{'    '}
                {''}
                <a href='https://www.facebook.com/profile.php?id=100004124327319&lst=100004124327319%3A100004124327319%3A1553113914&sk=about'>
                  facebook/JoeWebb
                </a>
              </h4>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}
