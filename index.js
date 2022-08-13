// var hours=parseInt(document.getElementById('hours').innerHTML) ; 
// var minutes=parseInt(document.getElementById('minutes').innerHTML);
// var seconds=parseInt(document.getElementById('seconds').innerHTML);
console.log(hours,minutes,seconds)
var timer
var timer1
function start(){
    if(timer1) clearInterval(timer1);
    if (timer) clearInterval(timer)
    timer=setInterval(increment,1000)
}




function increment(){
    
    var hours=parseInt(document.getElementById('hours').innerHTML) ; 
    var minutes=parseInt(document.getElementById('minutes').innerHTML);
    var seconds=parseInt(document.getElementById('seconds').innerHTML);
    seconds++;
    if(seconds<=9){
        second='0'+seconds
        document.getElementById('seconds').innerHTML=second;
    }
    else{
    document.getElementById('seconds').innerHTML=seconds;
    }
    if(seconds>=60){
        minutes=minutes+1
        document.getElementById('seconds').innerHTML='00'
        if(minutes<=9){
            minute='0'+minutes
            document.getElementById('minutes').innerHTML=minute;
        }
        
        else{
            document.getElementById('minutes').innerHTML=minutes
        }
        if(minutes>=60){
            hours=hours+1
            document.getElementById('minutes').innerHTML='00'
            document.getElementById('seconds').innerHTML='00'
            if(hours<=9){
                hour='0'+hours;
                document.getElementById('hours').innerHTML=hour
            }
            else{
                document.getElementById('hours').innerHTML=hours
            }
            if(hours>=60){
                hours=10
                document.getElementById('hours').innerHTML=hours
            }
        }
    }
}
function reset(){
clearInterval(timer);
clearInterval(timer1)
document.getElementById('hours').innerHTML='00';
document.getElementById('minutes').innerHTML='00';
document.getElementById('seconds').innerHTML='00';
seconds=0
hours=0
minutes=0;
}
function pause(){
    clearInterval(timer);
    clearInterval(timer1)
}
function reverse(){
if (timer) clearInterval(timer)
if (timer1) clearInterval(timer1)
timer1=setInterval(decrement,1000)

}
function decrement(){

var hrsrev=parseInt(document.getElementById('hours').innerHTML);
var minsrev=parseInt(document.getElementById('minutes').innerHTML);
var secrev=parseInt(document.getElementById('seconds').innerHTML);
if(hrsrev===0 && minsrev===0 && secrev===0){
clearInterval(timer1)
}
if(secrev>0){
    secrev=secrev-1
    if(secrev<=9){
        sec1='0'+secrev
        console.log(sec1);
        document.getElementById('seconds').innerHTML=sec1
    }
    else{
    document.getElementById('seconds').innerHTML=secrev
    }

}
else{
    if(minsrev>0){
        minsrev=minsrev-1
        document.getElementById('seconds').innerHTML='59';
        if(minsrev<9){
            min1='0'+minsrev;
            document.getElementById('minutes').innerHTML=min1
        }
        else{
        document.getElementById('minutes').innerHTML=minsrev}

    }
    else{
        if(hoursrev>0){
            hoursrev=hoursrev-1
            document.getElementById('minutes').innerHTML='59';
            document.getElementById('seconds').innerHTML='59';
            if(hoursrev<9){
                hour1='0'+hoursrev;
                document.getElementById('hours').innerHTML=hour1
            }
            document.getElementById('hours').innerHTML=hoursrev;
        }
    }
}


}