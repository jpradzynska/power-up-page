import React from 'react';
import './FactComponent.scss';
// import cssmodules from 'react-css-modules';
// import styles from './FactComponent.scss';

// @cssmodules(styles)
class FactComponent extends React.Component {

  render() {
    return (
      <div className="fact-component">
        <img alt="Team Member" src={this.props.data.imgSrc} />
        <p>{this.props.data.title}</p>
        {this.props.children}
      </div>
    );
  }
}

FactComponent.displayName = 'SharedFactComponent';
FactComponent.propTypes = {
  children: React.PropTypes.node,
  data: React.PropTypes.object.isRequired
};
FactComponent.defaultProps = {};

export default FactComponent;
