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



