import React from 'react';
import { NavLink } from 'react-router-dom';

import * as routes from '@app-constants/routes';

export class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  toggleNav() {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen };
    });
  }

  closeNav() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const renderTrigger = () => {
      if (this.state.isOpen) {
        return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon--align_middle" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </svg>;
      }

      return <svg xmlns="http://www.w3.org/2000/svg" className="icon icon--align_middle" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
      </svg>;
    };

    return <React.Fragment>
      <button className={`nav-trigger hidden-sm ${this.state.isOpen ? 'nav-trigger--active' : ''}`} type="button" onClick={this.toggleNav}>
        {renderTrigger()}
      </button>
      <nav className={`nav ${this.state.isOpen ? 'nav--active' : ''}`}>
        <NavLink className="nav__link" activeClassName="nav__link--active" to={routes.HOME} exact onClick={this.closeNav}>Home</NavLink>
        <NavLink className="nav__link" activeClassName="nav__link--active" to={routes.ABOUT} onClick={this.closeNav}>About</NavLink>
        <a className="nav__link">Create photograph</a>
        <NavLink className="nav__link" activeClassName="nav__link--active" to={routes.DASHBOARD} onClick={this.closeNav}>Dashboard</NavLink>
      </nav>
      <div className={`nav-overlay ${this.state.isOpen ? 'nav-overlay--active' : ''}`} onClick={this.toggleNav}></div>
    </React.Fragment>;
  }
}

export default Nav;
