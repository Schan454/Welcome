/*
This is the scrabble.js file 
Stanley Chan

This file should contain all the javascript used in my assignment 9



*/
const HAND_LIMIT = 7;


/*
 *** js file taken from the assignment, I have no clue how to include another whole js file in this 
 *** so I coopied over the entire file to use.
 
 *  File:  /~heines/91.461/91.461-2015-16f/461-assn/Scrabble_Pieces_AssociativeArray_Jesse.js
 *  Jesse M. Heines, UMass Lowell Computer Science, heines@cs.uml.edu
 *  Copyright (c) 2015 by Jesse M. Heines.  All rights reserved.  May be freely 
 *    copied or excerpted for educational purposes with credit to the author.
 *  updated by JMH on November 21, 2015 at 10:27 AM
 *  updated by JMH on November 25, 2015 at 10:58 AM to add the blank tile
 *  updated by JMH on November 27, 2015 at 10:22 AM to add original_distribution
 *** edited by Stanley Chan on 12/17/18
 */
 
var ScrabbleTiles = [] ;
ScrabbleTiles["A"] = { "value" : 1,  "original_distribution" : 9,  "number_remaining" : 9, "letter" : "A"  } ;
ScrabbleTiles["B"] = { "value" : 3,  "original_distribution" : 2,  "number_remaining" : 2  , "letter" : "B" } ;
ScrabbleTiles["C"] = { "value" : 3,  "original_distribution" : 2,  "number_remaining" : 2  , "letter" : "C" } ;
ScrabbleTiles["D"] = { "value" : 2,  "original_distribution" : 4,  "number_remaining" : 4  , "letter" : "D" } ;
ScrabbleTiles["E"] = { "value" : 1,  "original_distribution" : 12, "number_remaining" : 12 , "letter" : "E" } ;
ScrabbleTiles["F"] = { "value" : 4,  "original_distribution" : 2,  "number_remaining" : 2  , "letter" : "F" } ;
ScrabbleTiles["G"] = { "value" : 2,  "original_distribution" : 3,  "number_remaining" : 3  , "letter" : "G" } ;
ScrabbleTiles["H"] = { "value" : 4,  "original_distribution" : 2,  "number_remaining" : 2  , "letter" : "H" } ;
ScrabbleTiles["I"] = { "value" : 1,  "original_distribution" : 9,  "number_remaining" : 9  , "letter" : "I" } ;
ScrabbleTiles["J"] = { "value" : 8,  "original_distribution" : 1,  "number_remaining" : 1  , "letter" : "J" } ;
ScrabbleTiles["K"] = { "value" : 5,  "original_distribution" : 1,  "number_remaining" : 1  , "letter" : "K" } ;
ScrabbleTiles["L"] = { "value" : 1,  "original_distribution" : 4,  "number_remaining" : 4  , "letter" : "L" } ;
ScrabbleTiles["M"] = { "value" : 3,  "original_distribution" : 2,  "number_remaining" : 2  , "letter" : "M" } ;
ScrabbleTiles["N"] = { "value" : 1,  "original_distribution" : 6,  "number_remaining" : 6  , "letter" : "N" } ;
ScrabbleTiles["O"] = { "value" : 1,  "original_distribution" : 8,  "number_remaining" : 8  , "letter" : "O" } ;
ScrabbleTiles["P"] = { "value" : 3,  "original_distribution" : 2,  "number_remaining" : 2  , "letter" : "P" } ;
ScrabbleTiles["Q"] = { "value" : 10, "original_distribution" : 1,  "number_remaining" : 1  , "letter" : "Q" } ;
ScrabbleTiles["R"] = { "value" : 1,  "original_distribution" : 6,  "number_remaining" : 6  , "letter" : "R" } ;
ScrabbleTiles["S"] = { "value" : 1,  "original_distribution" : 4,  "number_remaining" : 4  , "letter" : "S" } ;
ScrabbleTiles["T"] = { "value" : 1,  "original_distribution" : 6,  "number_remaining" : 6  , "letter" : "T" } ;
ScrabbleTiles["U"] = { "value" : 1,  "original_distribution" : 4,  "number_remaining" : 4  , "letter" : "U" } ;
ScrabbleTiles["V"] = { "value" : 4,  "original_distribution" : 2,  "number_remaining" : 2  , "letter" : "V" } ;
ScrabbleTiles["W"] = { "value" : 4,  "original_distribution" : 2,  "number_remaining" : 2  , "letter" : "W" } ;
ScrabbleTiles["X"] = { "value" : 8,  "original_distribution" : 1,  "number_remaining" : 1  , "letter" : "X" } ;
ScrabbleTiles["Y"] = { "value" : 4,  "original_distribution" : 2,  "number_remaining" : 2  , "letter" : "Y" } ;
ScrabbleTiles["Z"] = { "value" : 10, "original_distribution" : 1,  "number_remaining" : 1  , "letter" : "Z" } ;
ScrabbleTiles["_"] = { "value" : 0,  "original_distribution" : 2,  "number_remaining" : 2  , "letter" : "_" } ;






