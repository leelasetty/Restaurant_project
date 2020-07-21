$(function(){
	$(".navbar-toggle").blur(function(event) {
		var screenWidth = window.innerWidth;
		if(screenWidth < 768) {
			$("#collapsable-nav").collapse('hide');
		}
	});
});


//main-content loading dynamically
(function (global) { 
var dc = {};
var homeHtml = "snippets/home-snippet.html";

//Convinience function for insertion innerHTML for 'select'
var insertHtml = function (selector, html) {
var targetElem = document.querySelector(selector);
targetElem.innerHTML = html;

};

//Show loading icon inside element identified by selector
var showloading = function (selector) {
	var html = "<div class='text-center'>";
	html += "<img src='images/ajax-loader.gif'></div>";
	insertHtml(selector,html);
};

//On page load (before image or CSS)
document.addEventListener("DOMContentLoaded", function(event) { 
//on first load, show page
showloading("#main-content");
$ajaxUtils.sendGetRequest(homeHtml,
	function (responseText) {
		document.querySelector("#main-content")
		.innerHTML = responseText;
	},
	false ); // end of ajaxUtils

}); // end of addEventListener function

global.$dc = dc;

})(window);