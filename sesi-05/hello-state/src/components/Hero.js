import React from "react";
import PropTypes from "prop-types";

class HeroName extends React.Component {
  render() {
    return <h3>{this.props.name}</h3>;
  }
}

HeroName.PropTypes = {
  name: PropTypes.string,
};

class Hero extends React.Component {
  // step two
  // constructor() {
  //   super();
  //   this.state = {
  //     name: "Hercules",
  //   };
  // }

  // step three

  constructor() {
    super();
    this.state = {
      name: true,
    };
  }
  render() {
    return (
      <>
        <HeroName name={this.state.name} />
      </>
    );
  }
}
export default Hero;
