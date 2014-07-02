$(document).ready(function(){

    $('#add').click(function(){
        var toAdd = $('#newitem').val();
        $('.list').append('<li class="additem">' + '<input type="checkbox" id="checkListItem"/><label>' 
            + toAdd + '</label><button id="myedit">edit</button>' +
            '<input type="submit" value="delete" id="mydelete">'+ '</li>');

        $('#newitem').val("").focus();

    });

    $('#newitem').keyup(function(event) {
	    if (event.keyCode == 13) {
	    	event.preventDefault();
	 		$('#add').click();
	    }
	});
	

	$('.list, .delist').on('click', '#mydelete', function(){
  		$(this).parent().remove();
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
	

	$('.list, .delist').on('click', '#myedit', function(){
		var item = $(this).prev().text();
		$('#newitem').val(item);
		$(this).parent().remove();
	});
    
});

