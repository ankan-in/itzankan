var youtube = document.querySelector('.icon1');
var insta = document.querySelector('.icon2');
var github = document.querySelector('.icon3');
var twitter = document.querySelector('.icon4');

youtube.addEventListener('click', () => {
    window.open("https://www.youtube.com/channel/UChJIxyWb6UKgPGJbKXG_d8Q","","height=700px,width=1000px;")
});
insta.addEventListener('click', () => {
    window.open("https://www.instagram.com/itzankan","","height=700px,width=1000px;")
});
github.addEventListener('click', () => {
    window.open("https://www.github.com/ankan-in","","height=700px,width=1000px;")
});
twitter.addEventListener('click', () => {
    window.open("https://twitter.com/ankan_Q_Q","","height=700px,width=1000px;")
});

var home = document.querySelector('#home');
home.addEventListener('click', () => {

window.scrollTo(0,0);


});