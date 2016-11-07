import React from 'react';
import './HeaderComponent.scss';

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
