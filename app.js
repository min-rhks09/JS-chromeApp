const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"; //string만 포함된 변수는 대문자로 표기하고 string을 저장하는 역할을 수행

function onLoginSubmit(event){
    event.preventDefault();
    //preventDefault를 이용하여 브라우저가 기본동작을 실행하지 못하도록 막을 수 있음
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    greeting.innerText = "Hi, " + username;
    greeting.innerText = `Hi, ${username}`; //윗줄 코드와 똑같이 실행
    greeting.classList.remove(HIDDEN_CLASSNAME);
};

loginForm.addEventListener("submit", onLoginSubmit);

