import React, { Component } from 'react';
// import '.';
import './EasySurvey.css';

export default class EasySurvey extends Component {
  render() {
    return (
      <div className='easySurveyPage'>
        <h1 style={{ color: 'rgb(17, 171, 176)' }}>MyEasySurvey.com</h1>
        <div className='projectContainer'>
          <div className='topBar'>
            <h1
              style={{
                textShadow: '1px 1px 1px rgba(127, 127, 127, 0.3)',
                color: 'rgb(17, 171, 176)'
              }}
            >
              TOOLS USED
            </h1>
            <p
              style={{
                textShadow: '1px 1px 1px rgba(127, 127, 127, 0.3)'
              }}
            >
              This is my first "Full-Stack" application. I designed
              MyEasySurvey.com to be an easy go to resource for anyone looking
              to create a free survey from scratch. MyEasySurvey has all the
              functionality to customize the survey for your specific needs. The
              ability to add a question from a selected list of questions.
              <ol>
                <li style={{ listStyleType: 'none' }}>-Single Line Answer</li>
                <li style={{ listStyleType: 'none' }}>-Multi Line Answer</li>
                <li style={{ listStyleType: 'none' }}>-Drop down menu</li>
                <li style={{ listStyleType: 'none' }}>-MultipleChoice</li>
                <li style={{ listStyleType: 'none' }}>-Checkbox</li>
              </ol>
              After the question has been added its easy to customize. Edit
              Survey title, add as many questions as you need, remove questions.
              For questions with multiple options you can add or remove for your
              specific needs.
            </p>
            <div className='tools_1'>
              <img
                style={{ height: '8em', padding: '3%' }}
                src='https://icongr.am/devicon/react-original-wordmark.svg'
                alt='react'
              />

              <img
                style={{ height: '8em', padding: '3%' }}
                src='https://icongr.am/devicon/javascript-original.svg'
                alt='javascript'
              />

              <img
                style={{ height: '8em', padding: '3%' }}
                src='https://icongr.am/devicon/nodejs-original-wordmark.svg'
                alt='nodejs'
              />

              <img
                style={{ height: '8em', padding: '3%' }}
                src='https://icongr.am/devicon/postgresql-original-wordmark.svg'
                alt='postgresql'
              />
            </div>
            <hr />
            <div className='tools_2'>
              <img
                style={{ height: '8em', padding: '3%' }}
                src='https://icongr.am/devicon/html5-original-wordmark.svg'
                alt='html5'
              />

              <img
                style={{ height: '8em', padding: '3%' }}
                src='https://icongr.am/devicon/css3-original-wordmark.svg'
                alt='css3'
              />
              <img
                style={{ height: '8em', padding: '3%' }}
                src='https://icongr.am/devicon/express-original-wordmark.svg'
                alt='express'
              />
              <img
                style={{ height: '8em', padding: '3%' }}
                src='https://icongr.am/devicon/git-original-wordmark.svg'
                alt='git'
              />
              {/* <hr /> */}
            </div>
          </div>
          <div className='screenshotContainer'>
            <div className='img_container'>
              <h4>Create Survey</h4>
              <img
                className='project_img'
                src={require('./EasySurveyImages/CreateSurvey.png')}
                alt='create survey'
              />
            </div>
            <div className='img_container'>
              <h4>Dashboard Page</h4>
              <img
                className='project_img'
                src={require('./EasySurveyImages/DashboardPage.png')}
                alt='Dashboard page'
              />
            </div>
            <div className='img_container'>
              <h4>EditSurvey</h4>
              <img
                className='project_img'
                src={require('./EasySurveyImages/EditSurvey.png')}
                alt='Edit Survey'
              />
            </div>
            <div className='img_container'>
              <h4>Reports</h4>
              <img
                className='project_img'
                src={require('./EasySurveyImages/Reports.png')}
                alt='reports'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
