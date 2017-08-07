import React from 'react';
 
/**
 * A counter button: tap the button to increase the count.
 */
class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      rowOne: null,
      rowTwo: null,
      rowThree: null,
      rowFour: null,
      rowFive: null,
      rowSix: null,
      rowSeven: null,
      rowEight: null,
      rowNine: null,
      playerOneTurn: true,
      playerTwoTurn: false,
    };
    this.placeXO = this.placeXO.bind(this);
  }

  placeXO() {
    this.setState({
      rowOne: 'X'
    })
  }
 
  render() {
    return (
      <div>
        <h1 id="header">TIC TAC TOE</h1>
        <table id='board'>
          <tbody>
            <tr className='row'> 
              <td onClick={this.placeXO}>{this.state.rowOne}</td>
              <td></td> 
              <td></td>
            </tr>
            <tr className='row'>
              <td></td>
              <td></td> 
              <td></td>
            </tr>
            <tr className='row'>
              <td></td>
              <td></td> 
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default Board;