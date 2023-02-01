// const loginForm = document.getElementById("login_form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

//위의 코드를 더욱 간단히
const loginInput = document.querySelector("#login_form input");
const loginButton = document.querySelector("#login_form button");

function handleLoginButtonClick(){
    console.log("hello", loginInput.value)
    
    //console.log(loginInput.value) //input창에 입력내용 콘솔에 출력
    //console.log("btnclick"); //버튼 클릭시 콘솔에 출력
};

loginButton.addEventListener("click", handleLoginButtonClick);