function createDeck(deck){
// this function creates an array that contains all the available tiles to be drawn
// There should be a much easier way to insert all the tile into the array but I cannot figure anything else
// I have tried many  ways but cannot  iterate through the given array properly.
	for ( var i = 0 ; i < ScrabbleTiles["A"].number_remaining; i++){
		deck.push(ScrabbleTiles["A"].letter);
	}
		for ( var i = 0 ; i < ScrabbleTiles["B"].number_remaining; i++){
		deck.push(ScrabbleTiles["B"].letter);
	}
		for ( var i = 0 ; i < ScrabbleTiles["C"].number_remaining; i++){
		deck.push(ScrabbleTiles["C"].letter);
	}
		for ( var i = 0 ; i < ScrabbleTiles["D"].number_remaining; i++){
		deck.push(ScrabbleTiles["D"].letter);
	}
		for ( var i = 0 ; i < ScrabbleTiles["E"].number_remaining; i++){
		deck.push(ScrabbleTiles["E"].letter);
	}
		for ( var i = 0 ; i < ScrabbleTiles["F"].number_remaining; i++){
		deck.push(ScrabbleTiles["F"].letter);
	}
		for ( var i = 0 ; i < ScrabbleTiles["G"].number_remaining; i++){
		deck.push(ScrabbleTiles["G"].letter);
	}
		for ( var i = 0 ; i < ScrabbleTiles["H"].number_remaining; i++){
		deck.push(ScrabbleTiles["H"].letter);
	}
		for ( var i = 0 ; i < ScrabbleTiles["I"].number_remaining; i++){
		deck.push(ScrabbleTiles["I"].letter);
	}
		for ( var i = 0 ; i < ScrabbleTiles["J"].number_remaining; i++){
		deck.push(ScrabbleTiles["J"].letter);
	}	for ( var i = 0 ; i < ScrabbleTiles["K"].number_remaining; i++){
		deck.push(ScrabbleTiles["K"].letter);
	}
		for ( var i = 0 ; i < ScrabbleTiles["L"].number_remaining; i++){
		deck.push(ScrabbleTiles["L"].letter);
	}
		for ( var i = 0 ; i < ScrabbleTiles["M"].number_remaining; i++){
		deck.push(ScrabbleTiles["M"].letter);
	}
		for ( var i = 0 ; i < ScrabbleTiles["N"].number_remaining; i++){
		deck.push(ScrabbleTiles["N"].letter);
	}
		for ( var i = 0 ; i < ScrabbleTiles["O"].number_remaining; i++){
		deck.push(ScrabbleTiles["O"].letter);
	}	for ( var i = 0 ; i < ScrabbleTiles["P"].number_remaining; i++){
		deck.push(ScrabbleTiles["P"].letter);
	}	for ( var i = 0 ; i < ScrabbleTiles["Q"].number_remaining; i++){
		deck.push(ScrabbleTiles["Q"].letter);
	}
		for ( var i = 0 ; i < ScrabbleTiles["R"].number_remaining; i++){
		deck.push(ScrabbleTiles["R"].letter);
	}
		for ( var i = 0 ; i < ScrabbleTiles["S"].number_remaining; i++){
		deck.push(ScrabbleTiles["S"].letter);
	}
		for ( var i = 0 ; i < ScrabbleTiles["T"].number_remaining; i++){
		deck.push(ScrabbleTiles["T"].letter);
	}
		for ( var i = 0 ; i < ScrabbleTiles["U"].number_remaining; i++){
		deck.push(ScrabbleTiles["U"].letter);
	}
		for ( var i = 0 ; i < ScrabbleTiles["V"].number_remaining; i++){
		deck.push(ScrabbleTiles["V"].letter);
	}
		for ( var i = 0 ; i < ScrabbleTiles["W"].number_remaining; i++){
		deck.push(ScrabbleTiles["W"].letter);
	}
		for ( var i = 0 ; i < ScrabbleTiles["X"].number_remaining; i++){
		deck.push(ScrabbleTiles["X"].letter);
	}
		for ( var i = 0 ; i < ScrabbleTiles["Y"].number_remaining; i++){
		deck.push(ScrabbleTiles["Y"].letter);
	}
		for ( var i = 0 ; i < ScrabbleTiles["Z"].number_remaining; i++){
		deck.push(ScrabbleTiles["Z"].letter);
	}
		for ( var i = 0 ; i < ScrabbleTiles["_"].number_remaining; i++){
		deck.push(ScrabbleTiles["_"].letter);
	}
}

