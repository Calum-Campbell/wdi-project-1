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

$(function(){

  var emojis = [
                {name: "one", value: 1},
                {name: "two", value: 2},
                {name: "three", value:3},
                {name: "four", value:4},
                {name: "five", value:5},
                {name: "six", value:6},
                {name: "seven", value:7},
                {name: "eight", value:8},
                {name: "nine", value:9},
                {name: "ten", value:10},
                {name: "eleven", value:11},
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
                {name: "twentyfive", value:25}]

  $.each(emojis, populateKeyboard);


function populateKeyboard(i, emojis){
  $('.keyboard').prepend("<li class='emojis-icon'>"+emojis.value+"</li>");
  populateScreen();
}


function populateScreen(){
  console.log("working");
  var randomObj = emojis[Math.floor(Math.random()*emojis.length)]
  return $('.game-screen').html(randomObj.value);
};
});











