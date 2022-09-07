import * as React from 'react';

import logoImg from "../../assets/images/logo.svg";
import watsappIcon from "../../assets/icons/watsapp-logo.svg";
import linkedinIcon from "../../assets/icons/linkedin-logo.svg";
import plusIcon from "../../assets/icons/plus.svg";
import minusIcon from "../../assets/icons/minus.svg";

import './header.scss';

export default function Header() {

  return (
      <header>
        <div className='container'>
          <figure className='logo-cover'>
            <img src={logoImg} />
          </figure>
          <div className="justify-end">
            <a className='for-mob'>
              <img src={watsappIcon} />
            </a>
            <a className='for-mob'>
              <img src={linkedinIcon} />
            </a>
            <div className='open-menu justify-end'>
              <h4 className='mr-10'>MENU</h4>
              <img src={plusIcon} />
            </div>

            <div className='menu-cover'>
              <div className='container'>
                <header>
                  <figure className='logo-cover'>
                    <img src={logoImg} />
                  </figure>
                  <div className='open-menu justify-end'>
                    <h4 className='mr-10'>CLOSE</h4>
                    <img src={minusIcon} />
                  </div>
                </header>
                <ul className='menu-list'>
                  <li>
                    <h4 className='italic'>01</h4>
                    <h1>Who we are</h1>
                  </li>
                  <li className='active'>
                    <h4 className='italic'>02</h4>
                    <h1>One Health</h1>
                  </li>
                  <li>
                    <h4 className='italic'>03</h4>
                    <h1>IHA for investors</h1>
                  </li>
                  <li>
                    <h4 className='italic'>04</h4>
                    <h1>IHA for startups</h1>
                  </li>
                  <li>
                    <h4 className='italic'>05</h4>
                    <h1>Our team</h1>
                  </li>
                  <li>
                    <h4 className='italic'>06</h4>
                    <h1>Mentorship program</h1>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </header>
  )
}
