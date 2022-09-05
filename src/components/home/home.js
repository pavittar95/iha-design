import Grid from '@mui/material/Grid';

import sentIcon from "../../assets/icons/sent-icon.png";
import phoneIcon from "../../assets/icons/phone-number.png";
import emailIcon from "../../assets/icons/email.png";
import locationIcon from "../../assets/icons/location.png";
import circularLinkedinIcon from "../../assets/icons/circular-linkedin.png";
import boardMemberPatternImg from "../../assets/images/board-member-pattern.png";

import teamPerson1 from "../../assets/images/team-person-1.png";
import teamPerson2 from "../../assets/images/team-person-2.png";
import teamPerson3 from "../../assets/images/team-person-3.png";
import teamPerson4 from "../../assets/images/team-person-4.png";
import teamPerson5 from "../../assets/images/team-person-5.png";
import teamPerson6 from "../../assets/images/team-person-6.png";

import memberImg1 from "../../assets/images/member-1.png";
import memberImg2 from "../../assets/images/member-2.png";
import memberImg3 from "../../assets/images/member-3.png";
import memberImg4 from "../../assets/images/member-4.png";
import memberImg5 from "../../assets/images/member-5.png";
import memberImg6 from "../../assets/images/member-6.png";
import memberImg7 from "../../assets/images/member-7.png";
import memberImg8 from "../../assets/images/member-8.png";

import timelineIcon1 from "../../assets/images/timeline/timeline-icon-1.png";
import timelineIcon2 from "../../assets/images/timeline/timeline-icon-2.png";
import timelineIcon3 from "../../assets/images/timeline/timeline-icon-3.png";
import timelineIcon4 from "../../assets/images/timeline/timeline-icon-4.png";

import offeringIcon1 from "../../assets/icons/program-offering-1.png";
import offeringIcon2 from "../../assets/icons/program-offering-2.png";
import offeringIcon3 from "../../assets/icons/program-offering-3.png";
import offeringIcon4 from "../../assets/icons/program-offering-4.png";

import './home.scss';

