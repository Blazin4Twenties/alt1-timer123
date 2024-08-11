let timerInterval;
let time = 0;
let isRunning = false;

function updateTimer() {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    document.getElementById('timer').textContent =
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

document.getElementById('startBtn').addEventListener('click', function () {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(function () {
            time++;
            updateTimer();
        }, 1000);
    }
});

document.getElementById('pauseBtn').addEventListener('click', function () {
    clearInterval(timerInterval);
    isRunning = false;
});

document.getElementById('resetBtn').addEventListener('click', function () {
    clearInterval(timerInterval);
    isRunning = false;
    time = 0;
    updateTimer();
});

updateTimer();
