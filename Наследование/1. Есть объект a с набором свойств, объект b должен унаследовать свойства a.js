class a {
    constructor(name) {
        this.name = name;
    }

    showName(){
        console.log(this.name);
    }
}

class b extends a {
    constructor(name) {
        super(name);
    }

    showName() {
        super.showName();
    }
}


let A = new a("Объект a");

let B = new b("Объект b");

A.showName();
B.showName();