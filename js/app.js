
//NEED TO DO -
// Double click problem
// Random adding to array problem
// make clicked emoji flash not stay on
// make start button
// make some sort of game over screen or something
//


$(function(){

  var emojis = [
  {name: "one", value:1, src: "./emojis/1.png"},
  {name: "two", value:2, src:"./emojis/2.png"},
  {name: "three", value:3, src:"./emojis/3.png"},
  {name: "four", value:4, src:"./emojis/4.png"},
  {name: "five", value:5, src:"./emojis/5.png"},
  {name: "six", value:6, src:"./emojis/6.png"},
  {name: "seven", value:7, src:"./emojis/7.png"},
  {name: "eight", value:8, src:"./emojis/8.png"},
  {name: "nine", value:9, src:"./emojis/9.png"},
  {name: "ten", value:10, src:"./emojis/10.png"},
  {name: "eleven", value:11, src:"./emojis/11.png"},
  {name: "twelve", value:12, src:"./emojis/12.png"},
  {name: "thirteen", value:13, src:"./emojis/13.png"},
  {name: "fourteen", value:14, src:"./emojis/14.png"},
  {name: "fifteen", value:15, src:"./emojis/15.png"},
  {name: "sixteen", value:16, src:"./emojis/16.png"},
  {name: "seventeen", value:17, src:"./emojis/17.png"},
  {name: "eighteen", value:18, src:"./emojis/18.png"},
  {name: "nineteen", value:19, src:"./emojis/19.png"},
  {name: "twenty", value:20, src:"./emojis/20.png"},
  {name: "twentyone", value:21, src:"./emojis/21.png"},
  {name: "twentytwo", value:22, src:"./emojis/22.png"},
  {name: "twentythree", value:23, src:"./emojis/23.png"},
  {name: "twentyfour", value:24, src:"./emojis/24.png"},
  {name: "twentyfive", value:25, src:"./emojis/25.png"},
  {name: "twentyfive", value:26, src:"./emojis/26.png"},
  {name: "twentyfive", value:27, src:"./emojis/27.png"},
  {name: "twentyfive", value:28, src:"./emojis/28.png"}];


  var playerArray = []; 
  var gameArray = []; 
  var roundNumber = 1;   
  var gameArrayObjects = [];           


  $('ol.keyboard').on("click", userChoice)
  generatePlayerArray();



 // populate the keyboard with the emoji array
 $.each(emojis, populateKeyboard);



 function populateKeyboard(i, emojis){
  $('ol.keyboard').prepend("<li class='emojis-icon' src="+emojis.src+" style='background-image:url("+emojis.src+");width:45px;height:45px;' id="+ emojis.value +">"+emojis.value+"</li>");
}

function generatePlayerArray(){
  var nextEmoji = emojis[Math.floor(Math.random()*emojis.length)];
  gameArrayObjects.push(nextEmoji)
  gameArray.push(parseInt(nextEmoji.value));
  populateScreen();

}

//populate the screeen with a random emoji object.
function populateScreen(){  
 var counter = -1;

 var timer = setInterval(function(element) {
  counter ++;
  if(counter < roundNumber){
    console.log("the game array is : "+gameArray)

    $('.game-screen').css("background-image", "url("+gameArrayObjects[counter].src)+")";


    console.log(gameArray);
  }else{
    clearScreen();
    clearInterval(timer);
  }
}, 1000);
};


function clearScreen(){
  $('.game-screen').css("background-image", "none");
}


//make array of user choices
function userChoice(element){
  event.preventDefault();

  var picLink = (emojis[(element.toElement.id)-1].src)
  var pic = emojis[(element.toElement.id)-1];

  if (playerArray.length !== gameArray.length){
    playerArray.push(parseInt(element.toElement.id));

    $('.game-screen').css("background-image", "url("+picLink+")");

    $('ul.player-selection-bar').prepend("<li class='emojis-icon' src="+pic.src+" style='background-image:url("+pic.src+");width:45px;height:45px;' id="+ pic.value +">"+pic.value+"</li>");

    console.log("player length is " +playerArray.length)
    console.log("player length is " +gameArray.length)

  }else{
    clearScreen();
    checkMatch();
  }
}

function clearPlayerSelection(){
 $('ul.player-selection-bar').empty();
}

function checkMatch(){
  var playerArrayString = playerArray.toString();
  var gameArrayString = gameArray.toString();

  for (var i = 0; i < playerArray.length; i++) {
    if (playerArrayString === gameArrayString){

      roundNumber++;
      playerArray=[];
      console.log("This is a match");

      generatePlayerArray();
      clearPlayerSelection();

    }else{
      console.log("not match")
      roundNumber =0;
      playerArray=[];
      clearPlayerSelection();
    }
  };
}


});











