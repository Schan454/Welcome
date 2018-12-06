/*
File: tableGenerator.js
91.461 Assignment: Multiplication Table Generator
created by : Stanley Chan
file created : 11/15/18
This file is the html for the Multiplication Table Generator, that can take user
input interval lower first then higher, and dynamicly create a table based on the intervals
I intended to add more color to the table but am unable to figure out how to
configure the properties of each cell.

some notes: In this version of the multiplication table generator I have limited the input valuies from -9 to 9.
My main reasoning is to keep the table simpler, but also for some reason my tables bug out when the range goes higher than 9.
I have implemented thee slider with the text input working alongside it. 
The table should be dynammicly generated when the ranges are changed manually or by the slider.
For the tab I have attempted it, but have not fully understood how to implement it, I am keeping it to show that I tried it.

Permmission from Professor Wenjin Zhou that my duedate is extended for 1 day until 12/5 .
Please contact her for confirmation.
updated on December 5, 2018 at 10:02 PM
 */
 $(function() {
	 var currentTabs = 0;
   // activates the validator based on the class in the html
   $("#form").validate({

   });
   $( "#tabs" ).tabs();

   addSliders();
   

 });

function addSliders(){
	//***********************************************************
	//*********************sliders*******************************
	//***********************************************************
	$("#slider1").slider({
		min : -9,
		max : 9,
		value: 0,
		slide: function(event,ui){
		$("#mutiplicandStart").val(ui.value);
		create();
		}
	});

	$("#slider2").slider({
		min : -9,
		max : 9,
		value: 0,
		slide: function(event,ui){
		$("#mutiplicandEnd").val(ui.value);
		create();
		}
	});

	$("#slider3").slider({
		min : -9,
		max : 9,
		value: 0,
		slide: function(event,ui){
		$("#multiplierStart").val(ui.value);
		create();
		}
	});

	$("#slider4").slider({
		min : -9,
		max : 9,
		value: 0,
		slide: function(event,ui){
		$("#multiplierEnd").val(ui.value);
		create();
		}
	});
	// each slider has a range from 0 to 9
	// moving the slider changges the input box values aswell
	//***********************************************************
	
	//***********************************************************
	//*****************input box to slider***********************
	//***********************************************************
	$("#mutiplicandStart").change(function() {
		$("#slider1").slider("value", $(this).val());
		create();
	});
		$("#mutiplicandEnd").change(function() {
		$("#slider2").slider("value", $(this).val());
		create();
	});
		$("#multiplierStart").change(function() {
		$("#slider3").slider("value", $(this).val());
		create();
	});
		$("#multiplierEnd").change(function() {
		$("#slider4").slider("value", $(this).val());
		create();
	});
	// this section links the input boxes with the slider, 
	//so when the input is manually inputted the slider changes
	//aswell once user clicks away or presses enter
	//***********************************************************

}

'use strict';

function create() {
  var table = '';
//  table.style.color ="white";
  var rowStart = document.getElementById("mutiplicandStart").value;
  console.log(rowStart);
  var rowEnd = document.getElementById("mutiplicandEnd").value;
  console.log(rowEnd);
  var colStart = document.getElementById("multiplierStart").value;
  console.log(colStart);
  var colEnd = document.getElementById("multiplierEnd").value;
  console.log(colEnd);
  // retreiving all the values from the form and outputing to console for reference
  if(rowStart > rowEnd ){
	  //console.log("rowStart > rowEnd || rowEnd < rowStart" );
      var temp = rowEnd;
      rowEnd = rowStart;
      rowStart = temp;
	 // console.log("rowStart > rowEnd || rowEnd < rowStart || temp:" +temp);
      //swaping start and end to accept inputs that are in the wrong start or end

  }
  if( colStart > colEnd){
	  // console.log("colEnd < colStart || colStart > colEnd");
    var temp2 = colEnd;
    colEnd = colStart;
    colStart = temp2;
    //swaping start and end to accept inputs that are in the wrong start or end
  }

  if( isNaN(rowStart)||isNaN(rowEnd)||isNaN(colEnd)||isNaN(colStart))
  {
     return;
  }

  // error handling for input
  var colorSkip = 0;
  table += "<tr >";
  table += '<td style ="background-color: red ">' + " " + '</td>'
  for (var init = colStart; init <= colEnd; init ++)
  {
    table += '<td style ="background-color: green">' + init + ' </td>';
    // intital multiplier
  }

  table += '</tr>';
  for (var r = rowStart; r <= rowEnd; r++)
  { //console.log("rowStart is"+ rowStart +"rowEnd is" + rowEnd);
    table += '<tr>';
      table += '<td style ="background-color: green">' + r + '</td>';
      // intial multiplicand
    for (var c = colStart; c <= colEnd; c++)
    {//console.log("colStart is"+ colStart +"colEnd is" + colEnd);
      if(colorSkip%2 == 0){
        table += '<td style ="background-color: grey">' + c*r + '</td>';
      }
      else{
        table += '<td style ="background-color: white">' + c*r + '</td>';
      }

      // all the multiplied values
      colorSkip++;
    }
    table += '</tr>';
    // I used inline css as that is the only way i know how to to style the table
  }

  document.getElementById("table").innerHTML = table;

}
function saveTab(){
	if (currentTabs > 10){
	 alert("There are already 10 tabs, no more can be saved.");
	 return;
	}
	document.getElementsByClassName("table")
currentTabs++;
//  theoretically this button should save the tablle you currently have and get ready to save in the next tab.
//I tried to limit the tabs to 10
}
function deleteTab(){ 

currentTabs--;
// this button should delete the current tab
}

function deleteAll(){
	
	currentTabs = 0;
// This button clears all the tables 
}