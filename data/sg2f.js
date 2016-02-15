/**
 * Created by derBronko on 12.02.2016.
 */
(function ($) {
    "use strict";
    //alert('dsadas');

    // event when user changes browser to fullscreen
    window.onresize = function () {
        var maxHeight = window.screen.height,
            maxWidth = window.screen.width,
            curHeight = window.innerHeight,
            curWidth = window.innerWidth;

        // firefox is buggy on getting the max dimensions of the monitor. Multiply the dimensions making it a little bit more matchable.
        if (maxWidth < ( curWidth * 1.1 ) && maxHeight < ( curHeight * 1.1 )) {
            prepareFullscreen();
        } else {
            closeFullscreen();
        }
    };

    // Pressing F9 will also start the magic (the addon)
    // this is for users, who don´t want the fullscreen mode but something bigger than the smal Sky Go player. ;-)
    $(window).on('keypress', function (e) {
        var keyCode = e.keyCode || e.which;
        if (keyCode == 120) {
            toogleFullscreen();
        }
    });

    function toogleFullscreen() {
        if ($('body').hasClass('skygo2fullscreen')) {
            closeFullscreen();
        } else {
            prepareFullscreen();
        }
    }

    // doing some css injections and some usage informations.
    function prepareFullscreen() {
        var device = {};
        device.maxWidth = window.innerWidth;
        // if the browser is in fullscreen, we have tu ensure, that the user can jump out of fullscreen again!
        // This will be difficult, if the user can´t change the focus from the silverlight player.
        device.maxHeight = (window.screen.height < (window.innerHeight * 1.1) ) ? window.innerHeight - 35 : window.innerHeight;

        $('body')
            .css({
                overflow: 'hidden'
            })
            .addClass('skygo2fullscreen')
            .append(
                '<div class="skygo2fullscreen_fs_info" ' +
                'style="position: fixed;bottom:0; left:0; width: 100%; height: 25px;padding: 5px;font-family: Arial; background: #000; z-index: 999999;">' +
                '<span style="color:#777; font-size: 15px;float:left;">' +
                'Um das Vollbild zu beenden, klicke hier und drücke dann F11.' +
                '</span>' +
                '<span style="color:#777; font-size: 15px;float:right;">' +
                'SkyGo2Fullscreen ist von <a href="http://derbronko.de" target="_blank">derBronko</a>.' +
                '</span>' +
                '</div>'
            );

        $('#PolymediaShowPlayer').css({
            position: 'fixed',
            top: '0px',
            left: '0px',
            'z-index': '99999999',
            width: device.maxWidth,
            height: device.maxHeight
        });
    }

    // close fullscreen
    function closeFullscreen() {
        $('body')
            .css({
                overflow: 'initial'
            })
            .removeClass('skygo2fullscreen');

        $('.skygo2fullscreen_fs_info').remove();
        $('#PolymediaShowPlayer').attr('style', '');
    }
})(jQuery);