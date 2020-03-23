new ProductList(new Cart());

const copyEmailBtn = document.getElementById("copy-email");
copyEmailBtn.addEventListener('click', function(event) {  
  
  const text = document.getElementById("email"); 
  var range = document.createRange();  
  range.selectNode(text);  
  window.getSelection().addRange(range);  
  try {  
  
    let successful = document.execCommand('copy');  
    let msg = successful ? 'successful' : 'unsuccessful';  
    console.log('Copy email command was ' + msg);  
  } catch(err) {  
    console.log('Oops, unable to copy');  
  }  
    
  
  window.getSelection().removeAllRanges();  
  showAlert("Емайл скопійований до буферу обміну");
});



function getTimeRemaining(endTime) {
  let t = Date.parse(endTime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60 * 24)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total' : t,
    'days' : days,
    'hours' : hours,
    'minutes' : minutes,
    'seconds' : seconds
  };
}

function initializeClock(id, endTime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.days');
  const hoursSpan = clock.querySelector('.hours');
  const minutesSpan = clock.querySelector('.minutes');
  const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    let t = getTimeRemaining(endTime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
   
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }

  }
  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}
let deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('countdown', deadline);