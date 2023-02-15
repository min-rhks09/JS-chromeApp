const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input"); //todo-form 안의 input을 의미
const toDoList = document.getElementById("todo-list");

const TODOS_KEY ="todos";

//todos array 새로고침후에도 유지 되도록 하기
//const todos = []; //기존 변수는 새로고침후 리스트 작성시 항목을 덮어씌움
let todos = [];

function saveToDos(){
    //todos array의 항목을 localStorage에 넣어주는 함수
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};

function deleteList(event){
    //어떤 버튼이 클릭되었나 확인하기
    //console.log(event.target.parentElement.innerText); //찾아가는 경로 확인하기
    const li = event.target.parentElement;
    console.log(li.id);
    li.remove();

};

function paintToDo(newTodo) {
    //html에서 보여줄 리스트 만들기(?)
    const li = document.createElement("li");
    li.id = newTodo.id //html에서 object id 확인해주게하는 코드
    const span = document.createElement("span");
    span.innerText = newTodo.text; // newTodo -> newTodo.text로 변경 -> [obect object]문제해결
    
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteList); 
    li.appendChild(span); //span을 li의 자식 태그로 만들기
    li.appendChild(button); //buttonn을 li의 자식태그로 만들기
    toDoList.appendChild(li); //li를 toDoList에 추가해주기
};

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //칸 비워주기 전 저장해주기
    toDoInput.value = ""; //리스트 작성 후 textinput 칸 비워주기 
    
    //object를 생성해 랜덤 ID를 제공함
    const newToDoObject ={
        //text는 newTodo에서 가져오고 id는 Date.now 함수로 부터 가져옴
        text : newTodo,
        id : Date.now()
    };
    todos.push(newToDoObject);  //newTodo 생성전 todos array에 newTodo를 push 해줌  
    paintToDo(newToDoObject); //화면에 [object object로만 출력문제]
    saveToDos();
};

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    //savedToDos가 null 값이 아닐때 
    const parsedToDos = JSON.parse(savedToDos);
    //새로고침 시 항목유지
    todos = parsedToDos;
    //array 각 항목에대해서 함수실행 시키기
    parsedToDos.forEach (paintToDo);
    //painToDo 역할 함수 (item) => console.log("this is",item), 차이점: 출력위치
};


