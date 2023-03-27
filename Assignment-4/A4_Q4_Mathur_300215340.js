/* author:Rakshita Mathur
Student id: 300215340
Course: csi 3140
Assignment: 4 Question 4 JS*/

var dragImage = document.getElementById('drag-image');
var isDragging = false;
var currentX;
var currentY;
var initialX;
var initialY;
var offsetX = dragImage.offsetLeft;
var offsetY = dragImage.offsetTop;

dragImage.addEventListener('mousedown', function(e) {
	isDragging = true;

	initialX = e.clientX - offsetX;
	initialY = e.clientY - offsetY;
});

document.addEventListener('mousemove', function(e) {
	if (!isDragging) {
		return;
	}

	currentX = e.clientX - initialX;
	currentY = e.clientY - initialY;

	dragImage.style.left = currentX + 'px';
    dragImage.style.top = currentY + 'px';
});

document.addEventListener('mouseup', function(e) {
isDragging = false;
});
