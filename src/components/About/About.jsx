import './About.scss';
import { useState, useEffect } from 'react';
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
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s
        </p>
        <p>
          Why do we use it? It is a long established fact that a reader will be
          distracted by the readable content of a page when looking at its
          layout.
        </p>
        <p>
          Where can I get some? There are many variations of passages of Lorem
          Ipsum available, but the majority have suffered alteration in some
          form, by injected humour, or randomised words.
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
  );
}
