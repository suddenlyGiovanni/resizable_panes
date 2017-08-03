$( document ).ready( function () {

    // DOM SELECTORS:

    var $container = $( '#container' );
    var $planeA = $( '.plane-a' );
    var $slider = $( '#slider' );

    // OTHER GLOBAL VARIABLES:

    var limitLeft = $container.offset().left;
    var limitRight = limitLeft + $container.width();

    /*_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ */

    // EVENTLISTENERS:

    $slider.mousedown( function ( event ) {
        event.stopPropagation();
        event.preventDefault();

        // on mousedown we pass the control to moveSlider fn.
        moveSlider();
    } );

    $container.mouseup(function (event) {
        event.stopPropagation();
        // on mouseup we stop listening to the mouse movements.
        $container.off('mousemove');
    });

    /*_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ */

    // FUNCTIONS DECLARATION:

    function moveSlider() {
        $container.mousemove(function(e) {
            e.stopPropagation();
            var mouseX = e.pageX;
            var width = mouseX - limitLeft;
            // if the mouse movements are confined to the container move on.
            if ( mouseX < limitRight && mouseX > limitLeft ) {
                // move the slider.
                $slider.offset( {
                    left: mouseX
                } );
                // reveal or hide the background img.
                $planeA.width( width );
            }
        });

    }
} );
/*_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ */
