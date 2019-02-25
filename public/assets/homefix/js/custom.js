// JavaScript Document
$.fn.serializeObject = function() {
	"use strict";
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name]) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};
function formToJSON(form){
	"use strict";
	return form.serializeObject();
}

function isJSON(str){
	"use strict";
    try{
        JSON.parse(str);
        return true;
    }
    catch (error){
        return false;
    }
}
function parseJSON(str){
	"use strict";
    try{
       return JSON.parse(str);
    }
    catch (error){
        return false;
    }
}
alert("Here");
$(function(){ 
	"use strict";
	

function scrollto(elem){
		$('html, body').animate({
			scrollTop: $(elem).offset().top
		}, 500);	
	}
	
	$(".close-alert").on("click", function(){
		$(this).parent().fadeOut("slow").remove();
	});
});
function showIndicator(){
	"use strict";
	 var indicator = '<div class="loadinggif" style="position: fixed;z-index: 99999999;width: 100vw;height: 100vh;background: rgba(255,255,255,0.8);">' +
		 '<div style="width: 300px; padding: 25px; margin: 10% auto auto; text-align: center; background-color: rgba(255, 255, 255, 0.95); color: #f00; border: 1px solid #ddd;">' +
		 '<img src="images/loading.gif" alt="" />' +
		 '<div class="padding-top-24"><h4 class="margin-bottom-10 bold size14">Processing request...</h4>' +
		 '<span class="w3-block size12">This may take a while depending on the speed of your internet connection</span></div>' +
		' </div>' +
	 '</div>';
	$("body").find(".loadinggif").remove();
	$("body").prepend(indicator);
}
function hideIndicator(){
	"use strict";
	$("body").find(".loadinggif").remove();
}
function showScroll(){
	$("body").css("overflow", "hidden");
}
function hideScroll(){
	$("body").css("overflow", "auto");
}
function showResponse( message, type ){
	"use strict";
	var color = 'green';
	switch(type){
	 case "error":
	 	color = 'red';
	 break;	
	 case "warning":
	 	color = 'amber';
	 break;	
	 case "success":
	 	color = 'green';
	 break;
	 default:
	 	color = 'blue-gray';
	 break;	
	}
	 var Response = '<div class="mcResponse w3-panel w3-display-container w3-' + color + ' w3-display-topmiddle" style="z-index: 11111; width: 500px; max-width: 100%;">';
	  		Response += '<span onclick="$(this).parent().fadeOut().remove();" class="w3-button w3-display-topright"><i class="fa fa-times-circle"></i></span>';
	  		Response += '<div class="padding-10">' + message + '</div></div>';
	$("body").find(".mcResponse").remove();
	$("body").prepend(Response);
	
	setTimeout(function(){ hideResponse(); }, 8000);
	
}
function hideResponse(){
	"use strict";
	$("body").find(".mcResponse").fadeOut("slow").remove();
}
 function readURL(input, img) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $( img ).attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        } else {
                $(img).attr('src', "images/noimage.jpg");
		}
}
$(".currency").on("focus", function(e) { $(this).toNumber(); })
$(".currency").on("blur", function(e) { $(this).formatCurrency({colorize : true}); })
$(".currency").formatCurrency({colorize : true});

$(".number").on("focus", function(e) { $(this).toNumber(); })
$(".number").on("blur", function(e) { $(this).toNumber(); })
$(".number").toNumber();
