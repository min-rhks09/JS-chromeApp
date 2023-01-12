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

h1.addEventListener("click", handleTitleClick);

//toggle을 이용하여 add, remove 대체하기
const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick(){
    h1.classList.toggle("change");
};

h1.addEventListener("click", handleTitleClick);