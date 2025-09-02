



$( document ).ready(function() {
    $("#btn-send-request").click(
		function(){
			sendAjaxForm('leave-request_form', 'telegram.php');
			return false; 
			function sendAjaxForm(ajax_form, url) {
				var name = $("#user_name").val();
				var phone = $("#user_phone").val();
				var email = $("#user_commer").val();
				var userQuestion = $("#user_question").val();
				if(name !== "" && phone.includes("_") !== true){
				$.ajax({
					url:     url, //url страницы (action_ajax_form.php)
					type:     "POST", //метод отправки
					data: {user_name: name, user_phone: phone, user_commer: email,user_question: userQuestion},  // Сеарилизуем объект
					success: function(response) { //Данные отправлены успешно
						console.log("send it");
						$( "#btn-send-request" ).hide();
						$( ".alert-success" ).hide();
						$(".thanks__block").css("display", "block");
						$(".input-request-name, .input-request-phone").css("box-shadow", "0 0px 12px transparent");
					},
				 })}
				 else{
					 $(".alert-success").css("display", "block");
			
					 $(".input-request-name, .input-request-phone").css("box-shadow", "0 0px 12px red");
				 }
			}
		}
	);
});


 
$( document ).ready(function() {
    $("#submit-email").click(
		function(){
			sendAjaxForm('email-or-phone-form', 'telegram-email.php');
			return false; 
			function sendAjaxForm(ajax_form, url) {
				var emailPhone = $("#emailPhone").val();
				if(emailPhone !== ""){
				$.ajax({
					url:     url, //url страницы (action_ajax_form.php)
					type:     "POST", //метод отправки
					data: {emailPhone: emailPhone},  // Сеарилизуем объект
					success: function(response) { //Данные отправлены успешно
						console.log("send email");
						$(".alert-message").hide();
						$(".alert-message-thanks").css("display", "flex");

						const myTimeout = setTimeout(myGreeting, 4500);

						function myGreeting() {
						document.querySelector(".alert-message-thanks").style.display = "none"
						}
					},
				 })}
				 else{
					 $(".alert-message").css("display", "flex");
					 const myTimeout = setTimeout(myGreeting, 4500);

						function myGreeting() {
						document.querySelector(".alert-message").style.display = "none"
						}
				 }
			}
		}
	);
});



	 




// user_name: name, user_phone: phone,user_commer: type_service





$( document ).ready(function() {
    $("#only-phone-submit").click(
		function(){
			sendAjaxForm('only-phone-form', 'telegram-only-phone.php');
			return false; 
			function sendAjaxForm(ajax_form, url) {
				var onlyPhone = $("#onlyPhone").val();
				if(onlyPhone !== ""){
				$.ajax({
					url:     url, //url страницы (action_ajax_form.php)
					type:     "POST", //метод отправки
					data: {onlyPhone: onlyPhone},  // Сеарилизуем объект
					success: function(response) { //Данные отправлены успешно
						console.log("send phone");
						$(".alert-message-only-phone").hide();
						$(".alert-message-thanks-only-phone").css("display", "flex");

						const myTimeout = setTimeout(myGreeting, 4500);

						function myGreeting() {
						document.querySelector(".alert-message-thanks-only-phone").style.display = "none"
						}
					},
				 })}
				 else{
					 $(".alert-message-only-phone").css("display", "flex");
					 const myTimeout = setTimeout(myGreeting, 4500);

						function myGreeting() {
						document.querySelector(".alert-message-only-phone").style.display = "none"
						}
				 }
			}
		}
	);
});



 



window.addEventListener('scroll', reveal);

    function reveal(){
      var reveals = document.querySelectorAll('.fadeTransition');

      for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 50;

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
      }
    }


	window.addEventListener('scroll', revealSecond);

    function revealSecond(){
      var reveals = document.querySelectorAll('.fadeTransitionSecond');

      for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 80;

        if(revealtop < windowheight - revealpoint){
          reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
      }
    }