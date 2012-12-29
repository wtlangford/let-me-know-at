// Generated by CoffeeScript 1.3.3
(function() {

  $(function() {
    var alarmTime, hour, minutes, timeString, worker;
    alarmTime = new Date(window.lmka.miliseconds);
    console.log(alarmTime);
    hour = alarmTime.getHours() % 12;
    if (hour === 0) {
      hour = 12;
    }
    minutes = alarmTime.getMinutes();
    if (minutes < 10) {
      timeString = "" + hour + ":0" + minutes;
    } else {
      timeString = "" + hour + ":" + minutes;
    }
    window.document.title = timeString;
    $('.alarm-time').text(timeString);
    worker = new Worker('javascripts/webworker.js');
    worker.onmessage = function(e) {
      console.log(e.data);
      alert("Reminding you!");
      return worker.terminate();
    };
    return worker.postMessage(window.lmka.miliseconds);
  });

}).call(this);