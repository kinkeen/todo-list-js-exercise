// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`)
    },
    completeTask: function() {
      this.complete = true;
    }
  };
  return task;
}
// DRIVER CODE BELOW
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

console.log ("---0---")
console.log(tasks);
console.log ("---1---")
console.log(tasks[0].title);
console.log ("---2---")
console.log(tasks[0].description);
console.log ("---3--")
console.log(tasks[0].logTaskState());
