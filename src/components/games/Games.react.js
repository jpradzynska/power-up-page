import React from 'react';
import { Parallax, Background } from 'react-parallax';
import ButtonComponent from '../shared/ButtonComponent.react';
import HeaderComponent from '../shared/HeaderComponent.react';
import LogoComponent from '../shared/LogoComponent.react';
import TrianglesTitleComponent from '../shared/TrianglesTitleComponent.react';
import './Games.scss';
// import cssmodules from 'react-css-modules';
// import styles from './Games.scss';

const breakpoints = {
  mobile: 0,
  third: 640,
  fourth: 960,
  desktop: 1280
};

// @cssmodules(styles)
class Games extends React.Component {

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
    const TRIANGLE_TITLE_1 = 'JUMPING JOE!';
    const TRIANGLE_TITLE_2 = 'ORBITRON ARCADE';
    const TRIANGLE_TITLE_3 = 'CONTACT';
    const BUTTON_HREF = '/contact';
    const BUTTON_IMG = '../../images/games/cta-contact.svg';
    const HEADER_TEXT = 'Releases';

    let bcgSource;
    if (this.state.width < breakpoints.third) {
      bcgSource = '../../images/about/bcg-below-640.jpg';
    } else if (this.state.width < breakpoints.fourth) {
      bcgSource = '../../images/about/bcg-640-960.jpg';
    } else if (this.state.width < breakpoints.desktop) {
      bcgSource = '../../images/about/bcg-960-1280.jpg';
    } else {
      bcgSource = '../../images/about/bcg-over-1280.jpg';
    }

    return (
      <div className="component games-component">
        <Parallax strength={500}>
          <Background>
            <img alt="Background" src={bcgSource} />
          </Background>

          <LogoComponent />
          <HeaderComponent headerText={HEADER_TEXT} />
          <p className="para1">Lorem Ipsum</p>
          <p className="para1">Lorem Ipsum</p>
          <p className="para1">Lorem Ipsum</p>
          <p className="para1">Lorem Ipsum</p>
          <p className="para1">Lorem Ipsum</p>
          <p className="para1">Lorem Ipsum</p>
          <p className="para1">Lorem Ipsum</p>
          <p className="para1">Lorem Ipsum</p>
          <br />
          <TrianglesTitleComponent titleText={TRIANGLE_TITLE_1} />
          <br />
          <p className="para1">Lorem Ipsum</p>
          <p className="para1">Lorem Ipsum</p>
          <p className="para1">Lorem Ipsum</p>
          <p className="para1">Lorem Ipsum</p>
          <p className="para1">Lorem Ipsum</p>
          <p className="para1">Lorem Ipsum</p>
          <p className="para1">Lorem Ipsum</p>
          <p className="para1">Lorem Ipsum</p>
          <br />
          <TrianglesTitleComponent titleText={TRIANGLE_TITLE_2} />
          <br />
          <p className="para1">Lorem Ipsum</p>
          <p className="para1">Lorem Ipsum</p>
          <p className="para1">Lorem Ipsum</p>
          <p className="para1">Lorem Ipsum</p>
          <p className="para1">Lorem Ipsum</p>
          <p className="para1">Lorem Ipsum</p>
          <p className="para1">Lorem Ipsum</p>
          <br />
          <TrianglesTitleComponent titleText={TRIANGLE_TITLE_3} />
          <ButtonComponent btnAddress={BUTTON_HREF} btnImg={BUTTON_IMG} />
          <p className="para1">Lorem Ipsum</p>
          <p className="para1">Lorem Ipsum</p>
          <p className="para1">Lorem Ipsum</p>
          <p className="para1">Lorem Ipsum</p>
          <p className="para1">Lorem Ipsum</p>
          <p className="para1">Lorem Ipsum</p>
        </Parallax>
      </div>
    );
  }
}

Games.displayName = 'GamesGames';
Games.propTypes = {};
Games.defaultProps = {};

export default Games;
