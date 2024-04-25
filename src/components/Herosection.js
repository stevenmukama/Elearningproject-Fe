import React from 'react'
import numberImage from './../img/number.svg'
import ladyimage from './../img/ladysitting.png'
import fullStar from './../img/fullStar.svg'
import halfStar from './../img/halfStar.svg'
import circleBg from './../img/circlesbg.svg'
import gosign from './../img/gosign.svg'
import "./Herosection.css";

function Herosection() {
  return (
    <div>
      <section className="Home-section">
        <img
          className="circleBg"
          src={circleBg}
          alt="circleBg"
        />
        <img
          className="circleBg-img"
          src={circleBg}
          alt="circleBg"
        />
        <div className="main-herosection" >
          <h1 className='hero-text'>
            <span style={{ color: "black" }}> Upgrade Your</span>{" "}
            <span style={{ color: "#20B486" }}> Skills</span>
            <span style={{ color: "black" }}> With</span>{" "}
            <span style={{ color: "#F49406" }}> SpidEd </span>{" "}
            <span style={{ color: "black" }}> To </span>{" "}
            <span style={{ color: "#20B486" }}> Advance</span> Your{" "}
            <span style={{ color: "#20B486" }}>Career</span> Path
          </h1>
          <div>
            <p className='hero-description'>At Spid-Education, we believe in unlocking potential through education. Explore our diverse range of courses, curated to empower individuals and drive career advancement.</p>
            <div className="Home-section-buttons">
              <button className="cta-button">Get Started</button>
              <button className="contact-button">Contact Us</button>
            </div>
          </div>
        </div>
        <div className='herosection-lady'>
          <div className='box-herosection'></div>
          <img src={ladyimage} className="lady-sitting-image" alt="lady-sitting-image" />

        </div>
      </section>
      <section>
        <div className='courses-section-header'>
          <div> </div>
          <h1 className='popular-courses'>Our Popular <span className='courses-title'>Courses</span> </h1>
          <div className='explore-course-container'>
            <h2 className='Explore-courses'>Explore courses</h2>
            <img src={gosign} style={{ width: "20px", paddingTop: "20px" }} alt='go-sign' />
          </div>
        </div>
        <div className="container">
          <div className="card-item">
            <div className="card-image-item">
              <div className="card-image">
              </div>
            </div>

            <div className="card-info">
              <div className='lessons-rating'>
                <div className='lessons-count'>
                  <img src={numberImage} className='number-image' />
                  <p className='lessons-number'> 10  Lessons</p>
                </div>
                <div className='rates'>
                  <img src={fullStar} />
                  <img src={fullStar} />
                  <img src={fullStar} />
                  <img src={halfStar} />
                  <img src={halfStar} />
                </div>
              </div>
              <h2 className="card-title">Professional Cleaning Mastery </h2>
              <p className="card-intro">Advanced Cleaning Techniques and Equipment Usage</p>
              <div className='discount-section'>
                <div className='dollar-discounted'>
                  <span className='dollar-numbers-five'> $ 5</span>
                  <span className='dollar-numbers-twenty'> $ 20</span>
                </div>
                <button className='Enroll'>Enroll Now</button>
              </div>
            </div>

          </div>

          <div className="card-item">
            <div className="card-image-item">
              <div className="card-image">
              </div>
            </div>

            <div className="card-info">
              <div className='lessons-rating'>
                <div className='lessons-count'>
                  <img src={numberImage} className='number-image' />
                  <p className='lessons-number'> 10  Lessons</p>
                </div>
                <div className='rates'>
                  <img src={fullStar} />
                  <img src={fullStar} />
                  <img src={fullStar} />
                  <img src={halfStar} />
                  <img src={halfStar} />
                </div>
              </div>
              <h2 className="card-title">Professional Cleaning Mastery </h2>
              <p className="card-intro">Advanced Cleaning Techniques and Equipment Usage</p>
              <div className='discount-section'>
                <div className='dollar-discounted'>
                  <span className='dollar-numbers-five'> $ 5</span>
                  <span className='dollar-numbers-twenty'> $ 20</span>
                </div>
                <button className='Enroll'>Enroll Now</button>
              </div>
            </div>

          </div>

          <div className="card-item">
            <div className="card-image-item">
              <div className="card-image">
              </div>
            </div>

            <div className="card-info">
              <div className='lessons-rating'>
                <div className='lessons-count'>
                  <img src={numberImage} className='number-image' />
                  <p className='lessons-number'> 10  Lessons</p>
                </div>
                <div className='rates'>
                  <img src={fullStar} />
                  <img src={fullStar} />
                  <img src={fullStar} />
                  <img src={halfStar} />
                  <img src={halfStar} />
                </div>
              </div>
              <h2 className="card-title">Professional Cleaning Mastery </h2>
              <p className="card-intro">Advanced Cleaning Techniques and Equipment Usage</p>
              <div className='discount-section'>
                <div className='dollar-discounted'>
                  <span className='dollar-numbers-five'> $ 5</span>
                  <span className='dollar-numbers-twenty'> $ 20</span>
                </div>
                <button className='Enroll'>Enroll Now</button>
              </div>
            </div>

          </div>
        </div>
        <button className='explore-all-courses-button'>Explore all course</button>
      </section>
    </div>
  )
}

export default Herosection
