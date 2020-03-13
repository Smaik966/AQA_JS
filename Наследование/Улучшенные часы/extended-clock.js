var modInp = require("./clock.js");

class ExtendedClock extends modInp {
    constructor(param, precision = 1000) {
        super(param);
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

let ex = new ExtendedClock('h:m:s', 2000);

ex.start();