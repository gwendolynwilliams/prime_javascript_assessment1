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

	$('.generate').on('click', function() {
		i++;
		console.log(i);
		
		var $el = $('.container').children().last(); 
		$el.append('<div class="buttons"><button class="delete">Delete</button><button class="change">Change</button><p>' + i + '</p></div>');


		// delete button
		$('.container').on('click', '.delete', function() {
	  		$(this).parent().remove();     
		});

		// change button
		$('.button').on('click', '.change', function() {
			$(this).parent().toggleClass('red');     
		})
		
	});

})




