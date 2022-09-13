window.onload = function () {
  var arr = [
    "阿知波大輔 - 陽だまりのピアチェーレ.mp3",
    "柳川和樹 - Forest Dance.mp3",
    "柳川和樹 - いつかの隙間で.mp3",
    "柳川和樹 - 彼方.mp3",
    "柳川和樹 - Forest Dance.mp3",
    "浅野隼人 - 船の上の錬金術師.mp3",
    "松村佑樹 - 海風を背に受けて.mp3",
    "Floating Cloud - 風穴カーニバル.mp3",
    "松村佑樹 - 海風を背に受けて.mp3",
  ]; //把需要播放的歌曲从后往前排，这里已添加两首音乐，可继续添加多个音乐
  var myAudio = new Audio();
  myAudio.preload = true;
  myAudio.controls = true;
  myAudio.src = arr.pop(); //每次读数组最后一个元素
  myAudio.addEventListener("ended", playEndedHandler, false);
  myAudio.play();
  document.getElementById("audioBox").appendChild(myAudio);
  myAudio.loop = false; //禁止循环，否则无法触发ended事件
  function playEndedHandler() {
    myAudio.src = arr.pop();
    myAudio.play();
    console.log(arr.length);
    !arr.length &&
      myAudio.removeEventListener("ended", playEndedHandler, false); //只有一个元素时解除绑定
  }
};
//与主子的交互
function tangChuang() {
  let tangChuang = window.alert("干嘛呢");
}
