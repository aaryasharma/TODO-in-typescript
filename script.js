var Todo = /** @class */ (function () {
    function Todo(value, completed) {
        this.inputs = [];
        this.completed = [];
        this.deleted = [];
        this.inputs = value;
        this.completed = completed;
        this.deleted = [];
    }
    Todo.prototype.add = function (list) {
        this.inputs.push(list);
        return this.inputs;
    };
    Todo.prototype.display = function () {
        return this.inputs;
    };
    Todo.prototype.elementAtIndex = function (index) {
        return this.inputs[index];
    };
    Todo.prototype.listLength = function () {
        return this.inputs.length;
    };
    Todo.prototype.updateElementTodo = function (newValue) {
        
        this.inputs[newValue["index"]] = newValue["newValue"];
    };
    Todo.prototype.addItem = function (input) {
        return this.add(input);
    };
    Todo.prototype.displayItem = function (input) {
        return this.display();
    };
    ;
    Todo.prototype.findElement = function (index) {
        return this.elementAtIndex(index);
    };
    ;
    Todo.prototype.remove = function (index) {
        return this.inputs.splice(index, 1);
    };
    Todo.prototype.removeItem = function (index) {
        var valueToDelete = this.findElement(index);
        valueToDelete.status = 2;
        this.deleted.push(valueToDelete);
        this.remove(index);
        return {
            newInput: this.inputs,
            deleted: this.deleted
        };
    };
    Todo.prototype.updateElememnt = function (valueToUpdate, index) {

        return this.updateElementTodo({
            newValue: valueToUpdate, index: index
        });
    };
    Todo.prototype.completeItem = function (index) {
        var valueToComplete = this.findElement(index);
        valueToComplete.status = 1;
        this.completed.push(valueToComplete);
        this.remove(index);
        return {
            newInput: this.inputs,
            complted: this.completed
        };
    };
    Todo.prototype.getListLength = function () {
        return this.listLength();
    };
    return Todo;
}());
var list = new Todo([], []);
