const images = ["0.jpg","1.jpg","2.jpg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];

//html로 배경화면 띄우기(createElement 활용)
const backgroundImg = document.createElement("img");

backgroundImg.src = `img/${chosenImages}`;

document.body.appendChild(backgroundImg); //html body에 추가 해주는 함수