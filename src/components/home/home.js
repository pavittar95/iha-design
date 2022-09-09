import Grid from '@mui/material/Grid';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import sentIcon from "../../assets/icons/sent-icon.png";
import phoneIcon from "../../assets/icons/phone-number.png";
import emailIcon from "../../assets/icons/email.png";
import locationIcon from "../../assets/icons/location.png";
import circularLinkedinIcon from "../../assets/icons/circular-linkedin.png";
import boardMemberPatternImg from "../../assets/images/board-member-pattern.png";

import applyAsInvestorImg from "../../assets/images/apply-as-investor.svg";
import applyAsStartupImg from "../../assets/images/apply-as-startup.svg";
import watsappIcon from "../../assets/icons/watsapp-logo.svg";
import linkedinIcon from "../../assets/icons/linkedin-logo.svg";

import featureIcon1 from "../../assets/icons/feature-1.png";
import featureIcon2 from "../../assets/icons/feature-2.png";
import featureIcon3 from "../../assets/icons/feature-3.png";
import featureIcon4 from "../../assets/icons/feature-4.png";

import oneHealthCycleDesk from "../../assets/images/complete-one-health-desk.svg";
import oneHealthCycleMob from "../../assets/images/complete-one-health-mob.svg";
import mapImage from "../../assets/images/members-on-map.svg";

import workingFlowImgDesk from "../../assets/images/working-steps-desk.svg";
import workingFlowImgMob from "../../assets/images/working-steps-mob.svg";


import sectorIcon1 from "../../assets/icons/sector-1.png";
import sectorIcon2 from "../../assets/icons/sector-2.png";
import sectorIcon3 from "../../assets/icons/sector-3.png";
import sectorIcon4 from "../../assets/icons/sector-4.png";
import sectorIcon5 from "../../assets/icons/sector-5.png";
import sectorIcon6 from "../../assets/icons/sector-6.png";
import sectorIcon7 from "../../assets/icons/sector-7.png";
import sectorIcon8 from "../../assets/icons/sector-8.png";
import sectorIcon9 from "../../assets/icons/sector-9.png";
import sectorIcon10 from "../../assets/icons/sector-10.png";
import sectorIcon11 from "../../assets/icons/sector-11.png";
import sectorIcon12 from "../../assets/icons/sector-12.png";



import angelInvestingIcon1 from "../../assets/icons/angle-investing-2.png";
import angelInvestingIcon2 from "../../assets/icons/angle-investing-2.png";
import angelInvestingIcon3 from "../../assets/icons/angle-investing-3.png";
import angelInvestingIcon4 from "../../assets/icons/angle-investing-4.png";

import programOffering1 from "../../assets/icons/program-offering-1.png";
import programOffering2 from "../../assets/icons/program-offering-2.png";
import programOffering3 from "../../assets/icons/program-offering-3.png";
import programOffering4 from "../../assets/icons/program-offering-4.png";

import ecoPartner1 from "../../assets/images/partner-1.svg";
import ecoPartner2 from "../../assets/images/partner-2.svg";
import ecoPartner3 from "../../assets/images/partner-3.svg";
import ecoPartner4 from "../../assets/images/partner-4.svg";
import ecoPartner5 from "../../assets/images/partner-5.svg";
import ecoPartner6 from "../../assets/images/partner-6.svg";


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
import { LinkedIn, WhatsApp } from '@mui/icons-material';

