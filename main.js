status_1 = "" ;
name_1 = "";

function setup()
{
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function start()
{
    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects" ;
    name_1 = document.getElementById("name").value;
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status_1 = true ;
}

function draw()
{
    image(video,0,0,400,300);
}