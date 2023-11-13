let hr = document.querySelector('.hr');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let btn = document.querySelectorAll('.btn');

let isStarted = false;
let isStopped = false;

let time = [0,0,0];
let intervalID;

btn[0].addEventListener('click', () => {
    clearInterval(intervalID);

    isStarted = false;
    isStopped = false;

    intervalID = setInterval(() => {
        if (!isStarted) {
            btn[0].disabled = true;
            time[2]++;
            if (time[2] === 60) {
                time[1]++;
                time[2] = 0;
            }
            if (time[1] === 60) {
                time[0]++;
                time[1] = 0;
            }
        }

        displayTime();
        }, 1000)
})

btn[1].addEventListener('click', () => {
    if (!isStarted) {
        btn[0].disabled = false;
        isStarted = true;
    }
})

btn[2].addEventListener('click', () => {
    time = [0,0,0];
    hr.innerText = '00'
    sec.innerText = '00'
    min.innerText = '00'
    btn[0].disabled = false;
    isStarted = true;
})

function displayTime(){
    hr.innerHTML = time[0].toString().padStart(2,'0');
    min.innerHTML = time[1].toString().padStart(2,'0');
    sec.innerHTML = time[2].toString().padStart(2,'0');
}
