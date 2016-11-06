import React from 'react';
import './TrianglesTitleComponent.scss';
// import cssmodules from 'react-css-modules';
// import styles from './TrianglesTitleComponent.scss';

// @cssmodules(styles)
class TrianglesTitleComponent extends React.Component {

  // propTypes: {
  //   titleText: React.PropTypes.string.isRequired
  // }

  render() {
    return (
      <div className="triangles-component">
        <img alt="triangles" className="img-left" src="../../images/triangles-left.svg" />
        <span>{this.props.titleText}</span>
        <img alt="triangles" className="img-right" src="../../images/triangles-right.svg" />
      </div>
    );
  }
}

TrianglesTitleComponent.displayName = 'SharedTrianglesTitleComponent';
TrianglesTitleComponent.defaultProps = {};
TrianglesTitleComponent.propTypes = {
  titleText: React.PropTypes.string.isRequired
};

export default TrianglesTitleComponent;
