class Subtask {

    #Sname
    #Sstate

    constructor(Sname, Sstate) {
        this.setSName(Sname);
        this.setSState(Sstate);
    }


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
