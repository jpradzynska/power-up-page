import React from 'react';
import MainMenuPc from './shared/MainMenu_PC.react';
import MainMenuMobile from './shared/MainMenu_mobile.react';
import Footer from './shared/Footer.react';

import './App.scss';

class AppComponent extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <MainMenuMobile />
        <MainMenuPc />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

AppComponent.propTypes = {
  actions: React.PropTypes.object.isRequired,
  children: React.PropTypes.node
};

export default AppComponent;
