import React from 'react';
import './Footer.scss';
// import cssmodules from 'react-css-modules';
// import styles from './Footer.scss';

// @cssmodules(styles)
class Footer extends React.Component {

  render() {
    return (
      <footer className="footer">
        <span>Copyright&nbsp;&copy;&nbsp;2016 Power&nbsp;Up&nbsp;Game&nbsp;Studio</span>
      </footer>
    );
  }
}

Footer.displayName = 'SharedFooter';
Footer.propTypes = {};
Footer.defaultProps = {};

export default Footer;
