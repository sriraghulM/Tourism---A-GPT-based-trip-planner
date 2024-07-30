import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      isLoggedIn: localStorage.getItem("isLoggedIn") === "true",
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({ clicked: !prevState.clicked }));
  };

  handleLogout = () => {
    // Update state and local storage
    this.setState({ isLoggedIn: false });
    localStorage.setItem("isLoggedIn", "false");
    localStorage.removeItem("userId"); // Optionally remove user ID from local storage
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu-active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <button onClick={this.state.isLoggedIn ? this.handleLogout : undefined}>
              {this.state.isLoggedIn ? (
                <Link to="/Login">Log out</Link>
              ) : (
                <Link to="/Login">Sign up</Link>
              )}
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
