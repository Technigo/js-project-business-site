
/*
This is the original code

Get the div, and when the user clicks on it, execute myFunction
document.getElementById("hidden-ham").onclick = function () { hamFunction() };

hamscript toggles between adding and removing the show class, which is used to hide and show the dropdown content 

function hamFunction() {
  document.getElementById("dropdown").classList.toggle("show");
  document.getElementById("bar-one").classList.toggle("change");
  document.getElementById("bar-two").classList.toggle("change");
  document.getElementById("bar-three").classList.toggle("change");
}
*/

/*improved code! with help from chatGPT. adds an event to listen for "click" on the element with id "hidden-ham". id with same class toggle are put in an array where they are cycled through to either remove or add the class "change"*/
document.getElementById("hidden-ham").addEventListener("click", function () {
  document.getElementById("dropdown").classList.toggle("show");
  ["bar-one", "bar-two", "bar-three"].forEach(id =>
    document.getElementById(id).classList.toggle("change")
  );
});