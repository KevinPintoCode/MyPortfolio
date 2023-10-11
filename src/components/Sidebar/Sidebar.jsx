import { Link, NavLink } from 'react-router-dom';
import './Sidebar.scss';
import Logo from '../../assets/images/logo.png';
import LogoSubtitle from '../../assets/images/subtitle.png';
import { TbHomeMove } from 'react-icons/tb';
import { FaRegEnvelope, FaQuestion } from 'react-icons/fa6';
import {
  RiContactsLine,
  RiLinkedinBoxLine,
  RiGithubLine,
} from 'react-icons/ri';

export default function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img className="logo" src={Logo} alt="logo" />
        <img className="subtitle" src={LogoSubtitle} alt="kevincode" />
      </Link>
      <nav>
        <NavLink
          className="active link home-link"
          exact="true"
          activeclassname="active"
          to="/"
        >
          <TbHomeMove />
        </NavLink>
        <NavLink
          className="link about-link"
          exact="true"
          activeclassname="active"
          to="/about"
        >
          <RiContactsLine />
        </NavLink>
        <NavLink
          className="link projects-link"
          exact="true"
          activeclassname="active"
          to="/projects"
        >
          <FaQuestion />
        </NavLink>
        <NavLink
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
    </div>
  );
}
