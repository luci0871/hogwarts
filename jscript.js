"use strict"

window.addEventListener("DOMContentLoaded", start);

/* ---------------------------------------FILTERS------------------------------------------------------------------------------------- */

function filterGry(){
    let onlyGry = allStudents.filter(displayGry);
    displayList(onlyGry)
    //filter counter
    document.querySelector(".gryfNumber").textContent = `Gryffindor (${onlyGry.length})`;
    function displayGry(student){
    return student.house === "Gryffindor";
  } 
  console.log(onlyGry)
  }
  function filterSly(){
    let onlySly = allStudents.filter(displaySly);
    displayList(onlySly)
    //filter counter
    document.querySelector(".slyNumber").textContent = `Slytherin (${onlySly.length})`;
    function displaySly(student){
    return student.house === "Slytherin";
  } 
  }
  function filterHuf(){
    let onlyHuf = allStudents.filter(displayHuf);
    displayList(onlyHuf)
    //filter counter
    document.querySelector(".huffNumber").textContent = `Hufflepuff (${onlyHuf.length})`;
    function displayHuf(student){
    return student.house === "Hufflepuff";
  } 
  }
  function filterRav(){
    let onlyRav = allStudents.filter(displayRav);
    displayList(onlyRav)
    //filter counter
    document.querySelector(".ravNumber").textContent = `Ravenclaw (${onlyRav.length})`;
    function displayRav(student){
    return student.house === "Ravenclaw";
  } 
  }
  function filterAll(){
  displayList(allStudents)
  //filter counter
  document.querySelector(".totalNumber").textContent = `Total (${allStudents.length})`;
  }
  