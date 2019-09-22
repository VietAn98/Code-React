import React from "react";
import Square from "./Square";

class Board extends React.Component {
    renderSquare = i => {
      return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onHandleClick(i)}
        />
      );
    };
  
    render() {
      let items = [];
      let listItems = [];
      for (let i = 0; i < 20; i++) {
        for (let j = 20 * i; j < 20 * (i + 1); j++) {
          items.push(this.renderSquare(j));
        }
        listItems.push(<div className="board-row">{items}</div>);
        items = [];
      }
  
      return (
        <div>
          <div>{listItems}</div>
        </div>
      );
    }
  }
  export default Board;
