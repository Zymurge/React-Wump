//import {randomInt} from 'mathjs';

export default class Grid {
    constructor(x,y,ran = RandomInt){
        //super();
        this.x = x;
        this.y = y;
        this.ran = ran;
        this.build();
        this.wumpus = this.initWumpus();
        this.last = null;
    }

    build() {
        console.log(`Building Grid ${this.x}x${this.y}`);
        // Build x,y array with null fill
        this.grid = Array.from(
            { length: this.y }, 
            () => Array.from(
                { length: this.x },
                () => { return { shade: 100, val: null } }
            )
        );
    }

    fade(rate) {
        this.grid.forEach((row) => {
            row.forEach((sq) => {
                sq.shade = Grid.FadeVal(sq.shade, rate);
            });  
        });      
    }
    
    get(x,y) {
        if( 0 <= x < this.x &&  0 <= y < this.y) {
            return this.grid[y][x];
        }        
        // fall through error
        return null;
    }

    initWumpus() {
        // Assign target in random square
        let rr = this.ran(this.y);
        let rc = this.ran(this.x);
        this.grid[rr][rc].val = "X";
        return { x: rc, y: rr }; // as x,y
    }

    logGrid() {
        console.log("Grid dump:");
        this.grid.forEach((row) => {
            let line = "   -- ";
            row.forEach((sq) => {
                line += (sq.shade < 100 ? sq.val : "#" ) + " ";
            });
            line += "--";
            console.log(line);
        });
    }

    /**
     * Moves dist times in a random direction for each. If move hits wall, it is a non-move.
     * @param {*} dist 
     */
    moveWumpus(dist) {
        for( let i=Math.floor( dist/2 ); i > 0; i-- ) {
            let dx = Math.floor( Math.random()*3 ) - 1;
            let dy = Math.floor( Math.random()*3 ) - 1;
            console.log(`-- ${i}: wumpus moving ${dx},${dy} from ${this.wumpus.x},${this.wumpus.y}`);
            this.wumpus.x += dx;
            this.wumpus.x = this.wumpus.x < 0 ? 0 : this.wumpus.x;
            this.wumpus.x = this.wumpus.x >= this.x ? this.x-1 : this.wumpus.x;
            this.wumpus.y += dy;
            this.wumpus.y = this.wumpus.y < 0 ? 0 : this.wumpus.y;
            this.wumpus.y = this.wumpus.y >= this.y ? this.y-1 : this.wumpus.y;
        }

    }

    setClicked(x,y) {
        // calc distance
        let distance = Math.floor( Math.sqrt( (this.wumpus.x - x)**2 + (this.wumpus.y - y)**2 ) );
        // Toggle the square appearance
        this.grid[y][x].val = distance;
        this.grid[y][x].shade = 0;
        // if not the first move, determine distance from previous distance and move wumpus accordingly
        if( this.last ) {
            const distance = Math.floor( Math.sqrt( (this.last.x - x)**2 + (this.last.y - y)**2 ) );
            this.last = { x: x, y: y, dist: distance };
            console.log(`The distance between clicks is ${this.last.dist}`);
            // TODO: Move the wumpus
            this.moveWumpus(this.last.dist);
        } else {
            this.last = { x: x, y: y, dist: 0 };
            console.log('First move, no previous distance');
        }
    }

    setShade(x,y,s) {
        this.grid[y][x].shade = s;       
    }

    static FadeVal(curr,rate) {
        const n = curr + rate;
        return n < 100 ? n : 100;
    }


}

function RandomInt(max) {
    return Math.floor(Math.random() * max);
}
