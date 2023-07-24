console.log("Exercise 3 - Timer");
    const input = document.getElementById("input");
    const counter = document.getElementById("result");
    const start = document.getElementById("start");
    const reset = document.getElementById("reset");
    const plus = document.getElementById("plus");
    const minus = document.getElementById("minus");

    let intervalId;
    let isTimerRunning = false;
    let display = 0;

    function updateDisplay() {
      const hours = Math.floor(display / 3600);
      const minutes = Math.floor((display % 3600) / 60);
      const seconds = display % 60;
      counter.innerHTML = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function startCountdown() {
      if (!isTimerRunning) {
        display =  Number(input.value);
        updateDisplay();
        if (display > 0) {
          isTimerRunning = true;
          start.textContent = "STOP";
          intervalId = setInterval(() => {
            display--;
            updateDisplay();
            if (display <= 0) {
              clearInterval(intervalId);
              isTimerRunning = false;
              start.textContent = "START";
              alert("Countdown completed!");
            }
          }, 1000);
        }
      } else {
        clearInterval(intervalId);
        isTimerRunning = false;
        start.textContent = "START";
      }
    }

    function resetCountdown() {
      clearInterval(intervalId);
      isTimerRunning = false;
      start.textContent = "START";
      display = 0;
      updateDisplay();
    }

    function incrementTime() {
      if (!isTimerRunning) {
        display += 1; 
        updateDisplay();
      }
    }

    function decrementTime() {
      if (!isTimerRunning && display > 0) { 
        display -= 1;
        updateDisplay();
      }
    }

    start.addEventListener("click", startCountdown);
    reset.addEventListener("click", resetCountdown);
    plus.addEventListener("click", incrementTime);
    minus.addEventListener("click", decrementTime)