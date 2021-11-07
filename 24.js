var myElement =
document.querySelector('button');
myElement.addEventListener('click', function1);
myElement.addEventListener('click', function2);
function function1() {
alert("Merhaba");
}
function function2() {
console.log("Merhaba2");
}


var num1=document.querySelector( '#numberone');
var num2 = document.querySelector('#numberTwo');
var sum =document.querySelector('#sum');

num1.addEventListener('input', topla);
num2.addEventListener('input', topla);

function topla (){
var one = parseInt(num1.value) || 0;
var two = parseInt(num2.value) || 0;
sum.innerHTML = "Toplam Sonucu: " + (one + two);
}



var accordion = document.querySelector('#accordion');
var titles = accordion.getElementsByTagName('h2');
for (i=0; i<titles.length; i++){
titles[i].addEventListener('click', displayAccordion);
}
function displayAccordion(){
content = this.nextSibling.nextSibling;
if (content.style.display != 'block'){
content.style.display = 'block'
} else {
content.style.display = 'none'; 
}
}


var square = document.querySelector('#square');
var rectangle = document.querySelector('#rectangle');
square.addEventListener('click', clickSquare);
rectangle.addEventListener('click', clickRectangle);

function clickSquare (event){
event. stopPropagation();

console.log('Square Clicked');
}
function clickRectangle(event){

console.log('Rectangle clicked');
}


var thumb1 =document.getElementById("thumb1");

var thumb2=document.getElementById("thumb2");

var thumb3 =document.getElementById("thumb3");

thumb1.addEventListener('click', showImage);
thumb2.addEventListener('click', showImage);
thumb3.addEventListener('click', showImage);

function showImage () 
{
var allBigImages = document.querySelectorAll("#image1, #image2, #image3");

for (x = 0; x < allBigImages.length; x++) {
    allBigImages[x].className ="hide"  ; 
}
var imgID = this.attributes["data-pic"].value;
var picture = document.getElementById(imgID);
if (picture.className === "hide") {
picture.className = "";
}
else {
picture.className = "hide" ;
}
}
