import React from "react";
// Entendimento básico de componentes de classes
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Teste State Objeto",
    };
  }
  render() {
    return <h1>{this.state.message}</h1>;
  }
}

export default Test;
