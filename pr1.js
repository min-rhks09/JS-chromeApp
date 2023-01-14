// const calculator = {
//     add: function(a, b){
//         console.log(a + b);
//     },
//     minus: function(a, b){
//         console.log(a - b);
//     },
//     divide: function(a, b){
//         console.log(a / b);
//     },
//     power: function(a, b){
//         console.log(a ** b);
//     },
// };

// calculator.add(1, 2);

// calculator.minus(3, 2);

// calculator.divide(2, 2);

// calculator.power(2, 2);

// 새롭게커밋 
// const age = 25;

// function ageCalculator(yourAge){
//     return yourAge + 2;
// };

// const korAge =  ageCalculator(age);

// console.log(korAge);

//const age = prompt("당신의 나이를 입력하세요");
//prompt: 사용자에게 창을 띄워줌 (message, default), css적용불가, js실행을 일시정지 시켜  현재는 잘사용하지않음
//console.log(age);
//typeof를 사용하여 console에서 확인

//입력받은 값의 type 변경하기(parseInt를 사용 -> string을 number로 변환)
//console.log(age, parseInt(age));
//parseInt를 사용하여 사용자가 숫자를 입력했는지 감지

//계산기의 나이 입력부분
const age = parseInt(prompt("당신의 나이를 입력하세요"));

//올바른 값을 입력하였는지 확인

//type1
// if(isNaN(age)){
//     console.log("숫자로 다시 입력해주세요.");
// }else{
//     if(age > 50){
//         alert("음주를 줄일 연령대 입니다.");
//     }else if(age < 20){
//         alert("음주 노노");
//     }else{
//         alert("음주 가능하나 조금만요.");
//     };
// };

//type2
if(isNaN(age) || age < 0){
    //숫자로 입력하지 않거나 음수를 입력하는 경우 실행
    //||: or 연산자, (a || b --> a와 b 중 어느하나라도 참일 시 실행)
    alert("올바른 나이로 다시 입력해주세요.");
}else if(age < 20){
    alert("음주 불가한 나이에요.");
}else if(age >= 20 && age <= 50){
    //&&: and 연산자, (a && b --> a와 b 조건이 모드 만족할 시 실행)
    
    alert("음주 가능한 나이에요");
}
//100살일 경우
else if(age === 100){
    alert("good!!")
}
// age === 100을 age > 50보다 밑에서 실행하면 실행되지 않기 때문에 위치를 옮겨줌(js는 위에서 아래로 차례로 실행)
else if(age > 50){
    alert("음주 가능하나 조금만요.");
};

// ===: equal, !==: not 

//연산순서
//ex) if((a && b) || (c && d)){}--> 1.(c && d) 2.(a && b) 3. (a && b) || (c && d) 

// const title = document.querySelector("div.hello:first-child h1");

// // console.dir(title);

// // title.style.color = "blue";



// //title 클릭시 listen, console에 count
// function handleTitleClick(){
//     console.log("타이틀이 클릭되었습니다!");
// };

// title.addEventListener("click", handleTitleClick);

// //마우스 커서가 위에 위치할 때 listen(mouseenter 사용)
// function handleMouseEnter(){
//     console.log("커서가 위에 위치해있습니다!");
// };

// title.addEventListener("mouseenter", handleMouseEnter);

// //마우스 커서가 떠날 떄 listen(mouseleave 사용)
// function handleMouseLeave(){
//     console.log("커서 위치가 텍스트에서 떠났습니다!");
// };

// title.addEventListener("mouseleave", handleMouseLeave);

// //click, mouseenter, mouseleave를 HTML상에 나타나게 하기(innerText 사용)
// function handleTitleClick(){
//     title.style.color = "red";
// };

// function handleMouseEnter(){
//     title.innerText = "커서가 위에 위치해있습니다!";
// };

// function handleMouseLeave(){
//     title.innerText ="커서 위치가 텍스트에서 떠났습니다!";
// };

// title.addEventListener("click", handleTitleClick);
// // title.onclick = "handleTitleClick";

// title.addEventListener("mouseenter", handleMouseEnter);
// // title.onmouseenter = "handleMouseEnter";

// title.addEventListener("mouseleave", handleMouseLeave);
// // title.onmouseleave = "handleMouseLeave";

// //resize event 사용하기(feat.window)
// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// };

// window.addEventListener("resize", handleWindowResize);

// //copy event 사용하기
// function handleWindowCopy(){
//     alert("복사됨!");
// };

// window.addEventListener("copy", handleWindowCopy);

// //wifi offline, online 표시 event 활용

// function handleWindowOffline(){
//     //wifi 해제 및 미연결시 나타남
//     alert("오프라인 상태입니다");
// };
// window.addEventListener("offline", handleWindowOffline);

// function handleWindowOnline(){
//     //wifi 연결시 나타남
//     alert("온라인 상태입니다");
// }
// window.addEventListener("online", handleWindowOnline);


//click 할 때마다 색이 변하게 하기(if-else문 활용)
// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     const h1Color =h1.style.color;

//     let newColor; //값이 바뀌어야 하기 때문에 let으로 선언
    
//     if(h1Color === "blue"){
//         newColor = "green"
//     }else{
//         newColor = "blue"
//     };
//     h1.style.color = newColor; //h1Color에 영향을 미치게하기
// };

// h1.addEventListener("click", handleTitleClick);

//js 작동 기본 element찾기 -- event listen -- event반응

// //click 할 때마다 색이 변하게 하기(css 추가)
// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     const changeClass = "change"; //변수선언으로 오류 조기발견 및 줄이기 
//     if(h1.className === changeClass){
//         h1.className = ""
//     }else{
//         h1.className = changeClass
//     };
// };

// h1.addEventListener("click", handleTitleClick);

//click 할 때마다 색이 변하게 하기(css 추가)
// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     const changeClass = "change"; //변수선언으로 오류 조기발견 및 줄이기 

//     //add, remove로 원래있던 class(h1font)는 남기고 js에서 새롭게 작성한 class만 적용이 됨
//     if(h1.classList.contains(changeClass)){
//         h1.classList.remove(changeClass);
//     }else{
//         h1.classList.add(changeClass);
//     };
// };

