import React from "react";
import Card from "../Card";
import "./styles.css";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cards: [] };
  }

  handleClickAgregar = () => {
    this.setState({ cards: [...this.state.cards, <Card />] });
  };

  handleClickBorrar = () => {
    this.setState({
      cards: this.state.cards.slice(0, this.state.cards.length - 1),
    });
  };

  render() {
    return (
      <div className="layout">
        {this.state.cards.map((x) => {
          return x;
        })}
        <button className="button" onClick={() => this.handleClickAgregar()}>
          Agregar
        </button>
        <button className="button" onClick={() => this.handleClickBorrar()}>
          Borrar
        </button>
      </div>
    );
  }
}

export default Layout;
