//Router
import { Link } from 'react-router-dom'
//React
import k_letter from '../../assets/images/k_letter.png'
import './Home.scss'

export default function Home() {
  return (
    <div>
      <div className="greeting">Greetings adventurer,</div>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <br />
            <br />
            <br />
            I'm
            <img className="k_letter" src={k_letter} alt="developer" />
            evin Pinto
            <br />
            web developer
          </h1>
          <h2>
            Frontend Developer / <span className="gamer">Gamer</span>{' '}
            <span className="purple">/</span> Designer /
          </h2>
          <Link to="/contact" className="flat_button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </div>
  )
}
