import React from 'react';
import './TeamMemberComponent.scss';
// import cssmodules from 'react-css-modules';
// import styles from './TeamMemberComponent.scss';

// @cssmodules(styles)
class TeamMemberComponent extends React.Component {

  render() {
    return (
      <div className="teamMember-component">
        <img alt="Team Member" src={this.props.data.imgSrc} />
        <p>{this.props.data.name}</p>
        <p>{this.props.data.text}</p>
      </div>
    );
  }
}

TeamMemberComponent.displayName = 'SharedTeamMemberComponent';
TeamMemberComponent.propTypes = {
  data: React.PropTypes.object.isRequired
};
TeamMemberComponent.defaultProps = {};

export default TeamMemberComponent;
