import React from 'react';
import { Link } from 'react-router';
import './NavLink.scss';

class NavLink extends React.Component {

  render() {
    return <Link {...this.props} className="mainMenuLink" activeClassName="active"/>;
  }
}

NavLink.displayName = 'SharedNavLink';
NavLink.propTypes = {};
NavLink.defaultProps = {};

export default NavLink;
