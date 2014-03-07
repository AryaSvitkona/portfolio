userAgent = window.navigator.userAgent;
if(/(iPhone|iPod|iPad)/.test(userAgent)) {
	document.getElementById("picshow").style.display = "block";
	document.getElementById("bgvideo").style.display = "none";
}

(function($) {
	var Nav = {
		sidebar: null,
		container: null,
		btn: null,
		title: null,

		init: function() {
			this.sidebar = $('aside');
			this.container = $('.main');
			this.btn = $('.toggle-nav');
			this.title = $('.video-text');

			this.listen();
		},
		listen: function() {
			var that = this;
			$(this.btn).on('click', function(e) {
				e.preventDefault();

				if ($(that.sidebar).hasClass('is-visible')) {
					that.hide();
				}
				else {
					that.show();
				}

			});
		},
		hide: function() {
			$(this.sidebar).removeClass('is-visible');
			$(this.sidebar).animate({ width: '0' });
			$(this.container).animate({ left: '0' });
			$(this.btn).animate({ left: '1%' });
			$(this.title).animate({ right: '1%' });
		},
		show: function() {
			$(this.sidebar).addClass('is-visible');
			$(this.sidebar).animate({ width: '20%' });
			$(this.container).animate({ left: '20%' });
			$(this.btn).animate({ left: '21%' });
			$(this.title).animate({ right: '21%' });
		}
	};
	
function slide(){
	$('#mobileslide').carousel({
      interval: 5000
    });
	}

$('.scrollto').on('click', function(e){
    var href = $(this).attr('href');
    $('html, body').animate({
        scrollTop:$(href).offset().top
    },'slow');
    e.preventDefault();
});

$(document).ready(function() {
		slide();
		Nav.init();
		$('#horiz_container_outer').horizontalScroll();


	});
})(jQuery);