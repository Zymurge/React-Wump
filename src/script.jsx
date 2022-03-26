import ReactHtmlParser from "https://cdn.skypack.dev/react-html-parser@2.0.2";

class Square extends React.Component {
  render() {
    let v = this.props.value;
    console.log("^^ Square render ^^");
    //console.log(`Render Square: ${this.props.x},${this.props.y} value=${v}`);
    return <button className="square">{v}</button>;
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.rows = props.rows;
    this.cols = props.cols;
    console.log("Building Board " + this.cols + "x" + this.rows);
    // Build x,y array with null fill
    this.grid = Array.from({ length: this.rows }, () =>
      Array.from({ length: this.cols }, () => null)
    );
    // Assign target in random square
    let rr = Math.floor(Math.random() * this.rows);
    let rc = Math.floor(Math.random() * this.cols);
    this.grid[rr][rc] = "X";
    logGrid(this.grid);
  }

  renderRows(rows, cols) {
    let ret = "";
    for (let y = 0; y < rows; y++) {
      ret += '<div className="board-row">\n';
      for (let x = 0; x < cols; x++) {
        let v = this.grid[y][x];
        let l = `  <Square x="${x}" y="${y}" value="${v}" />\n`;
        ret += l;
      }
      ret += "</div>\n";
    }

    return ret;
  }

  render() {
    const status = "Click a square";
    //const board = this.renderRows(this.rows, this.cols);
    const board = "<h1>Some text</h1>";

    return (
      <div>
        <div className="status">{status}</div>
        {ReactHtmlParser(board)}
        {board}
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board rows="1" cols="2" />
        </div>
        <div className="game-info">
          <div>{}</div>
          <ol>{}</ol>
        </div>
      </div>
    );
  }
}

function logGrid(grid) {
  console.log("Grid dump:");
  grid.forEach((row) => {
    let line = "   -- ";
    row.forEach((sq) => {
      line += sq + " ";
    });
    line += "--";
    console.log(line);
  });
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
