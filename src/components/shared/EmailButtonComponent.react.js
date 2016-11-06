import React from 'react';
import './ButtonComponent.scss';
// import cssmodules from 'react-css-modules';
// import styles from './ButtonComponent.scss';

// @cssmodules(styles)
class EmailButtonComponent extends React.Component {

  render() {
    return (
      <div className="button-component">
        <a href={this.props.btnAddress} title="Contact us">
          <img alt="e-mail button" src={this.props.btnImg} />
        </a>
      </div>
    );
  }
}

EmailButtonComponent.displayName = 'SharedButtonComponent';
EmailButtonComponent.propTypes = {
  btnAddress: React.PropTypes.string.isRequired,
  btnImg: React.PropTypes.string.isRequired
};
EmailButtonComponent.defaultProps = {};

export default EmailButtonComponent;
