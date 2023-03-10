const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; //string만 포함된 변수는 대문자로 표기하고 string을 저장하는 역할을 수행
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    //preventDefault를 이용하여 브라우저가 기본동작을 실행하지 못하도록 막을 수 있음
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); //localstorage의 DB에 username을 저장해주는 기능
    paintGreetings(username);
};

function paintGreetings(username){
    greeting.innerText = `Hi, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
};

const usernameData = localStorage.getItem(USERNAME_KEY);

if(usernameData === null){
    //form을 보여주기
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    //greeting 보여주기
    paintGreetings(usernameData);   
};

