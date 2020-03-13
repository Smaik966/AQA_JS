var modInp = require("./clock.js");

class ExtendedClock extends modInp {
    constructor({template, precision = 1000}) {
        super({ template });
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }

    stop(){
        super.stop();
    }


}

let ex = new ExtendedClock({ template: 'h:m:s', precision : 10000});
ex.start();