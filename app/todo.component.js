"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var todoComponent = (function () {
    function todoComponent() {
        this.newTodo = '';
        this.todos = [];
        this.size = 0;
    }
    todoComponent.prototype.addTodo = function () {
        this.duplicate = false;
        if (this.newTodo.length >= 1) {
            for (var i = 0; i <= this.todos.length; i++) {
                if (this.todos[i] === this.newTodo) {
                    this.duplicate = true;
                    alert("this task is alredy in your list");
                    this.newTodo = '';
                }
            }
            if (this.duplicate === false) {
                this.todos.push(this.newTodo);
                this.newTodo = '';
                this.sizeTodo();
            }
        }
        else {
            alert("please enter task.");
        }
    };
    todoComponent.prototype.sizeTodo = function () {
        this.size = this.todos.length;
    };
    todoComponent.prototype.deleteTodo = function (index) {
        this.todos.splice(index, 1);
        this.sizeTodo();
    };
    return todoComponent;
}());
todoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'todo',
        templateUrl: 'todoComponent.html'
    }),
    __metadata("design:paramtypes", [])
], todoComponent);
exports.todoComponent = todoComponent;
