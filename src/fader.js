export default class Fader {
    constructor(sr, sg, sb, er, eg, eb) {
        this.stR = sr;
        this.stG = sg;
        this.stB = sb;
        this.enR = er;
        this.enG = eg;
        this.enB = eb;
    }

    Color(shade) {
        r = this.enR + (this.enR-this.stR)*shade/100;
        g = this.enG + (this.enG-this.stG)*shade/100;
        b = this.enB + (this.enB-this.stB)*shade/100;
        return `rgb(${r},${g},${b})`
    }

}