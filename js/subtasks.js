
/* class Subtask {
    constructor(name = "", state = 1) {
        this.name = name;
        this.state = state;
    }

    toString() {
        return `Subtask: ${this.name}, State: ${this.state}`;
    }
}
*/

class Subtask {

    #Sname
    #Sstate

    constructor(Sname, Sstate) {
        this.setSName(Sname);
        this.setSState(Sstate);
    }

    // Getterek és setterek
    getSName() {
        return this.#Sname;
    }

   setSName(Sname) {
        this.#Sname = Sname;
    }

    getSState() {
        return this.#Sstate;
    }

    setSState(Sstate) {
        this.#Sstate = Sstate;
    }

    toString() {
        return `Subtask: ${this.getSName()}, State: ${this.getSState()}`;
    }
}
