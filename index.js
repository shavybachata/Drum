
var numberOfDrums=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfDrums;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function ()
    {
        var buttonInnerElement=this.innerHTML;
        makeSound(buttonInnerElement);
        buttonAnimate(buttonInnerElement);
        
    });

    document.addEventListener('keydown', function (event){
        makeSound(event.key);
        buttonAnimate(event.key);
    })
}

function makeSound(buttonInnerElement)
{
    switch(buttonInnerElement){
        case('w'):
            var crash= new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case('a'):
            var kick= new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        case('s'):
            var snare= new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case('d'):
            var tom1= new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case('j'):
            var tom2= new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case('k'):
            var tom3= new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case('l'):
            var tom4= new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
    }
}

function buttonAnimate(key)
{
    document.querySelector("."+key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },100);
}

