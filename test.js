//js syntax
// var heading = document.querySelector('.heading');
// heading.style.color = 'red';

//jQuery syntax
// var $heading = $('.heading');
// $heading.css('color', 'lime');

/////////////////////////////////////////////////////

//JS syntax
var btn = document.querySelector('.btn');
var box = document.querySelector('.box');

// btn.onclick = function() {
// 	box.style.backgroundColor = 'red';
// 	box.style.borderRadius = '40px';
// };

//jQuery syntax
var $btn = $('.btn');
var $box = $('.box');

// $btn.on('click', function() {

// 	$box.css({
// 		'background-color': 'lime',
// 		'border-radius': '40px'
// 	});

// });

/////////////////////////////////////////////////////

//JS syntax
// btn.onclick = function() {
	//setting left value
// 	// box.style.left = '150px';

	//making box move 20 pixels from the left on button click
// 	var currentLeft = box.offsetLeft + 20;
// 	box.style.left = currentLeft + 'px';
// };

//jQUery syntax
// $btn.on('click', function() {
// 	//setting left value
// // 	// $box.css('left', 150);

// 	//making box move 20 pixels from the left on button click
// 	var currentLeft = $box.offset().left;
// 	$box.css('left', currentLeft + 20);
// });

///////////////////////////////////////////////////////

//move the box by pressing the arrow key on keyboard

//JS syntax
// var html = document.querySelector('html');

// html.onkeydown = function(e) {
// 	if (e.keyCode == 39) {
// 		var currentLeft = box.offsetLeft + 20;
// 		box.style.left = currentLeft + 'px';
// 	};
// };



//jQuery syntax
var $html = $('html');

// $html.on('keydown', function(e) {
// 	if (e.keyCode == 39) {
// 		var currentLeft = $box.offset().left;
// 		$box.css('left', currentLeft + 20);
// 	};
// });



//posto nam se ista funkcija za pomeranje ponavlja i za click i za keydown
//mozemo da je sacuvamo kao varijablu

var behaviourFunction = function () {
	var currentLeft = $box.offset().left;
	$box.css('left', currentLeft + 20);
};

$btn.on('click', function(e) {
	behaviourFunction();
});

$html.on('keydown', function(e) {
	if (e.keyCode == 39) {
		var currentLeft = $box.offset().left;
		$box.css('left', currentLeft + 20);
	}
});

//////////////////////////////////////////////////////////

//preventing defaulti link behaviour and image "zoom"

//JS syntax
// var image = document.querySelector('.img-link');
// var bigImage = document.querySelector('.placeholder');

// image.onclick = function(e) {
// 	e.preventDefault();

// 	var getImgSrc = image.getAttribute('href');
// 	bigImage.style.backgroundImage = 'url(' + getImgSrc + ')';
// };

// jQuery syntax
var $image = $('.img-link');
var $bigImage = $('.placeholder');

$image.on('click', function(e) {
	e.preventDefault();

	var $getImgSrc = $image.attr('href');
	$bigImage.css('background-image', 'url(' + $getImgSrc + ')');

});

////////////////////////////////////////////////////////////////

//dodavanje CSS style-a putem JavaScript nije dobra praksa
//CSS stylove bi trebalo ostaviti samo unutar CSS style documenta
//zato CSS stilove menjamo manipulisanjem (dodavanjem) klasa HTML elementima
//klase dodane putem JS-a trebalo bi da imaju js- prefix zbog lakseg snalazenja

//JS synatax
// var title = document.querySelector('.title');

// title.onclick = function() {
// 	title.classList.add('js-make-red');
// 	title.classList.toggle('js-add-bgimg');

// 	//vanila JS nema method chaining ???
// };

//jQuery syntax
var $title = $('.title');

$title.on('click', function() {
	// $title.addClass('js-make-red');
	// $title.toggleClass('js-add-bgimg');

	//najbolja praksa - jQuery chaining
	$title.addClass('js-make-red').toggleClass('js-add-bgimg');
});

////////////////////////////////////////////////////////////////





