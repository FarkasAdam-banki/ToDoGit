/*class Todo {
    constructor(name = "", state = 1) {
        this.name = name;
        this.state = state;
        this.subtasks = [];
        this.deadline = null;
        this.color = null;
    }

    addSubtask(subtask) {
        this.subtasks.push(subtask);
    }

    setDeadline(deadline) {
        this.deadline = deadline;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return `Todo: ${this.name}, State: ${this.state}, Subtasks: ${JSON.stringify(this.subtasks)}, Deadline: ${this.deadline}, Color: ${this.color}`;
    }
}
*/

class Todo {

    #name;
    #state;
    #subtask;
    #subtasks
    #deadline;
    #color;

    constructor(name,state,subtask,deadline,color) {
        this.setName(name);
        this.setState(state);
        this.setSubtask(subtask);
        this.subtasks = [];
        this.setDeadline(deadline);
        this.setColor(color);
        

        
        
    }

    addSubtask(subtask) {
        this.subtasks.push(subtask);
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

    getSubtask() {
        return this.#subtask;
    }

    setSubtask(subtask) {
        this.#subtask = subtask;
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
        return `Todo: ${this.name}, State: ${this.state}, Subtasks: ${JSON.stringify(this.subtasks)}, Deadline: ${this.deadline}, Color: ${this.color}`;
    }
}

