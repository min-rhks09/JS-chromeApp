const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input"); //todo-form 안의 input을 의미
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
  //html에서 보여줄 리스트 만들기(?)
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span); //span을 li의 자식 태그로 만들기
  span.innerText = newTodo;
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; //칸 비워주기 전 저장해주기
  toDoInput.value = ""; //리스트 작성 후 textinput 칸 비워주기 
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);