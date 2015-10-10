// Emoji Game
// - find emoji files*
// - create array of emojis, create keyboard
// - var emokis = [{name: 'apple', url: "url"},
//                 {name: 'oragne', url: "url"}]

// for eachh.emoji(emoji, addToPage)

// function addTopage(i, emoji){
//     $('.emoji-grid').prepend(
//     '<li class =' emoji.name)> +
//     emoji.value +
//     '</li>'
// }

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
                {name: "one", value:1, src: "../emojis/1.png"},
                {name: "two", value:2, src:"../emojis/2.png"},
                {name: "three", value:3, src:"../emojis/3.png"},
                {name: "four", value:4, src:"../emojis/4.png"},
                {name: "five", value:5, src:"../emojis/5.png"},
                {name: "six", value:6, src:"../emojis/6.png"},
                {name: "seven", value:7, src:"../emojis/7.png"},
                {name: "eight", value:8, src:"../emojis/8.png"},
                {name: "nine", value:9, src:"../emojis/9.png"},
                {name: "ten", value:10, src:"../emojis/10.png"},
                {name: "eleven", value:11, src:"../emojis/11.png"},
                {name: "twelve", value:12},
                {name: "thirteen", value:13},
                {name: "fourteen", value:14},
                {name: "fifteen", value:15},
                {name: "sixteen", value:16},
                {name: "seventeen", value:17},
                {name: "eighteen", value:18},
                {name: "nineteen", value:19},
                {name: "twenty", value:20},
                {name: "twentyone", value:21},
                {name: "twentytwo", value:22},
                {name: "twentythree", value:23},
                {name: "twentyfour", value:24},
                {name: "twentyfive", value:25}];

 var shuffledEmojis = [
                {name: "one", value:1, src: "../emojis/1.png"},
                {name: "two", value:2, src:"../emojis/2.png"},
                {name: "three", value:3, src:"../emojis/3.png"},
                {name: "four", value:4, src:"../emojis/4.png"},
                {name: "five", value:5, src:"../emojis/5.png"},
                {name: "six", value:6, src:"../emojis/6.png"},
                {name: "seven", value:7, src:"../emojis/7.png"},
                {name: "eight", value:8, src:"../emojis/8.png"},
                {name: "nine", value:9, src:"../emojis/9.png"},
                {name: "ten", value:10, src:"../emojis/10.png"},
                {name: "eleven", value:11, src:"../emojis/11.png"},
                {name: "twelve", value:12},
                {name: "thirteen", value:13},
                {name: "fourteen", value:14},
                {name: "fifteen", value:15},
                {name: "sixteen", value:16},
                {name: "seventeen", value:17},
                {name: "eighteen", value:18},
                {name: "nineteen", value:19},
                {name: "twenty", value:20},
                {name: "twentyone", value:21},
                {name: "twentytwo", value:22},
                {name: "twentythree", value:23},
                {name: "twentyfour", value:24},
                {name: "twentyfive", value:25}];

 var playerArray = [];                


 $('.keyboard').on("click", userChoice)

 shuffle(shuffledEmojis);

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
  $('.keyboard').prepend("<li class='emojis-icon',  id="+ emojis.value +">"+emojis.value+"</li>");
  populateScreen();
}

//populate the screeen with a random emoji object value.
function populateScreen(){
  var randomObj = emojis[Math.floor(Math.random()*shuffledEmojis.length)]
  return $('.game-screen').html(randomObj.value);
};

//make array of user choices
function userChoice(element){
event.preventDefault();

console.log(element.toElement.id)
playerArray.push(parseInt(element.toElement.id));
console.log(playerArray);
checkMatch();
}

function checkMatch(){
  for (var i = 0; i < playerArray.length ; i++) {
    if (playerArray[i] === shuffledEmojis[i].value){
      console.log("match")
    }else{
        console.log("not match")
      }
  };
}




});











