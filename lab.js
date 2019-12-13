// Select color input
var color = document.querySelector("#colorPicker") ;
// Select size input
var form = document.querySelector("#sizePicker")         ;
var hieght = document.querySelector("#inputHeight")      ;
var width = document.querySelector("#inputWidth")        ;
form.addEventListener("submit",function(event){
  event.preventDefault() ;
  console.log("hight:" + hieght.value) ;
  console.log("width:" + width.value) ;
  makeGrid(hieght.value , width.value) ;
}) ;
var myTable = document.querySelector("#pixelCanvas") ;
var rstButton = document.querySelector("button") ;
rstButton.addEventListener("click",function(){
  tds = document.getElementsByTagName("td") ;
  for(var j = 0 ; j <= tds.length ;j++)
    {
      tds[j].removeAttribute("style") ;
    }
  });
// When size is submitted by the user, call makeGrid()

function makeGrid(hieght, width) {
   var intable = " " ;
    for(var hr = 0 ; hr < hieght ; hr++ )
    {
        intable += '<tr>'  ;
        for(var cw = 0 ; cw < width ; cw++)
        {
            intable += "<td>" + " </td>"
        }
        intable += '</tr>' ;
    }
    myTable.innerHTML =intable ;
    /////
    tds = document.getElementsByTagName("td") ;
    var gridColor = 0 ;
    for(var j = 0 ; j <= tds.length ;j++)
    {
      //tds[j].style.color = color.value ;
      tds[j].addEventListener("click",function(event){
        //event.target.removeAttribute("style") ;
        if (gridColor === 0 ){
          event.target.style.backgroundColor = color.value ;
          gridColor = 1 ;  
        }
        else{
          event.target.style.backgroundColor = "white" ;
          gridColor = 0 ;
        } 
      });
       
    } 
  } 
