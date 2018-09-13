//biz logic
var add = function(number1, number2) {
	return number1 + number2;
};

//UI logic
$(document).ready(function() {
	$("#calc form").submit(function(event){

		var number1 = parseInt($("input#number1").val());
		var number2 = parseInt($("input#number2").val());

		// parseInt(number1).val();
		// parseInt(number2).val();
			// var number1 = parseInt("input#number1").val();
			// var number2 = parseInt("input#number2").val();
			//console.log(number1)

			var result = add(number1,number2);
			console.log(result);
			event.preventDefault();

	});



});

// $("form.calc").submit(function(event){
// 		var add = function(number1, number2) {
// 			return number1 + number2;
//
// 		var number1 = parseInt("input#numb1").val();
// 		var number2 = parseInt("input#numb2").val();
// 		console.log(number1)
//
// 		alert(add(number1,number2));
// 		console.log(number2)
// 		event.preventDefault();
//
// 	};
// });
