window.onload = function () {
    let tens = 00;
    let seconds = 00;
    let appendTens = document.querySelector("#tens");
    let appendSeconds = document.querySelector("#seconds");

    const buttonStart = document.querySelector("#button-start");
    const buttonReset = document.querySelector("#button-reset")
    const buttonStop = document.querySelector("#button-stop");
    let interval;

    buttonStart.onclick = function() {
        clearInterval(interval);
        interval = setInterval(startTimer,10);
    }
    buttonStop.onclick = function() {
        clearInterval(interval);
    }
    function startTimer() {
        tens++;
        if(tens<10)
        {
            appendTens.innerHTML = "0" + tens;
        }
        if(tens > 9)
        {
            appendTens.innerHTML = tens;
        }
        if(tens>99)
        {
            tens = 0;
            appendTens.innerHTML = "0" + tens;
            seconds++;
            if(seconds <10)
                appendSeconds.innerHTML = "0" + seconds;
            if(seconds>9)
                appendSeconds.innerHTML = seconds;
        }
    }

}