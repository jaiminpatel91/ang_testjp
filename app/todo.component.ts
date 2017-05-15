import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'todo',
	templateUrl: 'todoComponent.html'
})

export class todoComponent{ 
    newTodo: string;
    todos: any;
    todoObj: any;

    constructor(){
        this.newTodo = '';
        this.todos = [];
    }

    addTodo() {
        this.todoObj = {
            newTodo: this.newTodo,
            completed: false
        }
        this.todos.push(this.todoObj);
        this.newTodo = '';
    }

    deleteTodo(index) {
      this.todos.splice(index, 1);
    }
}