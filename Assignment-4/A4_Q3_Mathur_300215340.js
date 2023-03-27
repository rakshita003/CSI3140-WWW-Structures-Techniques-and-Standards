/* author:Rakshita Mathur
Student id: 300215340
Course: csi 3140
Assignment: 4 Question 3 JS*/

// Get the HTML5 document's body element
const body = document.querySelector('body');

// Attach an event listener to the body element for mouse clicks
body.addEventListener('click', function(event) {

  // Check if the Shift key was held during the mouse click
  if (event.shiftKey) {
    alert(`Shift key was held during ${event.type} event`);
  }

  // Check if the Ctrl key was held during the mouse click
  if (event.ctrlKey) {
    alert(`Ctrl key was held during ${event.type} event`);
  }

});
