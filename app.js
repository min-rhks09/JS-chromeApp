h1.addEventListener("click", handleTitleClick);

//toggle을 이용하여 add, remove 대체하기
const h1 = document.querySelector("div.hello:first-child h1");
function handleTitleClick(){
    h1.classList.toggle("change");
};

h1.addEventListener("click", handleTitleClick);