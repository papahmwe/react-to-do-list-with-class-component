import React from "react";

class Header extends React.Component {
  render() {
    return (
      <h1 className="text-5xl font-bold text-center tracking-wider text-red-500 drop-shadow-lg">
        {this.props.title}
      </h1>
    );
  }
}

export default Header;
