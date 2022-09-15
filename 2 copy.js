var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");
var iconcopy = document.getElementById("iconcopy");

icon.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    icon.src = "./图片文件(音乐)/pause.png";
  } else {
    mySong.pause();
    icon.src = "./图片文件(音乐)/play.png";
  }
};
iconcopy.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    iconcopy.src = "./图片文件(音乐)/pause.png";
  } else {
    mySong.pause();
    iconcopy.src = "./图片文件(音乐)/play.png";
  }
};
