import React from 'react';
import NavLink from './NavLink.react';
import diamondImg from '../../images/power-up-diamond.svg';
import './MainMenu_PC.scss';
// import cssmodules from 'react-css-modules';
// import styles from './MainMenu_PC.scss';

// @cssmodules(styles)
class MainMenuPc extends React.Component {

  render() {
    return (
      <header className="mainMenuPCHeader">
        <div className="mainMenu leftMainMenu">
          <nav>
            <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </nav>
        </div>

        <div className="diamondMenuIcon">
          <img src={diamondImg} alt="power-up diamond"/>
        </div>

        <div className="mainMenu rightMainMenu">
          <nav>
            <li><NavLink to="/games">Games</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </nav>
        </div>
      </header>
    );
  }
}

MainMenuPc.displayName = 'SharedMainMenuPC';
MainMenuPc.propTypes = {};
MainMenuPc.defaultProps = {};

export default MainMenuPc;
