const circle = document.getElementById("circle");

function changeText(){
    circle.innerText = "숨을 들이쉬세요!";
    setTimeout(() => {circle.innerText = "숨을 참으세요!"}, 3500);
    setTimeout(() => {circle.innerText = "숨을 내쉬세요!"}, 6500);
}

function init(){
    changeText();
    setInterval(changeText, 10000);
}

init();