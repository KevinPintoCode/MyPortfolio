import Loader from 'react-loaders';
import './Contact.scss';
import AnimatedLetters from '../Animated/AnimatedLetters';
import { useEffect, useState } from 'react';

export default function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover');
    }, 4000);
  }, []);
  const strArray = 'Contact Me'.split('');
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={strArray}
              idx={15}
            />
          </h1>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}
