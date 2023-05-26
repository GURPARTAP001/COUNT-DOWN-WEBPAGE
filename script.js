// we need the end date and the starting date and we will subtract them to get the time left
const exam="5 June 2023";

const daysEl=document.getElementById("days")
const hoursEl=document.getElementById("hours")
const minsEl=document.getElementById("mins")
const secondsEl=document.getElementById("seconds")
function countdown(){
    const newexamDate=new Date(exam); //it give us the date that we have entered
    const currentDate = new Date();//it give us the current date 
   
    const totalSeconds=(newexamDate-currentDate)/1000;
    const days=Math.floor(totalSeconds/3600/24);
    const hours=Math.floor(totalSeconds/3600)%24;
    const minutes=Math.floor(totalSeconds/60)%60;
    const seconds=Math.floor(totalSeconds)%60
    if(totalSeconds<0){
        totalSeconds=0;
    }


    daysEl.innerText=addZero_in_front(days);
    hoursEl.innerText=addZero_in_front(hours);
    minsEl.innerText=addZero_in_front(minutes);
    secondsEl.innerText=addZero_in_front(seconds);
}

function addZero_in_front(time){
    return time<10?`0${time}`:time
}
//initial function call
countdown();


// as we need the counter to work countinously thus using the setinterval
setInterval(countdown,1000)