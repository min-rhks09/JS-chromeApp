const API_KEY = "8f742383d8566ba5429b330c8b3c9814"

function onGeoSuccess(position){
    const latitude = position.coords.latitude; //위도 
    const longitude = position.coords.longitude; //경도
    console.log("your location is", latitude, "&",longitude);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`; //&units=metric 으로 화씨를 섭씨로 변환
    console.log(url);
    //지역명과 날씨를 출력하기
    fetch(url)
        .then(response => response.json())
        .then((data) => {
                const weather = document.querySelector("#weather span:nth-child(1)");
                const city = document.querySelector("#weather span:nth-child(2)");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
        });
};

function onGeoError(){
    //위치 권한 미부여 시 작동  
    alert("위치 탐색에 실패하여 닐씨정보를 불러올 수 없습니다");ㄴ
};
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError); //(성공시 실행, 실패시 실행)