"use strict";

const TODO_STATUS = {
    OPEN: "OPEN",
    CLOSED: "CLOSED"
};

export const Todos = class {

    constructor(todos = []) {
        this.todos = todos;
    }

    add(text) {
        this.todos.unshift(
            {
                text,
                status: TODO_STATUS.OPEN
            }
        )
    }

    remove(index) {
        const deleteCount = 1;
        this.todos.splice(index, deleteCount);
    }

    changeTodoText(index, newText) {
        if (newText.length > 0) 
            this.todos[index].text = newText; 
    }

    toggleStatus(index) {
        const currentTodo = this.todos[index];
        currentTodo.status === TODO_STATUS.OPEN 
            ? currentTodo.status = TODO_STATUS.CLOSED
            : currentTodo.status = TODO_STATUS.OPEN
    }

    serialize() {
        return JSON.stringify(
            this.todos
        );
    }
}