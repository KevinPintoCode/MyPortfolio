//Router
import { Link } from 'react-dom'
//React
import Logo from '../../assets/images/logo.png'
import './Home.scss'

export default function Home() {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm
          <img src={Logo} alt="developer" />
          Kevin Pinto
          <br />
          Web developer
          <h2>Frontend Developer / Designer / Gamer</h2>
        </h1>
      </div>
    </div>
  )
}
