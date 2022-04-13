// Created by: Logan Rodriguez
// Created on: Apr 2022
// This file contains the JS functions for index.html

function calculate () {
  //function for determining the volume

  //get side a from the text field
  let Radius = parseFloat(document.getElementById("radius").value)
  //Display the answer
  document.getElementById('answer').innerHTML = "The volume is " + (4/3 * Radius * Math.PI).toFixed(3) + "cm³"
}