const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

var PageTransitions = (function () {
	$main = $('#hal'),
	$pages = $main.children('div.halaman'),
	$iterate = false,
	animcursor = 1,
	saatini = 0,
    isAnimating = false,

	function init() {

        $pages.each(function () {
            var $page = $(this);
            $page.data('originalClassList', $page.attr('class'));
        });

        $pages.eq(saatini).addClass('halaman-saatini');

        var audio = document.getElementById("audio");

        $iterate.on('click', function () {
            $('#hal').hide();
            audio.play();

            setInterval(function () {
                $("#hal").click();
            }, 7000);

            if (isAnimating) {
                return false;
            }
            if (animcursor > 67) {
                animcursor = 1;
            }
            nextPage(animcursor);
            ++animcursor;
        });

    }
});
