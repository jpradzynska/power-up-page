import React from 'react';
import './LogoComponent.scss';
// import cssmodules from 'react-css-modules';
// import styles from './LogoComponent.scss';

// @cssmodules(styles)
class LogoComponent extends React.Component {

  render() {
    return (
      <div className="logo-component">
        <img alt="Power Up Logo" src="../../images/power-up-logo.svg" />
      </div>
    );
  }
}

LogoComponent.displayName = 'SharedLogoComponent';
LogoComponent.propTypes = {};
LogoComponent.defaultProps = {};

export default LogoComponent;
