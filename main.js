song_1="";
song_2="";

function preload(){
    song_1 = loadSound("music2.mp3");
    song_2 = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,400,400);
}

function play()
{
 song_1.play();
}