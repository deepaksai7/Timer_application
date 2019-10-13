
let countdown;
const timerdisplay=document.getElementById("displaytimeleft");
const endtime=document.getElementById("displayendtime");
var audio = new Audio('bell.mp3');

function timer(seconds){
    const now= Date.now();
    const then= now+seconds*1000;
    displayendtime(then);
    countdown= setInterval(()=>{

        const secondsleft= Math.round((then-Date.now())/1000);
        if(secondsleft<0){
            clearInterval(countdown);
            audio.play();
            return;
        }
    displaytimeleft(secondsleft);
    },1000);
}

function displaytimeleft(seconds){
    const minutes=Math.floor(seconds/60);
    const remainderseconds= seconds%60;
    const display=`${minutes}:${remainderseconds < 10 ? '0': ''}${remainderseconds}`;
    document.title=display;
    timerdisplay.textContent=display;
}

function displayendtime(timestamp){
    const end=new Date(timestamp);
    const hour=end.getHours();
    const minutes=end.getMinutes();

    endtime.textContent=`Timer will end at ${hour}:${minutes < 10 ? '0':''}${minutes}`;
}

document.customForm.addEventListener('submit',function(e){
  e.preventDefault();
  const mins= this.minutes.value;
  timer(mins*60);
  this.reset();


});