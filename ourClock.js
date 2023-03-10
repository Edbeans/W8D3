class Clock {
  constructor() { 
    
    // 1. Create a Date object.
    this.date = new Date();
    // 2. Store the hours, minutes, and seconds.
    // this.hours = Date.prototype.getHours();
    this.hours = this.date.getHours(); // new Date.getHours();

    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    // 3. Call printTime.
    this.printTime();
    
    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    const time = `${this.hours}:${this.minutes}:${this.seconds}`;
    // Use console.log to print it.
    console.log(time);
    }

  _tick() {
    // 1. Increment the time by one second.
    this.seconds = this.seconds + 1 
    if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes = this.minutes + 1;
        if (this.minutes === 60) {
            this.minutes = 0;
            this.hours = this.hours + 1;
            if (this.hours === 25) {
                this.hours = 0;
            }
        }
    }
    // 2. Call printTime.
    this.printTime();
  }
}

const clock = new Clock();

