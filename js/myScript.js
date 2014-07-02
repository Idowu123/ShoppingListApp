$(document).ready(function(){

    $('#add').click(function(){
        var toAdd = $('#newitem').val();
        $('.list').append('<li class="additem">' + '<input type="checkbox" id="checkListItem"/>' 
            + toAdd + '<input type="submit" value="delete" id="mydelete">'+ '</li>');

        $('#newitem').val("").focus();

    });

 //    $( "input[type='text']" ).change(function() {
 //  	// Check input( $( this ).val() ) for validity here
	// });


    $('#newitem').keyup(function(event) {
	    if (event.keyCode == 13) {
	    	event.preventDefault();
	 		$('#add').click();
	    }
	});
	


	$('.list, .delist').on('click', '#mydelete', function(){
  		$(this).parent().hide('slow').remove();
    });


	$('.listpg').on('change', 'input[type=checkbox]', function(){
		if ($(this).is(":checked"))
		{
			console.log("this is good");
			$(this).parent().appendTo(".delist");
		}
		else{
			$(this).parent().appendTo(".list");
		}

	});
	

    



});

// wireframe

