import React from 'react';
import { layoutGenerator } from 'react-break';
import ButtonComponent from '../shared/ButtonComponent.react';
import HeaderComponent from '../shared/HeaderComponent.react';
import LogoComponent from '../shared/LogoComponent.react';
import './Home.scss';
// import cssmodules from 'react-css-modules';
// import styles from './Home.scss';

const layout = layoutGenerator({
  mobile: 0,
  desktop: 960
});

const OnMobile = layout.is('mobile');
const OnDesktop = layout.is('desktop');

// @cssmodules(styles)
class Home extends React.Component {

  render() {
    const BUTTON_HREF = '/games';
    const BUTTON_IMG = '../../images/home/cta-projects.svg';
    const HEADER_TEXT_1 = 'Pixel based lifeforms';
    const HEADER_TEXT_2 = 'Presented by';

    return (
      <div className="component home-component">
        <OnMobile>
          <div className="component mobile-comp">
            <LogoComponent />
            <HeaderComponent headerText={HEADER_TEXT_1} />
            <ButtonComponent btnAddress={BUTTON_HREF} btnImg={BUTTON_IMG}/>
          </div>
        </OnMobile>

        <OnDesktop>
          <div className="header1">
            <HeaderComponent headerText={HEADER_TEXT_1} />
          </div>

          <img alt="arrow" className="arrowDown" src="../../images/home/scroll.svg" />

          <div className="header2">
            <HeaderComponent headerText={HEADER_TEXT_2} />
          </div>

          <img alt="arrow" className="arrowDown" src="../../images/home/scroll.svg" />

          <div className="logo">
            <LogoComponent />
          </div>

          <div className="btn">
            <ButtonComponent btnAddress={BUTTON_HREF} btnImg={BUTTON_IMG}/>
          </div>
        </OnDesktop>
      </div>
    );
  }
}

Home.displayName = 'HomeHome';
Home.propTypes = {};
Home.defaultProps = {};

export default Home;
