
<audio controls preload id="sound" style="width: 100%">
  <source src="/media/sound.mp3" type="audio/mpeg"> 您的浏览器不支持 <code>audio</code> 元素。
</audio>
<div style="width: 100%; margin-top: 10px; padding-bottom: 10px;">
  <label id="playbackRateLabel" for="playbackRateSlider" style="width: 20%;">播放速度: </label>
  <output id="playbackRateDisplay" for="playbackRateSlider" style="width: 20%;" >1.0</output>x
  <input id="playbackRateSlider" type="range" min="0.8" max="1.2" step=".1" value="1"
    onInput="changeValue('playbackRateDisplay', 'playbackRateSlider')" onChange="changeAudioSpeed('sound', 'playbackRateSlider')">
</div>
<div>
  <img class="no-photoswipe" src="/image/picture.jpg" width="1106" height="1532" usemap="#Map1">
  <map name="Map1">
    <area shape="rect" coords="100,132,414,188" href="javascript:playAudioByRange('sound', '/media/sound.mp3', 0.0, 10.0, 'playbackRateSlider')" />
    <area shape="rect" coords="100,274,414,330" href="javascript:playAudioByRange('sound', '/media/sound.mp3',10.0, 20.0, 'playbackRateSlider')" />
    <area shape="rect" coords="100,451,414,507" href="javascript:playAudioByRange('sound', '/media/sound.mp3',20.0, 30.0, 'playbackRateSlider')" />
    <area shape="rect" coords="100,391,414,447" href="javascript:playAudioByRange('sound', '/media/sound.mp3',30.0, 40.0, 'playbackRateSlider')" />
    <area shape="rect" coords="100,333,414,389" href="javascript:playAudioByRange('sound', '/media/sound.mp3',40.0, 50.0, 'playbackRateSlider')" />
    <area shape="rect" coords="725,793,1039,849" href="javascript:playAudioByRange('sound', '/media/sound.mp3',50.0, 60.0, 'playbackRateSlider')" />
    <area shape="rect" coords="725,735,1039,791" href="javascript:playAudioByRange('sound', '/media/sound.mp3',60.0, 70.0, 'playbackRateSlider')" />
    <area shape="rect" coords="725,851,1039,907" href="javascript:playAudioByRange('sound', '/media/sound.mp3',70.0, 80.0, 'playbackRateSlider')" />
    <area shape="rect" coords="725,909,1039,965" href="javascript:playAudioByRange('sound', '/media/sound.mp3',80.0, 90.0, 'playbackRateSlider')" />
  </map>
</div>
<div>
  <img class="no-photoswipe" src="/image/picture.jpg" width="1106" height="1532" usemap="#Map2">
  <map name="Map2">
    <area shape="rect" coords="100,132,414,188" href="javascript:playAudioByRange('sound', '/media/sound.mp3', 0.0, 10.0, 'playbackRateSlider')" />
    <area shape="rect" coords="100,274,414,330" href="javascript:playAudioByRange('sound', '/media/sound.mp3',10.0, 20.0, 'playbackRateSlider')" />
    <area shape="rect" coords="100,451,414,507" href="javascript:playAudioByRange('sound', '/media/sound.mp3',20.0, 30.0, 'playbackRateSlider')" />
    <area shape="rect" coords="100,391,414,447" href="javascript:playAudioByRange('sound', '/media/sound.mp3',20.0, 30.0, 'playbackRateSlider')" />
    <area shape="rect" coords="100,333,414,389" href="javascript:playAudioByRange('sound', '/media/sound.mp3',20.0, 30.0, 'playbackRateSlider')" />
    <area shape="rect" coords="725,793,1039,849" href="javascript:playAudioByRange('sound', '/media/sound.mp3',20.0, 30.0, 'playbackRateSlider')" />
    <area shape="rect" coords="725,735,1039,791" href="javascript:playAudioByRange('sound', '/media/sound.mp3',20.0, 30.0, 'playbackRateSlider')" />
    <area shape="rect" coords="725,851,1039,907" href="javascript:playAudioByRange('sound', '/media/sound.mp3',20.0, 30.0, 'playbackRateSlider')" />
    <area shape="rect" coords="725,909,1039,965" href="javascript:playAudioByRange('sound', '/media/sound.mp3',20.0, 30.0, 'playbackRateSlider')" />
  </map>
</div>