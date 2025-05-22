const clock = document.querySelector("#clock")

setInterval(() => {
    let date = new Date();

    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

const stopwatch = document.querySelector('#stopwatch')
let sec = 0;
setInterval(() => {
    stopwatch.innerHTML = sec++;
}, 1000);