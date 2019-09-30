$(document).ready(function() {
  $("img[usemap]").rwdImageMaps();
  $("img[usemap]").maphilight();
})

/*
  render: canvas, table
*/
function generateQrcode(id, text, width, height, render, background, foreground) {
  jQuery(id).qrcode({
    width: w,
    height: h,
    text: text,
    render: render
  });
}

/*  playbackRate: Indicates the current playback speed of the audio/video.
    1.0 is normal speed
    -1.0 is backwards, normal speed
    0.5 is half speed (slower)
    -0.5 is backwards, half speed
    2.0 is double speed (faster)
*/
function playAudioByRange(id, source, start, end) {
  audio = document.getElementById(id);
  audio.src = source + '#t=' + start + ',' + end;
  audio.play();
}

/*
    rate = document.querySelector('#playbackrate').value;
*/
function changeAudioSpeed(id, rate ) {
  audio = document.getElementById(id);
  audio.playbackRate = rate;
}

function changeValue(selector, value) {
     document.querySelector(selector).value = value;
}