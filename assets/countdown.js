class CountDownTimer extends HTMLElement {
  constructor() {
    super();

    //Grab required elements
    this.countDownText = this.querySelector(".countdown-text");
    this.daysContainer = this.querySelector(".days");
    this.hoursContainer = this.querySelector(".hours");
    this.minutesContainer = this.querySelector(".minutes");
    this.secondsContainer = this.querySelector(".seconds");

    // Set Date
    this.timerContainer = this.querySelector('.countdown-timer');
    this.endDateString = this.timerContainer.dataset.endDate;
    this.endDate = new Date(this.endDateString).getTime();


    // Start timer
    this.interval = setInterval(this.handleTick.bind(this), 1000)
  }

  handleTick() {
    //logic and update elements
    let now = new Date().getTime();
    let timeleft = this.endDate - now;

    if(timeleft < 0){
      this.countDownText.innerHTML = "This sale ended";
      clearInterval(this.interval);
      return;
    }
    
      let msInDay = 1000 * 60 * 60 * 24;
      let msInHour = 1000 * 60 * 60;
      let msInMinute = 1000 * 60;

      let days = Math.floor(timeleft / msInDay);
      let hours = Math.floor((timeleft % msInDay) / msInHour);
      let minutes = Math.floor((timeleft % msInHour) / msInMinute);
      let seconds = Math.floor((timeleft % msInMinute) / 1000);

      this.daysContainer.innerHTML = days + "d ";
      this.hoursContainer.innerHTML = hours + "h ";
      this.minutesContainer.innerHTML = minutes + "m ";
      this.secondsContainer.innerHTML = seconds + "s";
  }
}

customElements.define("countdown-timer", CountDownTimer);
