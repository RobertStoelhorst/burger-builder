import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  // constructor(porps) {
  //     super(props);
  //     this.state = {...}
  // }
  state = {
    ingriedients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2,
    },
  };

  render() {
    return (
      <Aux>
        <Burger ingriedients={this.state.ingriedients} />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