export default function Home() {
  return (
    <main className='home-page'>
      <section style={{ padding: '120px' }}>
        Section1
      </section>

      <section className='who-we-are'>
        <div className='container'>
          <h6 className='color-primary-light mb-20'>TEAM</h6>
          <h1 className='color-primary'>Who we are?</h1>
          <ul className='top-positions'>
            <li>
              <figure>
                <img src={teamPerson1} />
              </figure>
              <div className='bio-data'>
                <h2 className='color-primary mb-10 extra-bold'>Dr. Vishal Gandhi</h2>
                <h4 className='color-primary-light regular-bold'>Founder & CEO</h4>
                <h4 className='color-primary-light regular-bold'>PhD, MBA and MS, 23+ years of experience</h4>

                <p>Dr. Vishal Gandhi is the Founder & CEO at BIORx Venture Advisors Pvt. Ltd
                  (A Decade of Institutional Excellence) and Indian Healthcare Angels, an Angel Network
                  providing a seamless private platform to all the angel investors to invest in early-stage ventures.
                  His active projects include i3ex (a vertical of BIORx), which is an Impact focused Virtual Business
                  Accelerator for all key stakeholders in the startup ecosystem to tap opportunities in allied sectors
                  (Ed-Tech & Agri-Tech etc.)</p>

                <button className='btn light-bg mb-30'>Read full bio</button>

                <a href='#' className='pointer'><img src={circularLinkedinIcon} /></a>
              </div>
            </li>
            <li>
              <figure>
                <img src={teamPerson2} />
              </figure>
              <div className='bio-data'>
                <h2 className='color-primary mb-10 extra-bold'>Gaurav Sahay</h2>
                <h4 className='color-primary-light regular-bold'>COO, Co-Founder</h4>
                <h4 className='color-primary-light regular-bold'>MBA and B.Com, 10+ years of experience</h4>

                <p>
                  Gaurav is serving as Chief Operating Officer of Indian Healthcare Angels & BIORx Venture Advisors he leads the operations of the Company and heads strategic and financial advisory for portfolio startups in Healthcare & Edtech space, supporting startups in building sustainable and highly scalable business models. He has been
                  a mentor to many startups in the last 2 years
                </p>

                <p>
                  Gaurav comes from Dehradun and he is an alumnus of Delhi University & IE Business School Madrid.
                </p>

                <p>
                  He started his career as a public sector banker about a decade ago. Leading multiple initiatives in Corporate Finance, Credit Underwriting and Financial Inclusion.
                </p>

                <button className='btn light-bg mb-30'>Read full bio</button>

                <a href='#' className='pointer'><img src={circularLinkedinIcon} /></a>
              </div>
            </li>
            <li>
              <figure>
                <img src={teamPerson1} />
              </figure>
              <div className='bio-data'>
                <h2 className='color-primary mb-10 extra-bold'>Dr. Vishal Gandhi</h2>
                <h4 className='color-primary-light regular-bold'>Founder & CEO</h4>
                <h4 className='color-primary-light regular-bold'>PhD, MBA and MS, 23+ years of experience</h4>

                <p>Dr. Vishal Gandhi is the Founder & CEO at BIORx Venture Advisors Pvt. Ltd
                  (A Decade of Institutional Excellence) and Indian Healthcare Angels, an Angel Network
                  providing a seamless private platform to all the angel investors to invest in early-stage ventures.
                  His active projects include i3ex (a vertical of BIORx), which is an Impact focused Virtual Business
                  Accelerator for all key stakeholders in the startup ecosystem to tap opportunities in allied sectors
                  (Ed-Tech & Agri-Tech etc.)</p>

                <button className='btn light-bg mb-30'>Read full bio</button>

                <a href='#' className='pointer'><img src={circularLinkedinIcon} /></a>
              </div>
            </li>
            <li>
              <figure>
                <img src={teamPerson2} />
              </figure>
              <div className='bio-data'>
                <h2 className='color-primary mb-10 extra-bold'>Gaurav Sahay</h2>
                <h4 className='color-primary-light regular-bold'>COO, Co-Founder</h4>
                <h4 className='color-primary-light regular-bold'>MBA and B.Com, 10+ years of experience</h4>

                <p>
                  Gaurav is serving as Chief Operating Officer of Indian Healthcare Angels & BIORx Venture Advisors he leads the operations of the Company and heads strategic and financial advisory for portfolio startups in Healthcare & Edtech space, supporting startups in building sustainable and highly scalable business models. He has been
                  a mentor to many startups in the last 2 years
                </p>

                <p>
                  Gaurav comes from Dehradun and he is an alumnus of Delhi University & IE Business School Madrid.
                </p>

                <p>
                  He started his career as a public sector banker about a decade ago. Leading multiple initiatives in Corporate Finance, Credit Underwriting and Financial Inclusion.
                </p>

                <button className='btn light-bg mb-30'>Read full bio</button>

                <a href='#' className='pointer'><img src={circularLinkedinIcon} /></a>
              </div>
            </li>
          </ul>

          <div className='team-members'>
            <h1 className='color-primary extra-bold'>
              Members <br />
              and advisory board
            </h1>
            <img className='pattern-img' src={boardMemberPatternImg} />

            <Grid container rowSpacing={8} columnSpacing={4}>
              <Grid item xs={6} sm={6} md={3}>
                <figure>
                  <img src={memberImg1} />
                </figure>
                <h3 className='color-primary bold mb-10'>Prashant Tandon</h3>
                <h4 className='color-primary-light regular-bold'>COO</h4>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <figure>
                  <img src={memberImg2} />
                </figure>
                <h3 className='color-primary bold mb-10'>Vidhu Goel</h3>
                <h4 className='color-primary-light regular-bold'>CHRO</h4>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <figure>
                  <img src={memberImg3} />
                </figure>
                <h3 className='color-primary bold mb-10'>Dr. Varun Gupta</h3>
                <h4 className='color-primary-light regular-bold'>VP</h4>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <figure>
                  <img src={memberImg4} />
                </figure>
                <h3 className='color-primary bold mb-10'>Dr. Purav Gandhi</h3>
                <h4 className='color-primary-light regular-bold'>Investor Relations</h4>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <figure>
                  <img src={memberImg5} />
                </figure>
                <h3 className='color-primary bold mb-10'>Prashant Tandon</h3>
                <h4 className='color-primary-light regular-bold'>COO</h4>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <figure>
                  <img src={memberImg6} />
                </figure>
                <h3 className='color-primary bold mb-10'>Vidhu Goel</h3>
                <h4 className='color-primary-light regular-bold'>CHRO</h4>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <figure>
                  <img src={memberImg7} />
                </figure>
                <h3 className='color-primary bold mb-10'>Dr. Varun Gupta</h3>
                <h4 className='color-primary-light regular-bold'>VP</h4>
              </Grid>
              <Grid item xs={6} sm={6} md={3}>
                <figure>
                  <img src={memberImg8} />
                </figure>
                <h3 className='color-primary bold mb-10'>Dr. Purav Gandhi</h3>
                <h4 className='color-primary-light regular-bold'>Investor Relations</h4>
              </Grid>
            </Grid>

            <button className='btn primary-light mt-30'>Apply as a mentor</button>
          </div>
        </div>
      </section>

      <section className='mentorship-program'>
        <div className='container'>
          <div className='mentorship-header'>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <h1>IHA Mentorship<br />Program</h1>
              </Grid>
              <Grid item xs={12} md={6}>
                <h2>To mentor healthcare startups<br />
                  and take them to the next level</h2>
              </Grid>
            </Grid>
          </div>
          <div className='offering-body'>
            <h6 className='color-primary-light mb-20'>ANGEL INVESTING</h6>
            <h1 className='color-white'>Program Offerings</h1>

            <Grid container rowSpacing={10} columnSpacing={4}>
              <Grid item xs={12} md={6}>
                <img src={offeringIcon1} />
                <h3>Strategic CXO Network</h3>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src={offeringIcon2} />
                <h3>Grants and Growth Advisory</h3>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src={offeringIcon3} />
                <h3>Business Plan Validation</h3>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src={offeringIcon4} />
                <h3>Access to Funding and IP</h3>
              </Grid>
            </Grid>
          </div>
        </div>

      </section>

      <section className='timeline'>
        <div className='container'>
          <div className='time-line-header center'>
            <h5 className='color-primary-light'>TIMELINE</h5>
            <h1 className='color-white bold mt-20 mb-30'>Program offerings</h1>
            <button className='btn primary-light'>Apply for the first cohort</button>
          </div>
          <div className='timeline-content'>
            <ul>
              <li>
                <figure>
                  <img src={timelineIcon1} />
                </figure>
                <div>
                  <span className='number'>01</span>
                  <h3>October, 22</h3>
                  <h5>Program announcement</h5>
                </div>
              </li>
              <li>
                <figure>
                  <img src={timelineIcon2} />
                </figure>
                <div>
                  <span className='number'>02</span>
                  <h3>January - February, 23</h3>
                  <h5>Call for applications,<br />roadshow</h5>
                </div>
              </li>
              <li>
                <figure>
                  <img src={timelineIcon3} />
                </figure>
                <div>
                  <span className='number'>03</span>
                  <h3>March, 23</h3>
                  <h5>Shortlisting,<br />Discussions with startups</h5>

                </div>
              </li>
              <li>
                <figure>
                  <img src={timelineIcon4} />
                </figure>
                <div>
                  <span className='number'>04</span>
                  <h3>April, 23 - November, 23</h3>
                  <h5>Program Execution</h5>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </section>

      <section className='subscribe'>
        <div className='container'>
          <h1 className='bold'>Subscribe Our<br />News Letter</h1>
          <div className='email-cover'>
            <input type="email" placeholder='Your email address' />
            <img src={sentIcon} />
          </div>
        </div>
      </section>

      <section className="contact-us">
        <div className='container'>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <h1>Get in Touch</h1>
              <ul>
                <li>
                  <figure>
                    <img src={phoneIcon} alt="phone number" />
                  </figure>
                  <div>
                    <label>Phone Number</label>
                    <h2>+91 (62) 1829017</h2>
                  </div>
                </li>
                <li>
                  <figure>
                    <img src={emailIcon} alt="phone number" />
                  </figure>
                  <div>
                    <label>Email</label>
                    <h2>hello@iha.co</h2>
                  </div>
                </li>
                <li>
                  <figure>
                    <img src={locationIcon} alt="phone number" />
                  </figure>
                  <div>
                    <label>Office</label>
                    <h2>118, 6th floor, Tower B</h2>
                  </div>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} md={6}>
              <h1>Contact Us</h1>
              <form>
                <div>
                  <label>Name</label>
                  <input type="text" placeholder='Enter your name' />
                </div>
                <div>
                  <label>Email</label>
                  <input type="email" placeholder='Enter your email' />
                </div>
                <div>
                  <label>Message</label>
                  <textarea type="text" rows="5" placeholder='Enter your message'></textarea>
                </div>
                <button className='btn primary-light w-100'>submit</button>
              </form>
            </Grid>
          </Grid>
        </div>
      </section>
    </main>
  )
}
