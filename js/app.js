var playerArray,
gameArray,
roundNumber,
score,
gameArrayObjects,
finished;

$(gameStart);

function gameStart(){
  clear();
  $.each(emojis, populateKeyboard);
  finished = false;

  $('ol.keyboard').on("click", userChoice);
  $('#start-button').on('click', generatePlayerArray);
  $('#rules-button').on('click', displayRules);
  $('.game-screen').on('click', '#replay-button', function(){
    clear();
    generatePlayerArray();
  })
}

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
  if (roundNumber === 3){
    var emoji1 = emojis[Math.floor(Math.random()*emojis.length)];
    var emoji2 = emojis[Math.floor(Math.random()*emojis.length)];
    var emoji3 = emojis[Math.floor(Math.random()*emojis.length)];

      gameArrayObjects.push(emoji1);
      gameArrayObjects.push(emoji2);
      gameArrayObjects.push(emoji3);
      gameArray.push(parseInt((emoji1).value));
      gameArray.push(parseInt((emoji2).value));
      gameArray.push(parseInt((emoji3).value));

      populateScreen();
    } else {
      var nextEmoji = emojis[Math.floor(Math.random()*emojis.length)];
      gameArrayObjects.push(nextEmoji);
      gameArray.push(parseInt(nextEmoji.value));
      populateScreen();
    }
  }

function populateScreen(){  
  finished = false;
  var counter = -1;

  var timer = setInterval(function(element) {
    counter ++;
    if (counter < roundNumber) {
      $('.game-screen').css("background-image", "url('"+gameArrayObjects[counter].src+"')").hide().fadeIn();
    } else {
      finished = true;
      clearScreenToGuess();
      clearInterval(timer);
    }
  }, 1000);
};


function clearScreenToGuess(){
  $('.game-screen').css("background-image", "none");
  $('.game-screen').html("Now You Guess").hide().fadeIn();
}

function clearScreen(){
  $('.game-screen').css("background-image", "none");
  $('.game-screen').html("");
  finished = true;
}

function gameOverScreen(){
  finished = false;
  $('.game-screen').html( "<ol class='game-over'>"+"<li id='replay-button'>Replay</li>"+"<liid='score'>Score: "+score+"</li></ol>");
  score = 0;
}

function clear(){
  playerArray = []; 
  gameArray   = []; 
  roundNumber = 3;   
  score       = 0;
  gameArrayObjects = [];       
  finished = true;
  setupScreen();  
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

function userChoice(element){
  event.preventDefault();
  if(!finished) return false;
  finished = false;

  var picLink = (emojis[(element.toElement.id)-1].src)
  var pic = emojis[(element.toElement.id)-1];

  playerArray.push(parseInt(element.toElement.id));

  if (playerArray.length !== gameArray.length){
    clearScreen();

    $('.game-screen').css("background-image", "url("+picLink+")");

    $('ol.player-selection-bar').prepend("<li class='emojis-icon' src="+pic.src+" style='background-image:url("+pic.src+");width:45px;height:45px;' id="+ pic.value +">"+pic.value+"</li>")
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