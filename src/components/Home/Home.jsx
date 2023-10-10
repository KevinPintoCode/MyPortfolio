//Router
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
//React
import k_letter from '../../assets/images/k_letter.png'
import './Home.scss'
import '../Animated/AnimatedLetters.scss'
//Components
import AnimatedLetters from '../Animated/AnimatedLetters'

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate')
  const greetArray = 'Greetings Adventurer...'.split('')
  const nameArray = 'evin Pinto'.split('')
  const jobArray = 'web developer'.split('')

  return (
    <div>
      <div className="greeting">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={greetArray}
          idx={41}
        />
      </div>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <br />
            <br />
            <br />
            <span className={letterClass}>I</span>
            <span className={letterClass}>'m</span>
            <img className="k_letter" src={k_letter} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={28}
            />
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
