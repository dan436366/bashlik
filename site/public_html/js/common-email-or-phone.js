$( document ).ready(function() {
    $("#submit-email").click(
		function(){
			sendAjaxForm('email-or-phone-form', 'telegram-email.php');
			return false; 
		}
	);
});
 
function sendAjaxForm(ajax_form, url) {
	var emailPhone = $("#emailPhone").val();
	if(emailPhone !== ""){
    $.ajax({
        url:     url, //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        data: {emailPhone: emailPhone},  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        	console.log("send email");
			$(".alert-message-thanks").css("display", "block");
    	},
 	})}
	 else{
		 $(".alert-message").css("display", "block");
	 }
}