export default function Home() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <main className='home-page'>


      <section className='top-section'>
        <ul className='sticky-buttons'>
          <li>
            <a href='#'>
              <img src={applyAsInvestorImg} />
            </a>
          </li>
          <li>
            <a href='#'>
              <img src={applyAsStartupImg} />
            </a>
          </li>
          <li className='for-web'>
            <a href='#'>
              <img src={watsappIcon} />
            </a>
          </li>
          <li className='for-web'>
            <a href='#'>
              <img src={linkedinIcon} />
            </a>
          </li>
        </ul>
        <div className='container'>
          <Grid container columnSpacing={20}>
            <Grid item sm={12} md={9}>
              <h2 className='color-secondary-light bold'>We are Indian Healthcare Angels (IHA)</h2>
              <h1 className='color-white'>We bring <i>active deal</i> innovation to our healthcare ecosystem.</h1>
              <div className='buttons-cover'>
                <button className='btn secondary-light'>JOIN AS AN INDIVIDUAL INVESTOR</button>
                <button className='btn primary-light'>JOIN AS A CORPORATE INVESTOR</button>
                <button className='btn'>APPLY AS A STARTUP</button>
                <button className='btn'>APPLY AS A MENTOR</button>
              </div>
            </Grid>
          </Grid>
          <div className='feature-card-list'>

            <Grid container rowSpacing={8} columnSpacing={4}>
              <Grid item xs={6} lg={3}>
                <div className='feature-card'>
                  <figure>
                    <img src={featureIcon1} />
                  </figure>
                  <h2 className='mb-10 mt-30'>Huge CXO<br />Network</h2>
                </div>
              </Grid>
              <Grid item xs={6} lg={3}>
                <div className='feature-card'>
                  <figure>
                    <img src={featureIcon2} />
                  </figure>
                  <h2 className='mb-10 mt-30'>Extensive<br />deal flow</h2>
                </div>
              </Grid>
              <Grid item xs={6} lg={3}>
                <div className='feature-card'>
                  <figure>
                    <img src={featureIcon3} />
                  </figure>
                  <h2 className='mb-10 mt-30'>Exclusive<br />deal access</h2>
                </div>
              </Grid>
              <Grid item xs={6} lg={3}>
                <div className='feature-card'>
                  <figure>
                    <img src={featureIcon4} />
                  </figure>
                  <h2>50+ years of<br />experience</h2>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </section>



      <section className='one-health'>
        <div className='container'>

          <h5 className='color-primary-light bold'>ONE HEALTH</h5>
          <h1 className='sub-heading color-white left-gradient'>IHA is focused on One Health approach.<br /><br />When you protect one, you protect <br />the other.</h1>
          <button className='btn primary-light'>join as an investor</button>

          <figure className='complete-one-health'>
            <img src={oneHealthCycleDesk} />
            <img src={oneHealthCycleMob} />
          </figure>

          <Grid className='biorx' container rowSpacing={10} columnSpacing={20}>
            <Grid item xs={12} md={6}>
              <figure className='map-image'>
                <img src={mapImage} />
              </figure>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className='biorx-content'>
                <h2 className='sub-heading color-white'>IHA powered by BIORx</h2>
                <h3 className='color-light mt-20'>Indian Healthcare Angels (IHA) is a brand owned by BIORx Venture Advisors Pvt. Ltd which provides a seamless private platform to all the angel investors to invest in
                  early-stage ventures (Healthcare, Med-tech, Life Sciences, Pharma, Aggrotech, Biotech, Digital Health Start-ups
                  and allied social sectors)</h3>
              </div>
            </Grid>
          </Grid>


        </div>
      </section>

      <section className='sub-sectors'>
        <div className='container'>
          <h5 className='color-primary-light bold'>IHA FOR INVESTORS</h5>
          <h1 className='sub-heading color-primary left-gradient'>Here are the impact sub<br />sectors that we focus on</h1>
          <button className='btn primary-light w-100-mob'>join as an investor</button>

          <Grid container rowSpacing={{xs:5, md:7}} columnSpacing={4}>
            <Grid item xs={6} md={4} lg={3}>
              <img src={sectorIcon1} />
              <h3 className='color-primary mt-20'>Digital Healthcare</h3>
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <img src={sectorIcon2} />
              <h3 className='color-primary mt-20'>Pharmaceuticals</h3>
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <img src={sectorIcon3} />
              <h3 className='color-primary mt-20'>Biotechnology and<br />Bioengineering</h3>
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <img src={sectorIcon4} />
              <h3 className='color-primary mt-20'>Medical Devices and<br />Equipment</h3>
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <img src={sectorIcon5} />
              <h3 className='color-primary mt-20'>Clinical Research<br />Organizations</h3>
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <img src={sectorIcon6} />
              <h3 className='color-primary mt-20'>Mental Health and<br />Wellness</h3>
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <img src={sectorIcon7} />
              <h3 className='color-primary mt-20'>Medical supplies</h3>
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <img src={sectorIcon8} />
              <h3 className='color-primary mt-20'>Diagnostics and<br />Nutraceuticals</h3>
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <img src={sectorIcon9} />
              <h3 className='color-primary mt-20'>Agritech<br />and agriculture</h3>
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <img src={sectorIcon10} />
              <h3 className='color-primary mt-20'>Cleantech and<br />environment</h3>
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <img src={sectorIcon11} />
              <h3 className='color-primary mt-20'>Edtech</h3>
            </Grid>
            <Grid item xs={6} md={4} lg={3}>
              <img src={sectorIcon12} />
              <h3 className='color-primary mt-20'>And many<br />more</h3>
            </Grid>
          </Grid>
        </div>
      </section>

      <section className='angel-investing'>
        <div className='container'>
          <h5 className='color-primary-light bold'>ANGEL INVESTING</h5>
          <h1 className='sub-heading color-primary left-gradient'>Why IHA for <br />Angel Investing?</h1>
          <button className='btn primary-light w-100-mob'>join as an investor</button>

          <Grid container rowSpacing={{xs:5, md:7}} columnSpacing={4}>
            <Grid item xs={6} lg={3}>
              <img src={angelInvestingIcon1} />
              <h3 className='color-primary mt-20'>Chance to collaborate</h3>
            </Grid>
            <Grid item xs={6} lg={3}>
              <img src={angelInvestingIcon2} />
              <h3 className='color-primary mt-20'>Transparency</h3>
            </Grid>
            <Grid item xs={6} lg={3}>
              <img src={angelInvestingIcon3} />
              <h3 className='color-primary mt-20'>Domain expertise</h3>
            </Grid>
            <Grid item xs={6} lg={3}>
              <img src={angelInvestingIcon4} />
              <h3 className='color-primary mt-20'>Easy access<br />& Convenience</h3>
            </Grid>
          </Grid>

          <div className='angel-investing-footer'>
            <h2 className='main-heading color-primary'>
              We are not only the best platform for angels out there but also the <i className='color-secondary-light regular'>best impact accelerator</i> for healthcare startups around the world.
            </h2>
          </div>
        </div>
      </section>

      <section className='way-of-working'>
        <div className='container'>
          <h5 className='color-primary-light bold'>IHA FOR STARTUPS - OUR PROCESS</h5>
          <h1 className='sub-heading color-white left-gradient'>Our way of working<br />with startups</h1>
          <button className='btn primary-light w-100-mob'>apply as a startup</button>

          <figure className='working-flow-img'>
            <img src={workingFlowImgDesk} />
            <img src={workingFlowImgMob} />
          </figure>
        </div>
      </section>

      <section className='ecosystem-partners'>
        <div className='container'>
          <h5 className='color-primary-light bold'>PARTNERS</h5>
          <h1 className='sub-heading color-white left-gradient'>Our Ecosystem Partners</h1>
          <button className='btn primary-light w-100-mob'>apply as a startup</button>

          <Carousel responsive={responsive} containerClass="cards-carousel">
            <div className='two-partners'>
              <div className='partner-cover'>
                <img src={ecoPartner1} />
              </div>
              <div className='partner-cover'>
                <img src={ecoPartner2} />
              </div>
            </div>
            <div className='two-partners'>
              <div className='partner-cover'>
                <img src={ecoPartner3} />
              </div>
              <div className='partner-cover'>
                <img src={ecoPartner4} />
              </div>
            </div>
            <div className='two-partners'>
              <div className='partner-cover'>
                <img src={ecoPartner5} />
              </div>
              <div className='partner-cover'>
                <img src={ecoPartner6} />
              </div>
            </div>
            <div className='two-partners'>
              <div className='partner-cover'>
                <img src={ecoPartner5} />
              </div>
              <div className='partner-cover'>
                <img src={ecoPartner6} />
              </div>
            </div>
          </Carousel>
        </div>
      </section>

      <section className='your-startup'>
        <div className='container'>
          <h5 className='color-primary-light bold'>IHA FOR STARTUPS</h5>
          <h1 className='sub-heading color-white left-gradient'>Why IHA for your<br />startup?</h1>
          <button className='btn primary-light w-100-mob'>apply as a startup</button>

          <Grid container rowSpacing={10} columnSpacing={4}>
            <Grid item xs={6} lg={3}>
              <img src={programOffering1} />
              <h3 className='color-white mt-20'>Proprietary Deal flow</h3>
            </Grid>
            <Grid item xs={6} lg={3}>
              <img src={programOffering2} />
              <h3 className='color-white mt-20'>50 years of experience</h3>
            </Grid>
            <Grid item xs={6} lg={3}>
              <img src={programOffering3} />
              <h3 className='color-white mt-20'>Mentor ecosystem</h3>
            </Grid>
            <Grid item xs={6} lg={3}>
              <img src={programOffering4} />
              <h3 className='color-white mt-20'>Experienced founders</h3>
            </Grid>
          </Grid>
          <h4 className='color-light bold'>Interested in IHA Pitch events?</h4>
          <button className='btn secondary-light w-100-mob'>Register here</button>
        </div>
      </section>

      <section className='who-we-are'>
        <div className='container'>
          <h6 className='color-primary-light mb-20'>TEAM</h6>
          <h1 className='sub-heading color-primary left-gradient'>Who we are?</h1>
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

                <button className='btn light-bg mb-30 w-100-mob'>Read full bio</button>

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

                <a href='#' className='pointer'><img src={circularLinkedinIcon} /></a>
              </div>
            </li>
            <li>
              <figure>
                <img src={teamPerson3} />
              </figure>
              <div className='bio-data'>
                <h2 className='color-primary mb-10 extra-bold'>Hryshikesh Dihingia</h2>
                <h4 className='color-primary-light regular-bold'>Vice President</h4>
                <h4 className='color-primary-light regular-bold'>MBA and B.Com, 9+ years of experience</h4>

                <p>Hryshikesh is the head of Strategy & Business Development at Indian Healthcare Angels (IHA), he has a rich corporate experience of about 8 years with S&P Global Market Intelligence. During his professional tenure with S&P, he has effectively led and managed several cross functional projects and stakeholders including Clients, Vendors, internal research, technology and product teams. Hryshi was also an active member of the Community Impact drive of the company comprising of activities including teaching & managing school activities for destitute children, tree plantation drives, book & clothes distribution to orphanages and old age homes. He has always been passionate about sports and has led the University and Office Cricket teams. Hryshi loves to travel, explore new places & cultures and is a big time foodaholic.</p>
                <p>Hryshikesh hails from Naharkatia, Assam. He pursued his Bachelor of
                  Commerce (Hons.) from Delhi University and his MBA in Finance from the NIIT University. </p>
                <a href='#' className='pointer'><img src={circularLinkedinIcon} /></a>
              </div>
            </li>
            <li>
              <figure>
                <img src={teamPerson4} />
              </figure>
              <div className='bio-data'>
                <h2 className='color-primary mb-10 extra-bold'>Pritika Kalra</h2>
                <h4 className='color-primary-light regular-bold'>Director Communication & PR </h4>
                <h4 className='color-primary-light regular-bold'>MA & PG Diploma in Journalism, 20+ years of experience</h4>

                <p>After completing Master’s in Arts from the Hindu College, University of Delhi, Pritika went on to complete a communications diploma from Bharatiya Vidya Bhavan, New Delhi. She has a long association with BIORx & Indian Healthcare Angels as one of its Founding Members. Prior to that she worked for over a decade in Media, Marketing Communication and Human Capital Management in The Energy and Resources Institute [TERI], New Delhi as well as at the India Infrastructure Publishing, New Delhi.
                  Pritika does not restrict her work to Print or Digital Media. She converges multiple modes of communication to create a connection with people—such as even using Music and Indian Dance!  </p>
                <a href='#' className='pointer'><img src={circularLinkedinIcon} /></a>
              </div>
            </li>
            <li>
              <figure>
                <img src={teamPerson5} />
              </figure>
              <div className='bio-data'>
                <h2 className='color-primary mb-10 extra-bold'>Sreeram Sridhar</h2>
                <h4 className='color-primary-light regular-bold'>Senior manager</h4>
                <h4 className='color-primary-light regular-bold'>BBA, 2+ years of Experience</h4>

                <p>Sreeram takes is a Senior Manager and he takes care of Transaction Advisory and Investor Relationships at Indian Healthcare Angels (IHA),
                  Sreeram started his career in the Fintech space with Paytm where he was working in the FASTag category and has seen and experienced the initial phase of FASTag implementation. He helped the team in Offline Operations with support in Customer Acquisition Cost (CAC) tracking across the offline channels and support the management in keeping the CAC within a certain threshold, plan study of work problems and procedures such as cost analysis, organizational change, communications, and information flow for the offline Agent network, pay out calculations for agents based on different pay structures according to market condition and compliance adherence for our offline Agent network.
                  Sreeram hails from Chennai, Tamil Nadu. He pursued his Bachelor of Business Administration (BBA) from Symbiosis International (Deemed to be University).
                </p>
                <a href='#' className='pointer'><img src={circularLinkedinIcon} /></a>
              </div>
            </li>
            <li>
              <figure>
                <img src={teamPerson6} />
              </figure>
              <div className='bio-data'>
                <h2 className='color-primary mb-10 extra-bold'>Ranita Kalaskar</h2>
                <h4 className='color-primary-light regular-bold'>Assistant Manager</h4>
                <h4 className='color-primary-light regular-bold'>BA LLB, 6+ Months of experience</h4>

                <p>Ranita Kalaskar is the Assistant Manager Legal at Indian Healthcare Angels, a law graduate from Amity Law School Delhi having interests in Corporate Law and building her career on the lines of Investment Banking taking care of legal aspects and compliances. She has been with IHA for the past 7 months. She has worked with a Delhi based e-commerce company prior to IHA in their legal and  growth department. She is fond of reading books, dancing, and painting adding the affable element of creativity to the team.</p>
                <a href='#' className='pointer'><img src={circularLinkedinIcon} /></a>
              </div>
            </li>
          </ul>

          <div className='team-members'>
            <h1 className='sub-heading color-primary left-gradient'>
              Members <br />
              and advisory board
            </h1>
            <img className='pattern-img' src={boardMemberPatternImg} />

            <Grid container rowSpacing={8} columnSpacing={4}>
              <Grid item xs={6} md={4} lg={3}>
                <figure>
                  <img src={memberImg1} />
                </figure>
                <h3 className='color-primary bold mb-10'>Prashant Tandon</h3>
                <h4 className='color-primary-light regular-bold'>COO</h4>
              </Grid>
              <Grid item xs={6} md={4} lg={3}>
                <figure>
                  <img src={memberImg2} />
                </figure>
                <h3 className='color-primary bold mb-10'>Vidhu Goel</h3>
                <h4 className='color-primary-light regular-bold'>CHRO</h4>
              </Grid>
              <Grid item xs={6} md={4} lg={3}>
                <figure>
                  <img src={memberImg3} />
                </figure>
                <h3 className='color-primary bold mb-10'>Dr. Varun Gupta</h3>
                <h4 className='color-primary-light regular-bold'>VP</h4>
              </Grid>
              <Grid item xs={6} md={4} lg={3}>
                <figure>
                  <img src={memberImg4} />
                </figure>
                <h3 className='color-primary bold mb-10'>Dr. Purav Gandhi</h3>
                <h4 className='color-primary-light regular-bold'>Investor Relations</h4>
              </Grid>
              <Grid item xs={6} md={4} lg={3}>
                <figure>
                  <img src={memberImg5} />
                </figure>
                <h3 className='color-primary bold mb-10'>Prashant Tandon</h3>
                <h4 className='color-primary-light regular-bold'>COO</h4>
              </Grid>
              <Grid item xs={6} md={4} lg={3}>
                <figure>
                  <img src={memberImg6} />
                </figure>
                <h3 className='color-primary bold mb-10'>Vidhu Goel</h3>
                <h4 className='color-primary-light regular-bold'>CHRO</h4>
              </Grid>
              <Grid item xs={6} md={4} lg={3}>
                <figure>
                  <img src={memberImg7} />
                </figure>
                <h3 className='color-primary bold mb-10'>Dr. Varun Gupta</h3>
                <h4 className='color-primary-light regular-bold'>VP</h4>
              </Grid>
              <Grid item xs={6} md={4} lg={3}>
                <figure>
                  <img src={memberImg8} />
                </figure>
                <h3 className='color-primary bold mb-10'>Dr. Purav Gandhi</h3>
                <h4 className='color-primary-light regular-bold'>Investor Relations</h4>
              </Grid>
            </Grid>

            <button className='btn primary-light mt-30 w-100-mob'>Apply as a mentor</button>
          </div>
        </div>
      </section>

      <section className='mentorship-program'>
        <div className='container'>
          <div className='mentorship-header'>
            <Grid container spacing={4}>
              <Grid item sm={12} md={6}>
                <h1 className='main-heading color-white'>IHA Mentorship<br />Program</h1>
              </Grid>
              <Grid item sm={12} md={6}>
                <h2>To mentor healthcare startups<br />
                  and take them to the next level</h2>
              </Grid>
            </Grid>
          </div>
          <div className='offering-body'>
            <h6 className='color-primary-light mb-20'>ANGEL INVESTING</h6>
            <h1 className='main-heading color-white left-gradient'>Program Offerings</h1>

            <Grid container rowSpacing={{xs:5, md:7}} columnSpacing={4}>
              <Grid item xs={6} md={6}>
                <img src={offeringIcon1} />
                <h3>Strategic CXO Network</h3>
              </Grid>
              <Grid item xs={6} md={6}>
                <img src={offeringIcon2} />
                <h3>Grants and Growth Advisory</h3>
              </Grid>
              <Grid item xs={6} md={6}>
                <img src={offeringIcon3} />
                <h3>Business Plan Validation</h3>
              </Grid>
              <Grid item xs={6} md={6}>
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
            <h1 className='main-heading color-white bold mt-20 mb-30'>Program offerings</h1>
            <button className='btn primary-light w-100-mob'>Apply for the first cohort</button>
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
          <h1 className='color-white'>Subscribe Our<br />News Letter</h1>
          <div className='email-cover'>
            <input type="email" placeholder='Your email address' />
            <button type="submit" className='on-load'>
              <img src={sentIcon} />
            </button>
          </div>
        </div>
      </section>

      <section className="contact-us">
        <div className='container'> 
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <h1 className='main-heading color-white left-gradient'>Get in Touch</h1>
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
              <h1 className='main-heading color-white left-gradient'>Contact Us</h1>
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
