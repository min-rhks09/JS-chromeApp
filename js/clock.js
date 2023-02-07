const clock = document.querySelector("#clock");

function myClock(){
    const date = new Date();
    //const hours = date.getHours(); --> number로 출력이 되기떄문에 string으로 변환 필요
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
};

myClock(); //페이지 새로고침시 시계가 즉시 실행이 되도록 한다. 이후 setInterval 함수에 의해 1초마다 실행
setInterval(myClock, 1000); 