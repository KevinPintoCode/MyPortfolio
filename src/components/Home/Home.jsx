//Router
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
//React
import k_letter from '../../assets/images/k_letter.png';
import './Home.scss';
import Loader from 'react-loaders';
//Components
import AnimatedLetters from '../Animated/AnimatedLetters';
import Logo from '../Logo/Logo';

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const greetArray = 'Welcome  Adventurer'.split('');
  const greetArray1 = 'Welcome '.split('');
  const greetArray2 = ' Adventurer...'.split('');
  const nameArray = 'evin Pinto,'.split('');
  const jobArray = 'web developer...'.split('');
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover');
    }, 4000);
  }, []);
  return (
    <>
      <div>
        <div className="container home-page">
          <div className="text-zone">
            <div className="welcome">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={greetArray}
                  idx={15}
                />
              </h1>
            </div>
            <h2>
              <span className={`${letterClass} _11`}>I</span>
              <span className={`${letterClass} _12`}>'</span>
              <span className={`${letterClass} _13`}>m</span>
              <img className="k-letter" src={k_letter} alt="developer" />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={15}
              />
            </h2>
            <h3>
              Frontend Developer / <span className="gamer">Gamer</span>{' '}
              <span className="purple">/</span> Designer /
            </h3>
            <Link to="/contact" className="flat_button">
              CONTACT ME
            </Link>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}
