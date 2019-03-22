import React, { Component } from 'react';

export default class ClipShop extends Component {
  render() {
    return (
      <div className='easySurveyPage'>
        <h1>MyEasySurvey.js</h1>
        <div className='projectContainer'>
          <div className='topBar'>
            <h1>TOOLS USED</h1>
            <p>
              Idem iste, inquam, de voluptate quid sentit? Istam voluptatem
              perpetuam quis potest praestare sapienti? Effluit igitur voluptas
              corporis et prima quaeque avolat saepiusque relinquit causam
              paenitendi quam recordandi. Qui non moveatur et offensione
              turpitudinis et comprobatione honestatis? Primum cur ista res
              digna odio est, nisi quod est turpis?
            </p>
            <div
              style={{ textAlign: 'center', display: 'flex', flexWrap: 'wrap' }}
            >
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
            <div
              style={{
                textAlign: 'center',
                display: 'flex',
                flexWrap: 'wrap'
              }}
            >
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
                src={require('./EasySurveyImages/CreateSurvey.png')}
                alt='Edit Survey'
              />
            </div>
            <div className='img_container'>
              <h4>reports</h4>
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
