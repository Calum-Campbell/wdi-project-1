
//NEED TO DO -
// back to start/replay button
// styling
// 7 along top memory thing

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
{name: "twentyfive", value:28, src:"./emojis/28.png"},
{name: "twentyfive", value:29, src:"./emojis/29.png"},
{name: "twentyfive", value:30, src:"./emojis/30.png"},
{name: "twentyfive", value:31, src:"./emojis/31.png"},
{name: "twentyfive", value:32, src:"./emojis/32.png"},
{name: "twentyfive", value:33, src:"./emojis/33.png"},
{name: "twentyfive", value:34, src:"./emojis/34.png"},
{name: "twentyfive", value:35, src:"./emojis/35.png"}];

$(function(){
  gameStart();
  function gameStart(){

    var playerArray = []; 
    var gameArray   = []; 
    var roundNumber = 3;   
    var score       = 0;
    var gameArrayObjects = [];       
    var finished = true;    

    setupScreen();
    $('ol.keyboard').on("click", userChoice);
    $('#start-button').on('click', generatePlayerArray);
    $('#rules-button').on('click', displayRules);
    $('#replay-button').on('click', replay)

 // populate the keyboard with the emoji array
 $.each(emojis, populateKeyboard);

 function setupScreen(){
  $('.game-screen').prepend(
    '<ol class="rules">' +
      '<li>Press play to begin</li>' +
      '<li>Remember the order of the emojis</li>' +
      '<li>Get the new high score!</li>' +
    '</ol>' +
    '<div class="play" id="start-button">Play</div>'
    ).hide().fadeIn();
 }

 function populateKeyboard(i, emoji){
  $('ol.keyboard').prepend("<li class='emojis-icon' src="+emoji.src+" style='background-image:url("+emoji.src+");width:45px;height:45px;' id="+ emoji.value +">"+emoji.value+"</li>").hide().fadeIn();
}

function displayRules(){
  $('.rules').slideToggle(500);
}

function generatePlayerArray(){
  clearScreen();
  if(roundNumber ===3){
    var emoji1 = emojis[Math.floor(Math.random()*emojis.length)];
    var emoji2 = emojis[Math.floor(Math.random()*emojis.length)];
    var emoji3 = emojis[Math.floor(Math.random()*emojis.length)];
    gameArrayObjects.push(emoji1);
    gameArray.push(parseInt(emoji1.value));
    gameArrayObjects.push(emoji2);
    gameArray.push(parseInt(emoji2.value));
    gameArrayObjects.push(emoji3);
    gameArray.push(parseInt(emoji3.value));
    populateScreen();
  }else{
  var nextEmoji = emojis[Math.floor(Math.random()*emojis.length)];
  gameArrayObjects.push(nextEmoji);
  gameArray.push(parseInt(nextEmoji.value));
  populateScreen();
}
}

//populate the screeen with a random emoji object.
function populateScreen(){  
 finished = false;
 var counter = -1;

 var timer = setInterval(function(element) {
  counter ++;
  if(counter < roundNumber){

    $('.game-screen').css("background-image", "url("+gameArrayObjects[counter].src).hide().fadeIn()+")";
  }else{
    finished = true;
    clearScreenToGuess();
    clearInterval(timer);
  }
}, 1000);
};


function clearScreenToGuess(){
  $('.game-screen').css("background-image", "none");
  $('.game-screen').html("Now You Guess!").hide().fadeIn();
}

function clearScreen(){
  $('.game-screen').css("background-image", "none");
  $('.game-screen').html("");
  finished = true;
}

function gameOverScreen(){


  $('.game-screen').html( "<ol class='game-over'>"+"<li id='replay-button'>Replay</li>"+"<liid='score'>Score: "+score+"</li></ol>");
  $('#replay-button').on('click', replay)
  score = 0;
}

function replay(){
  location.reload()
}


function matchScreen(){
  $('.game-screen').css("background-image", "none");
  $('.game-screen').html("Thats correct!").hide().fadeIn();

  setTimeout(clearMatchScreen, 800)
  function clearMatchScreen() {     
    clearScreen();
    generatePlayerArray();
  }
}

//make array of user choices
function userChoice(element){
  event.preventDefault();
  if(!finished) return false;
  finished = false;

  var picLink = (emojis[(element.toElement.id)-1].src)
  var pic = emojis[(element.toElement.id)-1];

  playerArray.push(parseInt(element.toElement.id));
  console.log(playerArray);

  if (playerArray.length !== gameArray.length){
    clearScreen();

    $('.game-screen').css("background-image", "url("+picLink+")");

    $('ol.player-selection-bar').prepend("<li class='emojis-icon' src="+pic.src+" style='background-image:url("+pic.src+");width:45px;height:45px;' id="+ pic.value +">"+pic.value+"</li>");
    console.log(pic)
  } else {
    clearScreen();
    $('.game-screen').css("background-image", "url("+picLink+")");

    $('ol.player-selection-bar').prepend("<li class='emojis-icon' src="+pic.src+" style='background-image:url("+pic.src+");width:45px;height:45px;' id="+ pic.value +">"+pic.value+"</li>");
    setTimeout(clearAndCheckMatch, 800)
    function clearAndCheckMatch() {     
      clearScreen();
      checkMatch();
    }
  }
};

function clearPlayerSelection(){
 $('ol.player-selection-bar').html('');
}

function checkMatch(){
  finshed = true;

  var playerArrayString = playerArray.toString();
  var gameArrayString = gameArray.toString();

  for (var i = 0; i < playerArray.length; i++) {
    if (playerArrayString === gameArrayString){
      score ++;
      roundNumber++;
      playerArray=[];
      clearPlayerSelection();
      matchScreen();

    }else{
      roundNumber =3;
      playerArray=[];
      gameArrayString=[];
      gameArray = [];
      clearPlayerSelection();
      gameOverScreen();
    }
  };
};
};
});












