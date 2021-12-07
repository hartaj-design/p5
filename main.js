function setup(){
    canvas=createCanvas(300,300);
    canvas.position(30,50);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    rect(100,100,500,500);
   image(video,0,0,300,300);
}