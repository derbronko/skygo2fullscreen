/**
 * Created by derBronko on 12.02.2016.
 */

"use strict";


(function ($) {
    if ($('.login.nav_loggedout').css('display') == 'none') {
        var device = {};
        device.maxWidth = screen.availWidth;
        device.maxHeight = screen.availHeight;

        $('body').css({
            overflow: 'hidden'
        });

        $('#stage_nav_block, #header, .detail_header').css({
            display: 'none'
        });
        $('#stage, #detail_block, .container, .detail_player').css({
            'padding-top': '0px',
            'padding-bottom': '0px',
            'padding-left': '0px',
            'padding-right': '0px',
            'margin-top': '0px',
            'margin-bottom': '0px',
            'margin-left': '0px',
            'margin-right': '0px'
        });
        $('#playerContainerId, .detail_player, .detail_body, #detail_block, .container').css({
            width: 'auto',
            height: 'auto'
        });

        $('.detail_actions').html('<span style="color:#777; font-size: 15px;">Um das Vollbild zu beenden, klicke hier und drücke dann F11.</span>');

        $('.detail_player').css({
            'padding-bottom': '200px',
            'background-color': '#000'
        });

        $('#PolymediaShowPlayer').attr({
            width: device.maxWidth,
            height: device.maxHeight
        });

        alert('Schließe diese Meldung, drücke F11 und genieße dein SkyGo-Video!');
    }
})(jQuery);