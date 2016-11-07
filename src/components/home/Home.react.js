import React from 'react';
import { layoutGenerator } from 'react-break';
import { Element, scroller } from 'react-scroll';
import ButtonComponent from '../shared/ButtonComponent.react';
import HeaderComponent from '../shared/HeaderComponent.react';
import LogoComponent from '../shared/LogoComponent.react';
import './Home.scss';

const layout = layoutGenerator({
  mobile: 0,
  desktop: 960
});

const OnMobile = layout.is('mobile');
const OnDesktop = layout.is('desktop');

class Home extends React.Component {

  handleScroll(target) {
    const documentElement = document.documentElement;
    const body = document.getElementsByTagName('body')[0];
    const height = window.innerHeight || documentElement.clientHeight || body.clientHeight;
    scroller.scrollTo(target, {duration: 1500, delay: 100, smooth: true, offset: -height / 2});
  }

  render() {
    const BUTTON_HREF = '/games';
    const BUTTON_IMG = '../../images/cta-projects.svg';
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

          <img alt="arrow" className="arrowDown" onClick={() => { this.handleScroll('target1'); }} src="../../images/home/scroll.svg" />

          <div className="header2">
            <HeaderComponent headerText={HEADER_TEXT_2} />
          </div>

          <Element name="target1">
            <img alt="arrow" className="arrowDown" onClick={() => { this.handleScroll('target2'); }} src="../../images/home/scroll.svg" />
          </Element>

          <div className="logo">
            <LogoComponent />
          </div>

          <div className="btn">
            <Element name="target2">
              <ButtonComponent btnAddress={BUTTON_HREF} btnImg={BUTTON_IMG}/>
            </Element>
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
