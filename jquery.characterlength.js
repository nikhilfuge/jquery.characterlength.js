/******************************************************************************
 * jquery.charcterlength.js
 * Written by Nikhil Fuge on 7th March 2012
 * This plugin is used to show the character length of an input
 * Also, you can set the maxlength for the input and let the plugin
 * handle the length and notify you as you reach closer to the limit.
 *
 * How it works:
 * -------------
 *
 * Html: 
 * -----
 *    <input type="text" class="showchars" /><span class="chars"></span>
 *
 * Javascript:
 * -----------
 *    $(".showchars").characterlength(<Max. Length allowed>);
 *
 * CSS:
 * ----
 *    .chars {
 *	    margin-left: 10px;
 *	    color: #ccc;
 *	    font-style: italic;
 *    }
 *
 ****************************************************************************/

(function($) {
    jQuery.fn.characterlength = function (maxlength) {
	if(!maxlength) {
	    maxlength = Number.MAX_VALUE;
	}
	
	return this.each (function (index, item) {
	    $(item).keydown(function(txt){
		var length = $(txt.target).val().length;
		if(maxlength == length) {
		    return false;
		}
	    });
	    $(item).keyup(function(txt){
		var length = $(txt.target).val().length;
		if(maxlength < length) {
		    var text = $(txt.target).val().substr(0, maxlength);
		    $(txt.target).val(text);
		    length = $(txt.target).val().length;
		}
		
		if((maxlength - length) <= 3) {
		    $(txt.target).siblings('.chars').css('color', 'red');
		}
		else {
		    $(txt.target).siblings('.chars').css('color', '#ccc');
		}
		
		if(maxlength == length) {
		    $(txt.target).siblings('.chars').html('(Max. limit reached)');
		}
		else {
		    $(txt.target).siblings('.chars').html('(' + length + ' characters)');
		}
	    });
	});
    }
})(jQuery);