import React from 'react';
import './HeaderComponent.scss';
// import cssmodules from 'react-css-modules';
// import styles from './HeaderComponent.scss';

// @cssmodules(styles)
class HeaderComponent extends React.Component {

  render() {
    return (
      <div className="header-component">
        <p>{this.props.headerText}</p>
      </div>
    );
  }
}

HeaderComponent.displayName = 'SharedHeaderComponent';
HeaderComponent.propTypes = {
  headerText: React.PropTypes.string.isRequired
};
HeaderComponent.defaultProps = {};

export default HeaderComponent;
