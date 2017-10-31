interface Todolist
{
    input:string;
    status:number;
}

class Todo
{
    inputs: Todolist[] = [];
    completed: Todolist[] = [];
    deleted: Todolist[] = [];

     constructor(value : Todolist[], completed: Todolist[]) {
         this.inputs = value;
         this.completed = completed;
         this.deleted = [];
     }

    add(list: Todolist)
    {
        this.inputs.push(list);
        return this.inputs;
    }
     display(): Todolist[]
     {
         return this.inputs;
     }

     elementAtIndex(index: number) {
        return this.inputs[index];
     }

     listLength() {
         return this.inputs.length;
     }

     updateElementTodo(newValue: any) {
        this.inputs[newValue["index"]] = newValue["newValue"];
     }

     addItem(input: Todolist) {
        return this.add(input);
     }

     displayItem(input: Todolist) {
         return this.display();
     }

     findElement(index: number) {
        return this.elementAtIndex(index);
     }

     remove (index: number) {
        return this.inputs.splice(index,1);
     }

     removeItem(index: number) {
         let valueToDelete = this.findElement(index);
         valueToDelete.status = 2;
         this.deleted.push(valueToDelete);
         this.remove(index);

         return {
            newInput: this.inputs,
            deleted: this.deleted
         };
     }

     updateElememnt(valueToUpdate: any, index: any) {
         return this.updateElementTodo({
            newValue:valueToUpdate, index:index
         });
     }

     completeItem(index: number) {
        let valueToComplete = this.findElement(index);
        valueToComplete.status = 1;
        this.completed.push(valueToComplete);
        this.remove(index);
        return {
            newInput: this.inputs,
            complted: this.completed
        };
     }

     getListLength() {
         return this.listLength();
     }

}

var list = new Todo([], []);





