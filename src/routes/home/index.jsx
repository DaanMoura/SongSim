import React, { Component } from 'react';
import { Link } from 'react-router';
import './style.css';
import octocat from '../../octocat.svg';

const LINKS = [
  {path: "/", name: "SongSim"},
  {path: "/about", name: "About"},
  {path: "/gallery", name: "Gallery"}
];

class Home extends Component {
  renderNavLink = (link) => {
    // I'm sure there's a better way to do this...
    const active = link.path === "/" ? 
        !LINKS.some((l) => 
            ( l.path !== "/" && this.props.location.pathname.startsWith(l.path))
        )
        : 
        this.props.location.pathname.startsWith(link.path)
    ;
    return (<li className={"navLink" + link.name + (active ? " active" : "")}
            key={link.name}
          >
            <Link to={link.path}>{link.name}</Link></li>);
  }
  render() {
    const links = LINKS.map(this.renderNavLink);
    return (
      <div className="App">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              {links}
              <li className="octo">
                <a title="Fork me on GitHub" 
                  href="https://github.com/colinmorris/SongSim"
                  target="_blank"
                >
                  <img alt="octocat" src={octocat} />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {this.props.children}

      </div>
    );
  }
}

export default Home;
