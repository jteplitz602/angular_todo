var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var todo_list_1 = require("./todo-list");
var add_item_1 = require("./add-item");
var Todo = (function () {
    function Todo() {
    }
    Todo = __decorate([
        angular2_1.Component({
            selector: "todo"
        }),
        angular2_1.View({
            templateUrl: "views/todo.html",
            directives: [todo_list_1.TodoList, add_item_1.AddItem]
        }), 
        __metadata('design:paramtypes', [])
    ], Todo);
    return Todo;
})();
angular2_1.bootstrap(Todo);
