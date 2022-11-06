let btns = document.querySelectorAll('li');
console.log(btns);
let audio = document.querySelector('#audio');
console.log(audio);
btns.forEach((li) => {
    li.onclick = function () {
        console.log('播放');
        audio.src = `../kun/music/${this.getAttribute('m')}.mp3`;
        audio.play();
    }
})
let stop=document.querySelector('button');
stop.onclick=function () {
    audio.pause();
}