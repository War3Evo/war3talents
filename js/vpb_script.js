/*********************************************************************
* This script has been released with the aim that it will be useful.
* Written by Vasplus Programming Blog
* Website: www.vasplus.info
* Email: info@vasplus.info
* All Copy Rights Reserved by Vasplus Programming Blog
***********************************************************************/


jQuery.cookie = function (key, value, options) {

    // key and value given, set cookie...
    if (arguments.length > 1 && (value === null || typeof value !== "object")) {
        options = jQuery.extend({}, options);

        if (value === null) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? String(value) : encodeURIComponent(String(value)),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};

//This function is called automatically upon page load
$(document).ready(function() 
{	
	$("#vpb_pop_up_background").click(function()
	{
		$("#vpb_signup_pop_up_box").hide(); //Hides the sign-up box when clicked outside the form
		$("#vpb_login_pop_up_box").hide(); //Hides the login box when clicked outside the form
		$("#vpb_pop_up_background").fadeOut("slow");
	});
});


//This function displays the login box when called
function vpb_show_login_box()
{
	$("#vpb_pop_up_background").css({
		"opacity": "0.4"
	});
	$("#vpb_pop_up_background").fadeIn("slow");
	$("#vpb_login_pop_up_box").fadeIn('fast');
	window.scroll(0,0);
}


//This function hides both the Sign-up Box and Login Box when called
function vpb_hide_popup_boxes()
{
	$("#vpb_signup_pop_up_box").hide(); //Hides the sign-up box when clicked outside the form
	$("#vpb_login_pop_up_box").hide(); //Hides the login box when clicked outside the form
	$("#vpb_pop_up_background").fadeOut("slow");
}