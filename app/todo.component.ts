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
    size: any;
    date: any;
    duplicate: Boolean;

    constructor(){
        this.newTodo = '';
        this.todos = [];
        this.size = 0; 
    }

    addTodo() {
        this.duplicate = false;
        if(this.newTodo.length >= 1){
        for(let i=0; i<=this.todos.length; i++){
            if(this.todos[i] === this.newTodo){
                this.duplicate = true;
                alert("this task is alredy in your list");
                this.newTodo = '';
            }
        }
        if(this.duplicate === false){
                this.todos.push(this.newTodo);
                this.newTodo = '';
                this.sizeTodo(); 
        }          
        }
        else{
            alert("please enter task.");
        }
        
    }
    sizeTodo() {
        this.size = this.todos.length;
    }
    
    deleteTodo(index) {
      this.todos.splice(index, 1);
      this.sizeTodo();
    }
}