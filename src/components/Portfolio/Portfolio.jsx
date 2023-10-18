import './Portfolio.scss';
import Loader from 'react-loaders';
import { useEffect, useState, useRef } from 'react';
import AnimatedLetters from '../Animated/AnimatedLetters';
import portfolioData from '../../data/portfolio.json';

export default function Portfolio() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const projectsArray = 'Portfolio'.split('');

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  const renderPortfolio = (portfolio) => {
    return (
      <>
        <div className="images-container">
          {portfolio.map((port, idx) => {
            return (
              <div className="image-box" key={idx}>
                <img
                  className="portfolio-image"
                  src={port.cover}
                  alt="portfolio project"
                />
                <div className="content">
                  <p className="title">{port.title}</p>
                  <h4 className="description">{port.description}</h4>
                  <button
                    className="button"
                    onClick={() => window.open(port.url)}
                  >
                    View
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  };
  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={projectsArray}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  );
}
