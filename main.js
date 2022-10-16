noseX=0;
noseY=0;
difference = 0;
rightWistX = 0;
leftWrist = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modleloaded);
    poseNet.on('pose', gotPoses);
}

function modleloaded() {
    console.log('PoseNet is initialized!');
}

function draw()
{
    background('#969A97');
    fill('#f90093');
    stroke('#F90093');
    text("Alex", 50, 400);
    textSize(difference);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nosex = " + noseX +" noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = leftWristX - rightWristX;
    }
}