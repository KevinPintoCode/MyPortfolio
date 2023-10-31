import './About.scss';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
//Icons
import { DiPhotoshop, DiJavascript1, DiUnitySmall } from 'react-icons/di';
import { RiCss3Fill } from 'react-icons/ri';
import { SiReact, SiUnity, SiFigma } from 'react-icons/si';
import { IconContext } from 'react-icons';

import AnimatedLetters from '../Animated/AnimatedLetters';
export default function About() {
  const aboutArr = 'About me'.split('');
  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover');
    }, 3000);
  }, []);
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArr}
              idx={15}
            />
          </h1>
          <p>
            Hello there, I'm Kevin Pinto, known as "Goss" in the gaming world.
            Hailing from Venezuela, I wear multiple hats as a front-end
            developer, avid gamer, and passionate designer. Beyond the tech
            realm, I'm also deeply into rap music and photography.
          </p>
          <p>
            I have an insatiable curiosity for new technologies and the art of
            creative coding. My journey into the world of full stack development
            led me to discover the thrilling realm of Unity, where I can bring
            my ideas to life and make meaningful contributions to the gaming
            community.
          </p>
          <p>
            My background in engineering and my experiences as a world traveler,
            devoted husband and pet lover, might seem diverse, but in 2021, I
            decided to channel my passions into a new career. The fusion of
            gaming and design in coding provided me with the exhilaration I've
            sought for years. I've found my place, and I'm here to explore,
            innovate, and make an impact.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cube-spinner">
            <div className="face1">
              <IconContext.Provider value={{ color: '#28a4d9' }}>
                <div>
                  <RiCss3Fill />
                </div>
              </IconContext.Provider>
            </div>
            <div className="face2">
              <IconContext.Provider value={{ color: '#1b1790' }}>
                <div>
                  <DiPhotoshop />
                </div>
              </IconContext.Provider>
            </div>
            <div className="face3">
              <IconContext.Provider value={{ color: '#efd81d' }}>
                <div>
                  <DiJavascript1 />
                </div>
              </IconContext.Provider>
            </div>
            <div className="face4">
              <IconContext.Provider value={{ color: '#70e0ff' }}>
                <div>
                  <SiReact />
                </div>
              </IconContext.Provider>
            </div>
            <div className="face5">
              <IconContext.Provider value={{ color: '#616161' }}>
                <div>
                  <DiUnitySmall />
                </div>
              </IconContext.Provider>
            </div>
            <div className="face6">
              <IconContext.Provider value={{ color: '#41c67d' }}>
                <div>
                  <SiFigma />
                </div>
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}
