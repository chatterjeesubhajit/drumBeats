//
// // Image Addition Part - Could do in css
// var images=['crash.png','kick-bass.png','snare.png','tom-1.png','tom-2.png',
//             'tom-3.png','tom-3.png'];
//
// for(i=0;i<document.querySelectorAll(".drum").length;i++)
// {
// chosenImage="url('images/"+images[i]+"')";
// document.querySelectorAll(".drum")[i].style.backgroundImage=chosenImage;
// }

// #--------------Sound Part-------------#

function makeSound(key)
{
  var keyVals = ['w', 'a', 's', 'd', 'j', 'k', 'l'];
  var sounds = ['crash.mp3', 'kick-bass.mp3', 'snare.mp3', 'tom-1.mp3', 'tom-2.mp3',
    'tom-3.mp3', 'tom-3.mp3'
  ];
  var chosenSound = "";
  var audio = "";
  key=key.toLowerCase();
  switch (key) {

    case keyVals[0]:
      buttonFlash(key);
      chosenSound = "sounds/" + sounds[0];
      audio = new Audio(chosenSound);
      audio.play();
      break;
    case keyVals[1]:
      buttonFlash(key);
      chosenSound = "sounds/" + sounds[1];
      audio = new Audio(chosenSound);
      audio.play();
      break;
    case keyVals[2]:
      buttonFlash(key);
      chosenSound = "sounds/" + sounds[2];
      audio = new Audio(chosenSound);
      audio.play();
      break;
    case keyVals[3]:
      buttonFlash(key);
      chosenSound = "sounds/" + sounds[3];
      audio = new Audio(chosenSound);
      audio.play();
      break;
    case keyVals[4]:
      buttonFlash(key);
      chosenSound = "sounds/" + sounds[4];
      audio = new Audio(chosenSound);
      audio.play();
      break;
    case keyVals[5]:
      buttonFlash(key);
      chosenSound = "sounds/" + sounds[5];
      audio = new Audio(chosenSound);
      audio.play();
      break;
    case keyVals[6]:
      buttonFlash(key);
      chosenSound = "sounds/" + sounds[6];
      audio = new Audio(chosenSound);
      audio.play();
      break;
    default:
      // alert("Not the right key bro!")
  }
  //remove the "pressed" class to remove shadow affect after 100 miliseconds
  setTimeout(function() {document.querySelector('.'+key).classList.remove("pressed");},100);
}
//keypress listener
document.addEventListener("keypress", function () {
  makeSound(event.key);
});

//button click listener
for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  x = document.querySelectorAll(".drum")[i];
  x.addEventListener("click", function(){
    makeSound(this.innerText);
  });

}

//button flash

function buttonFlash(key)
{
  document.querySelector('.'+key).classList.add("pressed");
}

// function buttonFlashOff(key)
// {
//
// }



//timeout function:
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
