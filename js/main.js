$(document).ready(function(){ 	

$('#sendFlowers').ketchup();
$("#wrapper").show();
$('#date').datepicker({beforeShowDay:  $.datepicker.noWeekends, onSelect: function(dateText, inst) {$(".ketchup-error").hide();}});


$("#request").hide();
$("#error").hide();

 $('input[type=radio]').live('change', function() { 
 	$(".ketchup-error").hide();
 });

$('#date').on("focusout", function(){
	$(".ketchup-error").hide();
})

 

$(".ok").on("click", function(){
	$('#request').fadeOut('slow', function() {
			$("#request").hide();
			$('#sendFlowers').fadeIn('slow', function() {
				$("#sendFlowers").show();
			});
	});
});

$("#errorOk").on("click", function(){
	$('#error').fadeOut('slow', function() {
			$("#error").hide();
			$('#sendFlowers').fadeIn('slow', function() {
				$("#sendFlowers").show();
			});
	});
});

	$("#sendFlowers").on("submit", function(){
	
	
	if($('#toFirst').val() == "" || $('#fromFirst').val() == "" || $('#toLast').val() == "" || $('#fromLast').val() == "" || $('#email').val() == "" || $('#date').val() == "" ||  $("#flowers").checked== false){
		
	}else{
		$.ajax({
			url: 'php/emailForm.php',
		  type: 'POST',
		  dataType: 'json',
		  data: {
		    flowers: $("input[@name=flowers]:checked").val(),
		    toFirst: $("#toFirst").val(),
		     toLast: $("#toLast").val(),
		    fromFirst: $("#fromFirst").val(),
		    fromLast: $("#fromLast").val(),
		    email: $("#email").val(),
		    date: $('#date').val()
		  },
		  success: function(r) {
		  $('#sendFlowers').fadeOut('slow', function() {
		  		$(".ketchup-error").hide();
		         $("#sendFlowers").hide();
		         $('#request').fadeIn('slow', function() {
		               $("#request").show();
		               $("input:radio").attr("checked", false);
		               $("#toFirst").val('');
		               $("#fromFirst").val('');
		               $("#toLast").val('');
		               $("#fromLast").val('');
		                $("#email").val('');
		                $('#date').val('');
		              });
		       });
		  	 return false;
		  },
		  error: function(data) {
		  $('#sendFlowers').fadeOut('slow', function() {
		  		$(".ketchup-error").hide();
		         $("#sendFlowers").hide();
		         $('#error').fadeIn('slow', function() {
		               $("#error").show();
		               $("input:radio").attr("checked", false);
		               $("#toFirst").val('');
		               $("#fromFirst").val('');
		               $("#toLast").val('');
		               $("#fromLast").val('');
		                $("#email").val('');
		                $('#date').val('');
		              });
		       });
		    return false;
		  }
		});
	}
	 return false;
	});
});