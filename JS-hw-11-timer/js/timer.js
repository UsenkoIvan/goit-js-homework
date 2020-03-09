class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timeContent = document.querySelector(this.selector);
    this.refs = {
      days: document.querySelector('span[data-value="days"]'),
      hours: document.querySelector('span[data-value="hours"]'),
      mins: document.querySelector('span[data-value="mins"]'),
      secs: document.querySelector('span[data-value="secs"]'),
    };
  }

  startTimer() {
    this.timerId = setInterval(() => {
      const currentTime = Date.now();
      this.deltaTime = this.targetDate - currentTime;
      this.drawToHtmlTimerContent(this.deltaTime);
      if (this.deltaTime < 0) {
        this.stopTimer();
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timerId);
    this.deltaTime = 0;
    this.drawToHtmlTimerContent(this.deltaTime);
  }

  drawToHtmlTimerContent(time) {
    this.refs.days.textContent = this.pad(
      Math.floor(time / (1000 * 60 * 60 * 24)),
    );
    this.refs.hours.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    this.refs.mins.textContent = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    this.refs.secs.textContent = this.pad(
      Math.floor((time % (1000 * 60)) / 1000),
    );
  }

  pad(value) {
    return String(value).padStart(2, `0`);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('March 15, 2020'),
});

timer.startTimer();
