$(document).ready(function() {
  $("img[usemap]").rwdImageMaps();
})

function round(number, nDigits) {
  if (number >= 0) {
    var tmp = parseInt((number * Math.pow(10, nDigits) + 0.5)) / Math.pow(10, nDigits);
    return tmp;
  } else {
    number1 = -number;
    var tmp = parseInt((number1 * Math.pow(10, nDigits) + 0.5)) / Math.pow(10, nDigits);
    return -tmp;
  }
}

function roundToString(number, nDigits) {
  var floatNumber = parseFloat(number);
  if (isNaN(floatNumber)) {
    return false;
  }

  var floatNumber = Math.round(number * Math.pow(10, nDigits)) / Math.pow(10, nDigits);
  var floatNumberString = floatNumber.toString();
  var nDigitsOfInteger = floatNumberString.indexOf('.');

  if (nDigitsOfInteger < 0) {
    nDigitsOfInteger = floatNumberString.length;
    floatNumberString += '.';
  }

  while (floatNumberString.length <= nDigitsOfInteger + nDigits) {
    floatNumberString += '0';
  }

  return floatNumberString;
}

/* render: canvas, table */
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
function playAudioByRange(audioId, audioSource, start, end, valueSelector) {
  audio = document.getElementById(audioId);
  audio.src = audioSource + '#t=' + start + ',' + end;
  rate = document.querySelector('#' + valueSelector).value;
  audio.playbackRate = rate;
  audio.play();
}

function playAudio(audioId, audioSource, valueSelector) {
  audio = document.getElementById(audioId);
  audio.src = audioSource;
  rate = document.querySelector('#' + valueSelector).value;
  audio.playbackRate = rate;
  audio.play();
}

function changeAudioSpeed(audioId, valueSelector) {
  rate = document.querySelector('#' + valueSelector).value;
  audio = document.getElementById(audioId);
  audio.playbackRate = rate;
}

function changeValue(selector, valueSelector) {
  value = document.querySelector('#' + valueSelector).value;
  // document.querySelector('#' + selector).value = roundToString(value, 1);
  // Using parseFloat() (or parseInt() with a radix, if it's an integer) will allow you
  // to convert different variable types to numbers which will enable the toFixed() function to work.
  document.querySelector('#' + selector).value = parseFloat(value).toFixed(1);
}

