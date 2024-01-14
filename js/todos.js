class Todo {

    #name;
    #state;
    #subtasks;
    #deadline;
    #color;

    constructor(name, state, deadline, color) {
        this.setName(name);
        this.setState(state);
        this.#subtasks = []; 
        this.setDeadline(deadline);
        this.setColor(color);
    }

    addSubtask(subtask) {
        this.#subtasks.push(subtask);
    }

    getSubtasks() {
        return this.#subtasks;
    }
   
    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name= name;
    }

    getState() {
        return this.#state;
    }

    setState(state) {
        this.#state = state;
    }

    getDeadline() {
        return this.#deadline;
    }

    setDeadline(deadline) {
        this.#deadline = deadline;
    }

    getColor() {
        return this.#color;
    }

    setColor(color) {
        this.#color = color;
    }

    toString() {
        return `Todo: ${this.#name}, State: ${this.#state}, Subtasks: ${JSON.stringify(this.#subtasks)}, Deadline: ${this.#deadline}, Color: ${this.#color}`;
    }
}