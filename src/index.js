import React from 'react';
import ReactDOM from 'react-dom';

import Grid from './grid.js';
import Fader from './fader.js';
import './styles.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

function Reset(props) {
  return (
    <button
      className="reset"
      onClick={props.onClick}
    >
      {props.name}
    </button>
  )
}

class Square extends React.Component {
  render() {
    let v = this.props.value;
    return ( 
      <button 
          className={this.props.className}
          style={this.props.style}
          onClick={ this.props.onClick }
      >
        {v}
      </button>
    )
  }
}

class Board extends React.Component {
  /*
  constructor(props) {
    super(props);
  }
  */

  static GetRgb(s) {
    const v = 256 - 256*s/100;
    return `rgb(${v},${v},${v})`;
  }

  renderSquare(x, y) {
    const key = x + '.' + y;
    const sq = this.props.grid.get(x,y);
    const bg = Board.GetRgb(sq.shade);
    const bgStyle = { 
      background: bg,  
    }
    // TODO: change square shading from 0-100 based on sq.shade
    return (
      <Square 
        key={key} x={x} y={y} value={sq.val}
        style={bgStyle}
        onClick={() => this.props.sqClicked(x,y)} 
      >
        {sq.val}
      </Square>
    )
  }

  renderRow(y) {
    //console.log(` renderRow(${y})`);
    let squares = this.props.grid.grid[y].map((v,x)=>{ return this.renderSquare(x,y) });
    return (
      <div className="board-row" key={y}>
        {squares}
      </div>
    )
  }

  renderBoard() {
    console.log(`renderBoard()`);
    let board = this.props.grid.grid.map((v,y)=>{ return this.renderRow(y) });
    return (
      <div className="board">
        {board}
      </div>
    )
  }

  render() {
    console.log(`Board.render()`);
    return (
      <div>
        {this.renderBoard()}
      </div>
    );
  }


} // End Board

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.fadeRate = 34;
    const run = 0;
    this.state = this.buildState(this.props.cols, this.props.rows, run);
    this.state.grid.logGrid();
  }

  buildState(x, y, run) {
    console.log(`Building State for ${x}x${y}, run: ${run}`);
    // Build x,y array with null fill
    let grid = new Grid(x,y);

    const state = 
      { 
        grid: grid,
        found: false,
        run: run,
        turn: 1
      };
    return state;
  }

  endGame() {
    this.setState( ({found}) => ({found: true}) );
  }

  reset() {
    console.log(`  # reset() called #`);
    const run = this.state.run + 1;
    let state = this.buildState(this.props.cols, this.props.rows, run);
    state.found = false;
    this.setState(state);
  }

  render() {
    //const run = this.state.run;
    const w = this.state.grid.wumpus;
    const status = `Run #${this.state.run}, Turn #${this.state.turn}, Wumpus @ ${w.x},${w.y}`;
    return (
      <div className="game">
        <div className="game-board">
          <div className="status">{status}</div>
          <Board grid={this.state.grid} sqClicked={(x,y) => this.sqClicked(x,y)}/>
        </div>
        <div className="controls">
          <Reset name={this.state.found ? "New Game" : "Reset"} onClick={() => this.handleReset()} />
        </div>
        <div className="game-info">
          <div>{}</div>
          <ol>{}</ol>
        </div>
      </div>
    );
  }

  handleReset() {
    console.log(`## handleReset: clicked ##`);
    this.reset();
  }
  
  sqClicked(x,y) {
    if( this.state.found ) {
      console.log( `--click after found, no action--`);
      return;
    }
    console.log( `Clicked: ${x},${y}`)
    const w = this.state.grid.wumpus;
    if( w.x === x && w.y === y ) {
      console.log( '***** You found him! ****');
      // TODO: something sexier than 0 for Wumpus found
      this.state.grid.setClicked(x,y);
      this.endGame();
      return;
    }
    this.state.grid.setClicked(x,y);
    // Move the wumpus
    // Increment turn #
    const turn = this.state.turn + 1;
    const state = 
      { 
        grid: this.state.grid, 
        turn: turn
      };
    this.setState(state);
    // Fade all clicked squares in advance for next turn
    this.state.grid.fade(this.fadeRate);
    this.state.grid.logGrid();
  }
}

/*** Helper functions ***/


/*** Reactivate ***/

ReactDOM.render(
  <React.StrictMode>
    <Game rows="24" cols="24" />
  </React.StrictMode>,
  document.getElementById('root')
);

