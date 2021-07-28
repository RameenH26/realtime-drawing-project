function preload() {

}
function setup() {
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.position(200, 180);

 canvas = createCanvas(300, 300);
 canvas.position(800, 180);

 //posenet code
 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}
leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

fontSize = 0;
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("left wrist x =" + leftWristX);
        console.log("left wrist y =" + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("right wrist x =" + rightWristX);
        console.log("right wrist y =" + rightWristY);

        fontSize = leftWristX - rightWristX;
        console.log(fontSize);
    } 
}
function draw() {
 background('#f0ebc7'); 
   textSize(fontSize);
   text("hello", 120, 150);
}

function modelLoaded() {
    console.log("model is loaded");
}

