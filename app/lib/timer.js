module.exports = function timer(duration, target, bus){
  var timer = duration,
    minutes,
    seconds;

  var x = setInterval(function(){
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    target.textContent = `${minutes}:${seconds}`;

    if(--timer < 0){
      timer = duration;
      bus.emit('timer-done');
      clearInterval(x);
    }
  }, 1000);

  bus.on('stop-timer', function(){
    clearInterval(x);
  });
};