const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input"); //todo-form 안의 input을 의미
const toDoList = document.getElementById("todo-list");

const todos = [];
function saveToDos(){
    //todos array의 항목을 localStorage에 넣어주는 함수
    localStorage.setItem("todos", JSON.stringify(todos));
};

function deleteList(event){
    //어떤 버튼이 클릭되었나 확인하기
    //console.log(event.target.parentElement.innerText); //찾아가는 경로 확인하기
    const li = event.target.parentElement;
    li.remove();

};

function paintToDo(newTodo) {
    //html에서 보여줄 리스트 만들기(?)
    const li = document.createElement("li");
    
    const span = document.createElement("span");
    span.innerText = newTodo;
    
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteList);
    
    li.appendChild(button); //buttonn을 li의 자식태그로 만들기
    li.appendChild(span); //span을 li의 자식 태그로 만들기
    toDoList.appendChild(li); //li를 toDoList에 추가해주기
};

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //칸 비워주기 전 저장해주기
    toDoInput.value = ""; //리스트 작성 후 textinput 칸 비워주기 
    todos.push(newTodo); //newTodo 생성전 todos array에 newTodo를 push 해줌  
    paintToDo(newTodo);
    saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);