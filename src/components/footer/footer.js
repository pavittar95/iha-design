import * as React from 'react';
import Grid from '@mui/material/Grid';

import './footer.scss';


export default function Footer() {
  return (
    <footer>
      <div className='container'>

        <h2>
          IHA looks forward to making healthcare startups' journeys
          more impactful and value creative for all the stakeholders.
        </h2>
        <Grid container spacing={4}>
          <Grid item xs={6} md={3}>
            <h3>Thesis</h3>
            <ul>
              <li>
                <a>Who we invest in?</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>Process</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} md={3}>
            <h3>Who we are</h3>
            <ul>
              <li>
                <a>Founders</a>
              </li>
              <li>
                <a>Members and Advisors</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} md={3}>
            <h3>Policy</h3>
            <ul>
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>Terms of Service</a>
              </li>
              <li>
                <a>Code of Conduct</a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} md={3}>
            <h3>Social</h3>
            <ul>
              <li>
                <a>Linkedin</a>
              </li>
            </ul>
          </Grid>
        </Grid>
        <h4>IHA, BIORx, All rights reserved. Copyright 2022.</h4>
      </div>
    </footer>
  )
}
