difference = 0
noseX = 0 
noseY = 0
leftWristx = 0
rightWristx = 0

function setup(){
    video = createCapture(VIDEO);
    video.size(550,550);
    canvas = createCanvas(550, 550);
  canvas.position(560,150);
  poseNet=ml5.poseNet(video, modelloaded) 
  poseNet.on("pose", gotposes)
}

function modelloaded(){
    console.log("posenet is loaded");

}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        difference = floor(leftWristx - rightWristx);
    }
}

function draw(){
    background("#20214F");
    fill("#EC7C26");
    stroke("#966b26");
    square(noseX,noseY, difference);
    document.getElementById("size").innerHTML = "size of the square is " + difference + "px"
}
