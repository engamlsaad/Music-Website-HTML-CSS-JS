let navMenu = document.getElementById("nav-menu");
let toggle = document.getElementById("nav-toggle");
toggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});
window.onscroll = function () {
    navMenu.classList.remove("open");
}

let lis = document.querySelectorAll("#tabs li");
let imgs = document.querySelectorAll(".gallery-img a");
let gallery = document.querySelector(".gallery");

lis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImg);
});
function removeActive() {
    lis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    })
}
function manageImg() {
    imgs.forEach((img) => {
        img.style.display = "none";
    })
    document.querySelectorAll(this.dataset.gallery).forEach((e) => {
        e.style.display = "block";
    })
}

// gallery.magnificPopup({
//     delegate: "a",
//     type: "img",
//     gallery:{
//         enabled: true,
//     }
// })

$(document).ready(function() {

	/* This is basic - uses default settings */
	
	$("a#single_image").fancybox();
	
	/* Using custom settings */
	
	$("a#inline").fancybox({
		'hideOnContentClick': true
	});

	/* Apply fancybox to multiple items */
	
	$("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
	});
	
});