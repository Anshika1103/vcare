import React from "react";

class nav extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default nav;
