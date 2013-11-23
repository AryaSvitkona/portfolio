(function($) {
	var Nav = {
		sidebar: null,
		container: null,
		btn: null,
		init: function() {
			this.sidebar = $('aside');
			this.container = $('.main');
			this.btn = $('.toggle-nav');

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

			})
		},
		hide: function() {
			$(this.sidebar).removeClass('is-visible');
			$(this.sidebar).animate({ width: '0' });
			$(this.container).animate({ left: '0' });
			$(this.btn).animate({ left: '1%' });
		},
		show: function() {
			$(this.sidebar).addClass('is-visible');
			$(this.sidebar).animate({ width: '20%' });
			$(this.container).animate({ left: '20%' });
			$(this.btn).animate({ left: '21%' });
		}
	};

	$(document).ready(function() {
		Nav.init();
	});
})(jQuery);