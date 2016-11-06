import React from 'react';
import { Link } from 'react-router';
import './ButtonComponent.scss';
// import cssmodules from 'react-css-modules';
// import styles from './ButtonComponent.scss';

// @cssmodules(styles)
class ButtonComponent extends React.Component {

  render() {
    return (
      <div className="button-component">
        <Link to={this.props.btnAddress}>
          <img alt="button" src={this.props.btnImg} />
        </Link>
      </div>
    );
  }
}

// ButtonComponent.displayName = 'SharedButtonComponent';
ButtonComponent.propTypes = {
  btnAddress: React.PropTypes.string.isRequired,
  btnImg: React.PropTypes.string.isRequired
};
// ButtonComponent.defaultProps = {};

export default ButtonComponent;
