import React from 'react';
import { Parallax, Background } from 'react-parallax';
import EmailButtonComponent from '../shared/EmailButtonComponent.react';
import HeaderComponent from '../shared/HeaderComponent.react';
import LogoComponent from '../shared/LogoComponent.react';
import TrianglesTitleComponent from '../shared/TrianglesTitleComponent.react';
import './Contact.scss';
// import cssmodules from 'react-css-modules';
// import styles from './Contact.scss';

const breakpoints = {
  mobile: 0,
  third: 640,
  fourth: 960,
  desktop: 1280
};

// @cssmodules(styles)
class Contact extends React.Component {

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', () => { this.updateDimensions(); });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => { this.updateDimensions(); });
  }

  updateDimensions() {
    const w = window;
    const d = document;
    const documentElement = d.documentElement;
    const body = d.getElementsByTagName('body')[0];
    const width = w.innerWidth || documentElement.clientWidth || body.clientWidth;
    const height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

    this.setState({width, height});
  }

  render() {
    // write the title here
    const TRIANGLE_TITLE = 'INFO';
    const BUTTON_HREF = 'mailto:contact@powerupgamestudio.com';
    const BUTTON_IMG = '../../images/contact/cta-email.svg';
    const HEADER_TEXT = 'Contact';

    let bcgSource;
    if (this.state.width < breakpoints.third) {
      bcgSource = '../../images/contact/bcg-below-640.jpg';
    } else if (this.state.width < breakpoints.fourth) {
      bcgSource = '../../images/contact/bcg-640-960.jpg';
    } else if (this.state.width < breakpoints.desktop) {
      bcgSource = '../../images/contact/bcg-960-1280.jpg';
    } else {
      bcgSource = '../../images/contact/bcg-over-1280.jpg';
    }

    return (
      <div className="component contact-component">
        <Parallax strength={500}>
          <Background>
            <img alt="Background" src={bcgSource} />
          </Background>

          <LogoComponent />
          <HeaderComponent headerText={HEADER_TEXT} />
          <TrianglesTitleComponent titleText={TRIANGLE_TITLE} />

          <div className="contact-address">
            <div>
              <div className="address">
                <p><span>Address:</span></p>
                <p>ul. Bora Komorowskiego 19B</p>
                <p>80-462 Gdańsk</p>
                <p>Poland</p>
              </div>
              <div className="press">
                <p><span>Press / Business contact</span></p>
                <p>contact@powerupgamestudio.com</p>
              </div>
            </div>
            <EmailButtonComponent btnAddress={BUTTON_HREF} btnImg={BUTTON_IMG} />
          </div>
        </Parallax>
      </div>
    );
  }
}

Contact.displayName = 'ContactContact';
Contact.propTypes = {};
Contact.defaultProps = {};

export default Contact;
