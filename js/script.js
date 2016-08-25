jQuery(function($) {
    $("#bgAudio").prop("volume", 0.2);

    window.setVolume = function(bgAudio, vol) {
        sounds[bgAudio].volume = vol;
    }
});
