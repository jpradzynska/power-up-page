import React from 'react';
import NavLink from './NavLink.react';
import './MainMenu_mobile.scss';
// import cssmodules from 'react-css-modules';
// import styles from './MainMenu_mobile.scss';

// @cssmodules(styles)
class MainMenuMobile extends React.Component {

  handleSlideMainMenu(e) {
    const menuContent = e.target.closest('.mainMenuLabel').nextElementSibling;
    if (menuContent.classList.contains('mainMenuOpen')) {
      menuContent.classList.remove('mainMenuOpen');
    } else {
      menuContent.classList.add('mainMenuOpen');
    }
  }

  handleHideMainMenu(e) {
    const menuContent = e.currentTarget;
    if (menuContent.classList.contains('mainMenuOpen')) {
      menuContent.classList.remove('mainMenuOpen');
    }
  }

  render() {
    const mainMenuIcon = '\u2630';
    return (
      <header className="mainMenuMobileHeader">
        <div className="mainMenuLabel">
          <div className="mainMenuImg">
            <img alt="Power Up Logo" src="../../images/power-up-logo.svg" />
          </div>
          <div className="mainMenuBtn">
            <span onClick={e => this.handleSlideMainMenu(e)}>{mainMenuIcon}</span>
          </div>
        </div>
        <div className="mainMenuContent" onClick={e => this.handleHideMainMenu(e)}>
          <nav>
            <li><span><NavLink to="/" onlyActiveOnIndex>Home</NavLink></span></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/games">Games</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </nav>
        </div>
      </header>
    );
  }
}

MainMenuMobile.displayName = 'SharedMainMenuMobile';
MainMenuMobile.propTypes = {};
MainMenuMobile.defaultProps = {};

export default MainMenuMobile;
