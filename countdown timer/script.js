
const daysEl=document.getElementById("days")
const hoursEl=document.getElementById("hours")
const minutesEl=document.getElementById("min")
const secEl=document.getElementById("sec")


let newYear="1 Jan 2025";

function countDown(){
    const newYearDate=new Date(newYear)
    const currentDate=new Date();
    
    const totalSeconds=(newYearDate-currentDate)/1000

   const days=Math.floor(totalSeconds/3600/24) 

   const hours=Math.floor(totalSeconds/3600)%24

   const mins=Math.floor(totalSeconds/60)%60

   const seconds=Math.floor(totalSeconds%60)
//    console.log(days,hours,mins, seconds)
    

daysEl.innerHTML=days;
hoursEl.innerHTML=hours;
minutesEl.innerHTML=formatTime(mins);
secEl.innerHTML=formatTime(seconds);

   
      
}


function formatTime(time){
    return time <10 ? `0${time}`:time;
}




countDown()
setInterval(countDown,1000)