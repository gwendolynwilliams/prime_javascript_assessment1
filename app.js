// Assessment

// x When the page loads, have a button on the DOM that says 'generate'. 
// x Upon clicking on that button, append a new container onto the DOM. 
// x That container should have two buttons, one that reads 'delete', the other that reads 'change'. 
// x Additionally, there should be text that provides a number. 
// x The number should be the number of times the 'generate' button has been clicked.

// The delete button should delete JUST the container that the button is in. 
// The change button should change the background-color of the container to red. 
// x The default or 'normal' state of the background-color should be yellow. 
// Clicking the button a second time should change it back to yellow, 3rd time red, 4th time yellow, etc.

var i=0; 

$(document).ready(function() {

	$('#generate').on('click', function() {
		i++;
		var buttonText = '<div id="deleteButton"><button id="delete">delete</button></div><div id="changeButton"><button id="change">change</button></div><br />';
		
		// adds delete & change buttons
		$('#button').html(buttonText + i);
		
		//passing in data key=id, value=deleteMe
		$('#deleteButton').children().first().data('id', 'deleteMe');
	});


	// can't get the listener to listen!
	// I know it's somewhere in my data method, just can't figure it out
	$('#deleteButton').on('click', function() {
		//var selected = $(this).data('id');
		console.log('Delete Button clicked!');
	});

	$('#changeButton').on('click', function() {
		// change background color from red to yellow
		console.log('change button clicked!');
	});


})
