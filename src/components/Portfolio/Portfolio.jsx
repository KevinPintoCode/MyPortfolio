import './Portfolio.scss';
import Loader from 'react-loaders';
import { useEffect, useState, useRef } from 'react';
import AnimatedLetters from '../Animated/AnimatedLetters';
import { getDocs, collection } from 'firebase/firestore/lite';
import { DB } from '../../firebase';

export default function Portfolio() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [portfolio, setPortfolio] = useState([]);

  const projectsArray = 'Some of my projects...'.split('');

  useEffect(() => {
    getPortfolio();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(DB, 'portfolio'));
    setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
  };

  const renderPortfolio = (portfolio) => {
    return (
      <>
        <div className="images-container">
          {portfolio.map((port, idx) => {
            return (
              <div className="image-box" key={idx}>
                <img
                  className="portfolio-image"
                  src={port.image}
                  alt="portfolio project"
                />
                <div className="content">
                  <p className="title">{port.name}</p>
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
        <div>{renderPortfolio(portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  );
}
