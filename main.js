var song_1 = ""
var song_2 = ""

var leftWristX = 0
var leftWristY = 0

var rightWristX = 0
var rightWristY = 0

function preload(){

song_1 = loadSoud("music.mp3")
song_2 = loadSoud("music2.mp3")

}

function setup(){
canvas = createCanvas(600,500)

canvas.center();

video = createCapture(VIDEO);
video.hide();


posenet = ml5.poseNet(webcam, modelLoaded)
posenet.on('pose',gotPoses)
}

function draw(){

    image(video,0,0,600,500)

}

function modelLoaded(){
    console.log("posenet is inisialised")
}

function gotPoses(results){

    if(results.length > 0){
        console.log(results)

        leftWristX =  results[0].pose.leftWrist.x
        
        leftWristY =  results[0].pose.leftWrist.y

        rightWristX =  results[0].pose.rightWrist.x
        
        rightWristY =  results[0].pose.rightWrist.y

    }


}