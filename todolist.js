var todos = ["Buy new turtle"];
//added below line/end line for chrome browser not booting html properly
window.setTimeout(function() {


var input = prompt("What would you like to do?");

while(input !== "quit") {

	if(input === "list") {
	listTodos();
	} else if(input === "new"){
	addTodo();
	} else if(input === "delete") {
	removeTodo();
	}
	input = prompt("What would you like to do?");

}
console.log("ok, you quit the app");


function listTodos(){
	console.log("**********");
	todos.forEach(function(todo, i){
		console.log(i + ": " + todo);
	});
	console.log("**********");
}

function addTodo(){
	var newTodo = prompt("enter new todo");
	todos.push(newTodo);
	console.log("Added Todo");
}

function removeTodo(){
	var index = prompt("Enter index of todo to delete");
	todos.splice(index,1);
	console.log("Deleted Todo");
}




}, 500);