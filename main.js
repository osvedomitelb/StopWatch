let output = document.querySelector("#stopwatch");
let ms = 0;
let sec = 0;
let min = 0;
let hour = 0;


function timer () {
    ms++;
    if (ms > 100) {
        sec++;
        ms = 0;
    }
    if (sec === 60) {
        min++;
        sec = 0;
    }
    if (min === 60) {
        hour++;
        min, sec, ms = 0;
    }


    //add_leading_zero if ms, sec, min, hours are less than 10

    let milliseconds = ms < 10 ? "0" + ms : ms;
    let seconds = sec < 10 ? "0" + sec : sec;
    let minutes = min < 10 ? "0" + min : min;
    let hours = hour < 10 ? "0" + hour : hour;


    let timer = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    output.innerHTML = timer;
    }
    function start () {
        time = setInterval(timer, 10);
    }

    function stop () {
        clearInterval(time);
    }

    function reset () {
        ms = 0;
        sec = 0;
        min = 0;
        hour = 0;

        output.innerHTML = `00:00:00:00`;
    }

    let startButton = document.querySelector("#start");
    let stopButton = document.querySelector("#stop");
    let resetButton = document.querySelector("#reset");

    startButton.addEventListener("click", start);
    stopButton.addEventListener ("click", stop);
    resetButton.addEventListener("click", reset);

