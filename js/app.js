// -populate a keyboard
// - generate an array with random order from the emoji array
// - get to show one and stop, and check if player input is ===
// - get player input in an array
// - check if playerArry[0] === gameArray [0] or somethng like that
// - Keep track of round numberand check up to array[round number]
// - Ifget it wrong clear all and game over


//NEED TO DO -
// not have to repeat the emojis array to create a new array
// Get clicked screen element to return its value
// input this value into an array
// Make the background of the keyboard = to the emojis.src value

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
  {name: "twentyfive", value:25, src:"./emojis/25.png"}];

  var shuffledEmojis = [
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
  {name: "twentyfive", value:25, src:"./emojis/25.png"}];

  var playerArray = []; 
  var gameArray = []; 
  var roundNumber = 1;              


  $('.keyboard').on("click", userChoice)

  shuffle(shuffledEmojis);
  populateScreen();

  // shuffle the emojis array
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    console.log(shuffledEmojis)
    return array;
  }


 // populate the keyboard with the shuffled emoji array
 $.each(emojis, populateKeyboard);



 function populateKeyboard(i, emojis){
  $('.keyboard').prepend("<li class='emojis-icon' src="+emojis.src+" style='background-image:url("+emojis.src+");width:156px;height:157px;' id="+ emojis.value +">"+emojis.value+"</li>");
}

//populate the screeen with a random emoji object value.
function populateScreen(){  
 var counter = -1;
 var timer = setInterval(function(element) {
  counter ++;
  if(counter < roundNumber){
   $('.game-screen').css("background-image", "url("+shuffledEmojis[counter].src)+")";
   gameArray.push(parseInt(shuffledEmojis[counter].value));
   console.log(counter);
   console.log(gameArray);
   console.log(roundNumber)
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
  // console.log(emojis[(element.toElement.id)-1])
  var picLink = (emojis[(element.toElement.id)-1].src)
  // $('.game-screen').css("background-image", "url("+picLink+")");

  if (playerArray.length !== gameArray.length){
    playerArray.push(parseInt(element.toElement.id));
    $('.game-screen').css("background-image", "url("+picLink+")");
    console.log(playerArray);
    console.log(gameArray);
  }else{
    checkMatch();
  }
}

function checkMatch(){
  for (var i = 0; i < playerArray.length; i++) {
    if (playerArray[i] === gameArray[i]){
      
      roundNumber++;
      gameArray =[];
      playerArray=[];
      console.log("next match");
      populateScreen();

    }else{
      console.log("not match")
      roundNumber =0;
      gameArray =[];
      playerArray=[];
    }
  };
}

});











