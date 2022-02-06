function Grade() {
    var SCORE = 0;
    var ans1 = document.challenge.Quiz1.value;
    var ans2 = document.challenge.Quiz2.value;
    var ans3 = document.challenge.Quiz3.value;
    var ans4 = document.challenge.Quiz4.value;
    var ans5 = document.challenge.Quiz5.value;
    var ans6 = document.challenge.Quiz6.value;
    var ans7 = document.challenge.Quiz7.value;
    var ans8 = document.challenge.Quiz8.value;
    var ans9 = document.challenge.Quiz9.value;
    var ans10 = document.challenge.Quiz10.value;
    if (ans1 =="correct") {SCORE++}
    if (ans2 =="correct") {SCORE++}
    if (ans3 =="correct") {SCORE++}
    if (ans4 =="correct") {SCORE++}
    if (ans5 =="correct") {SCORE++}
    if (ans6 =="correct") {SCORE++}
    if (ans7 =="correct") {SCORE++}
    if (ans8 =="correct") {SCORE++}
    if (ans9 =="correct") {SCORE++}
    if (ans10 =="correct") {SCORE++} 
    document.write(SCORE);
}
