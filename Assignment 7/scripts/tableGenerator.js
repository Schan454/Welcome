/*
File: tableGenerator.js
91.461 Assignment: Multiplication Table Generator
created by : Stanley Chan
file created : 11/15/18
This file is the html for the Multiplication Table Generator, that can take user
input interval lower first then higher, and dynamicly create a table based on the intervals
I intended to add more color to the table but am unable to figure out how to
configure the properties of each cell.

I have not added an error catch if the end numbers entered are higher than start numbers
But the forms should only allow numbners to be inputed.

updated on November 25, 2018 at 10:02 PM
 */
 $(function() {
   // activates the validator based on the class in the html
   $("#form").validate();
 });



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
  if(rowStart > rowEnd){
      var temp = rowEnd;
      rowEnd = rowStart;
      rowStart = temp;
      //swaping start and end to accept inputs that are in the wrong start or end

  }
  if(colEnd < colStart){
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

  table += "<tr >";
  table += '<td style ="background-color: red ">' + " " + '</td>'
  for (var init = colStart; init <= colEnd; init ++)
  {
    table += '<td style ="background-color: green">' + init + ' </td>';
    // intital multiplier
  }
  var colorSkip = 0;
  table += '</tr>';
  for (var r = rowStart; r <= rowEnd; r++)
  {
    table += '<tr>';
      table += '<td style ="background-color: green">' + r + '</td>';
      // intial multiplicand
    for (var c = colStart; c <= colEnd; c++)
    {
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
    // i used inline css as that is the only way i know how to to style the table
  }

  document.getElementById("table").innerHTML = table;
}
