document.getElementById("button").onclick = function() {
    let firstNum = document.getElementById("first-num").value;
    let secondNum = document.getElementById("second-num").value;
    
    let answerNum = parseInt(firstNum) + parseInt(secondNum);

    let answer = document.getElementById("answer-num");
    answer.value = answerNum;
};