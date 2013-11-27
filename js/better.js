/*
 * self-invoking anonymous function to create a non-global scope
 * accepts $ as a param - $ can be anything
 */
(function($) {

    /*
     * PLE is the name of this JS module
     * {} is a shorthand for creating JS objects
     */
    var PLE = {
        // init is a function within the PLE object
        // this is not proper Prototype-based OO-JS!
        init: function() {
            // Call function listen() - scoped within the PLE object
            this.listen();
        },
        listen: function() {
            // Assign this to variable that, as context is lost within the following callback
            var that = this;

            // jQuery Syntax for an Click-Event Listener on the #offcanvas_click-Element. e is the Event-Object param
            $('#offcanvas_click').on('click', function(e) {
                // Click on the link would usually result in following the target (# in this case)
                // We might want to prevent the browser from doing so by using:
                e.preventDefault();

                // Call the actual function
                that.toggleNav();
            });
        },
        toggleNav: function() {
            // toggles the visibility of the #navigation-Node
            // http://api.jquery.com/toggle
            $('#navigation').toggle();
        }
    };

    // Will only be called as soon as the DOM is ready (doesn't prevent DOM-loading)
    $(document).ready(function() {
        PLE.init();
    });

})(jQuery); // Invoke with jQuery as argument - which means it's mapped to $