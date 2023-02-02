const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");

function onLoginSubmit(event){
    event.preventDefault();
    //preventDefault를 이용하여 브라우저가 기본동작을 실행하지 못하도록 막을 수 있음
    console.log(loginInput.value);
    //event를 console.log하여 인자들(?)을 확인 할 수있다.
};

loginForm.addEventListener("submit", onLoginSubmit);

