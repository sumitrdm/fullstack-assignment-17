//selector
//copy krne ke lie shift+alt+downward arrow....
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const date = document.getElementById("date");
//const means aap yeh object nhi change kar payenge aage...

//event(example=onclick,blur,keypress etc) handler or listener
name.addEventListener("keypress",setName);
name.addEventListener("blur",setName);
//2 event keypress(mtlb enter press and blur mtlb cursor shift jab yeh 2 event hue toh getName call function....)


//function
function showTime()
{
    let today = new Date();
   //console.log(today);
    //let is used kyuki hum function ke ander haii so block level and main mainn..
    //Constructor call kiaa haiii means aaj ki Date today mai daal di.
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let todayDate = today.toDateString(); //date vaala part..

    //AM PM format(logic)
    const amPm = hour>12? 'PM' : 'AM';

    //12 hr format mai change tym ko
    hour = hour%12 || 12;
    //if condition true so hour%12 remainder hour mai jaega false hua toh 
    //12 jayegaa hour mai false ki condition hai ki 12%12==0 so false so 12 gya
    //hour mai  aur 24 mai bhi 12 gya hour maii aur baaki case mai mod jaeyga..

    //output time static tym ki jagah apna yeh time..
    time.innerHTML =`${addZeroInHourAndSec(hour)}<span>:</span>${addZeroInHourAndSec(min)}<span>:</span>${addZeroInHourAndSec(sec)} ${amPm}`
    //innerHTML previous tag ki value replace by this value..
    // `` fayda concatination ki jaaraurt ni barbar apne app mix variables with string..
    //  ${variablename} ==aise access...variable koo


    date.innerHTML = `${todayDate}`;


     setTimeout(showTime,1000); //1000sec = 1ms
    //setTimeout har 1 sec mai showTime call hora haii...

                        
}

function addZeroInHourAndSec(n)
{
    return (parseInt(n,10) <10 ? "0" : "") + n;
    //redix kisi number system ki value hoti haii mtlb
    //yaha jo 10 dia hai voo jo n aayega vo string mai aayega voo 10 se number mai
    //change ab jo choota 10 se so add zero(0) and return to back jaha se call hua
    //in string form...
    //decimal ki 10
    //hexadecimal ki 16
    //octal ki 8
    //binary ki 2

}

function setGreeting()
{
    let today = new Date(); //year:month:day:hour:minute:second
    let hour = today.getHours();

    if(hour < 12 )
    {
        document.body.style.backgroundImage = 'url("morning.jpg")';
        greeting.innerHTML = 'Good Morning';
    }
    else if(hour < 18 )
    {
        document.body.style.backgroundImage = 'url("afternoon.jpg")';
        greeting.innerHTML = 'Good Afternoon';
    }
    else
    {
        document.body.style.backgroundImage = 'url("night.jpg")';
        greeting.innerHTML = 'Good Night';
        document.body.style.color="white";
    }



}

function getName()
{

    if(localStorage.getItem('myData')===null)
    {
        name.innerHTML = "[Enter Name]";
    }
    else
    {
        name.innerHTML = localStorage.getItem('myData');
    }
}

function setName(e)
{ //isko call event(blur and keypress) kregaa muje krne ki koi jarruart nhii..l

    if(e.type==="keypress") //mtlb enter click kiaa
    {
        if(e.keyCode==13)
        {
            //enter ka keyCode is 13
            localStorage.setItem('myData',e.target.innerHTML);
            name.blur();
        }
        
    }
    else //mtlb blur hua cursor bahrrr....
    {
        localStorage.setItem('myData',e.target.innerHTML);
        //e.target kya batataa hai ki konsi location pe event generate kia haii.
        //humne name vaale pe generate kia haiii.name field pe jo data pada hai
        //voo uthaoo auur myData mai daal doo..
    }

}

//function call
getName();
showTime(); //page load hoga script fire hogi so function call hoga sabse phele showTime chalega means time dynamic kregaa jo haii
setGreeting();