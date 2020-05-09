import * as React from 'react';
import { slide as Menu } from 'react-burger-menu';

require('./styles/index.css');

export class RSidebar extends React.Component {
  render(){
    return (
      <div>
        <Menu>
          <div className="text-center">
            <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
            <h1 id="colorlib-logo"><a href="index.html">Sandra Abago</a></h1>
            <h4>Engineer Extraordinaire</h4>
            <span className="email"><i className="icon-mail"></i> sandra.abago@gmail.com</span>
          </div>
          <div id="navbar" className="collapse">
        
              {/* <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li> */}
              <a className="menu-item" href="/">Introduction</a> <br />
              <a className="menu-item" href="#about">About</a> <br />
              <a className="menu-item" href="#" data-nav-section="projects">Projects</a> <br />
              <a className="menu-item"href="#" data-nav-section="blog">Blog</a>< br/>
              <a className="menu-item" href="#timeline" data-nav-section="timeline">Timeline</a>< br/>
          </div>
          {/* <a className="menu-item" href="/">
            Home
          </a>

          <a className="menu-item" href="/laravel">
            Laravel
          </a>

          <a className="menu-item" href="/angular">
            Angular
          </a>

          <a className="menu-item" href="/react">
            React
          </a>

          <a className="menu-item" href="/vue">
            Vue
          </a>

          <a className="menu-item" href="/node">
            Node
          </a> */}
        </Menu>
      </div>
);}
}
/* <nav id="colorlib-main-menu" role="navigation" className="navbar">

</nav> */
    