function Draw(deck, hand){
// this function lets the player to draw one tile
var randomNumber = Math.floor(Math.random() * deck.length);
	hand.push(deck[randomNumber]);
	deck.splice(randomNumber,1);
	console.log(randomNumber);
	console.log(hand);
}
function initialHand(deck, hand){
// initial 7 tile hand
	for( var i = 0; i < HAND_LIMIT; i++){
	Draw(deck, hand);
	}
	refreshHand(hand);
}
function discardTile(deck, hand, tile){
// discard tile for a new tile
	deck.push(hand[tile]);
	hand.splice(tile,1);
	Draw(deck, hand);
 
}
function refreshHand(hand){
// refresh the visual hand tiles
	$("#hand").html("");
	//empty the div named hand 
for( i = 0; i < HAND_LIMIT; i++){
	//fill in the hand with updated tiles
	if(hand[i] == "_"){
		$("#hand").append($("<img>",{id:"tiles",src:"img/Scrabble_Tile_Blank.jpg", class:"tile block", value:0}))
	
	}
	else{
		$("#hand").append($("<img>",{id:"tiles",src:"img/Scrabble_Tile_"+hand[i]+".jpg", class:"tile block",value:ScrabbleTiles[hand[i]]}))
	}
	$(".tile").draggable({
		revert: "valid",
		 refreshPositions: true,
    drag: function(event, ui) {
      ui.helper.removeClass("end-draggable");
      ui.helper.addClass("draggable");
    },
    stop: function(event, ui) {
      ui.helper.addClass("end-draggable");
      ui.helper.removeClass("draggable");
    }
		});
}

}
function reset(deck, hand){
// restart the game, reset deck, hand, and points
	for (i=0; i< hand.length; i++){
		deck.push(hand[i]);
	}
	hand.splice(0,7);
	initialHand(deck, hand);
	refreshHand(hand);
	points = 0;
	$("#ScoreBoard").html("");
	$("#ScoreBoard").html("Points: " + points) ;
}
function submit(deck, hand){
// submit word and gives new hand and clear board
	for (i=0; i< hand.length; i++){
		deck.push(hand[i]);
	}
	hand.splice(0,7);
	initialHand(deck, hand);
	refreshHand(hand);
	points = points + 1;
	$("#ScoreBoard").html("");
	$("#ScoreBoard").html("Points: " + points) ;
	
}
// main function running
$(function(){
	var points = 0;
	var multiplier =0;
	var deck = new Array();
	var hand = new Array();
	
	createDeck(deck);
	initialHand (deck, hand);
console.log("Points: " + $("tiles").value);
	$(".spaces").droppable({
		
	  drop: function( event, ui ) {
		  $(this).css('background-image', url(img/Scrabble_Tile_Blank.jpg));
         //$(this).parent().css('background-image', url(img/Scrabble_Tile_Blank.jpg));
			
			console.log("Points: " + points);
			
	  }
	
	}); 
console.log("Points: " + points);
	$("#submit").click(function(){
		//suibmit word and collect points
		submit(deck, hand);
			
		});
	$("#reset").click(function(){
		//reset button
			reset(deck,hand);
			console.log(deck);
		
		}); 
	console.log(deck.length);
	//Draw(deck);
	
	console.log(deck);
	
});