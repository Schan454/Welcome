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

updated on November 11, 2018 at 10:02 PM
 */


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

  if( isNaN(rowStart))
  {
     alert("Entry must be a numbers");
     return;
  }

  // error handling for input

  table += '<tr>';
  table += '<td>' + " " + '</td>'
  for (var init = colStart; init <= colEnd; init ++)
  {
    table += '<td>' + init + ' </td>';
    // intital multiplier
  }
  table += '</tr>';
  for (var r = rowStart; r <= rowEnd; r++)
  {
    table += '<tr>';
      table += '<td>' + r + '</td>';
      // intial multiplicand
    for (var c = colStart; c <= colEnd; c++)
    {
      table += '<td>' + c*r + '</td>';
      // all the multiplied values
    }
    table += '</tr>';
  }
  //This is an attempt at making the chart have alternating colors
  /*
  var row = table.getElementsByTagName ('tr');
  for (var i = 0;; i< row.length; i++;)
    {
      if ( i % 2 = 0)
      {
      row[i].style.backgroundColor =  #AEB2BD;
      }
    else
      {
      row[i].style.backgroundColor =  #FFFFFF;
      }
    }
*/

  document.getElementById("table").innerHTML = table;
}
