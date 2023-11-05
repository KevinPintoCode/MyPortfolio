import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Sidebar.scss';
import Logo from '../../assets/images/logo.png';
import { TbHomeMove } from 'react-icons/tb';
import { FaRegEnvelope } from 'react-icons/fa6';
import { PiSword } from 'react-icons/pi';
import {
  RiContactsLine,
  RiLinkedinBoxLine,
  RiGithubLine,
} from 'react-icons/ri';
import { Fade as Hamburger } from 'hamburger-react';

export default function Sidebar() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img className="logo" src={Logo} alt="logo" />
      </Link>
      <nav className={isOpen ? 'mobile-show' : ''}>
        <NavLink
          onClick={() => setOpen(!isOpen)}
          className="link home-link"
          exact="true"
          activeclassname="active"
          to="/"
        >
          <TbHomeMove />
        </NavLink>
        <NavLink
          onClick={() => setOpen(!isOpen)}
          className="link about-link"
          exact="true"
          activeclassname="active"
          to="/about"
        >
          <RiContactsLine />
        </NavLink>
        <NavLink
          onClick={() => setOpen(!isOpen)}
          className="link portfolio-link"
          exact="true"
          activeclassname="active"
          to="/portfolio"
        >
          <PiSword />
        </NavLink>
        <NavLink
          onClick={() => setOpen(!isOpen)}
          className="link contact-link"
          exact="true"
          activeclassname="active"
          to="/contact"
        >
          <FaRegEnvelope />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/kevin-pinto-977b8b283/"
          >
            <RiLinkedinBoxLine />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/KevinPintoCode"
          >
            <RiGithubLine />
          </a>
        </li>
      </ul>
      <div className="hamburguer-icon">
        <Hamburger
          onClick={() => setOpen(!isOpen)}
          color="#a970ff"
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
    </div>
  );
}
