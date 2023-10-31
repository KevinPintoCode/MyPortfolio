import Loader from 'react-loaders';
import './Contact.scss';
import AnimatedLetters from '../Animated/AnimatedLetters';
import { useEffect, useState, useRef } from 'react';

export default function Contact() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8j9cphd',
        'contact_form',
        form.current,
        'dDPJ2T9MK2J4yZkpw'
      )
      .then(
        function (response) {
          alert('Your message has been successfully sent!');
          window.location.reload(false);
        },
        function (error) {
          alert('Failed to sent your message, please try again.');
        }
      );
  };

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
          <p>
            Ready to collaborate on a project or just want to discuss gaming and
            design? Let's chat!
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea placeholder="Message" name="message"></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
}
