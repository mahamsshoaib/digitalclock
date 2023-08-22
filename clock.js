function updateClock() {
    const date = new Date();
    /*These line of code will fetch the hours, minutes and seconds and will generate a time lead by a zero incase number drops from 10*/
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Call updateClock immediately to set the initial time
  updateClock();
  