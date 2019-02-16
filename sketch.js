let x;
let y;
let xspeed;
let yspeed;
let dvd;
let dvdSize=innerWidth/6;
let canvas;
let cornerCounter=0
let font, fontsize = 40;

function preload() {
    dvd = loadImage("dvd.png");
}

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    y = 100;
    x = 100;
    xspeed = dvdSize/50;
	yspeed = dvdSize/50;
}

function cornerHit(){
	cornerCounter++;
}

function draw() {
    background(0);
	image(dvd, x, y, dvdSize, dvdSize);

	if (mouseIsPressed){
    	cornerHit();
    }
    fill(255);
  	text(cornerCounter, width-dvdSize, height-dvdSize);

	x = x + xspeed;
	y = y + yspeed;
	
	if (x >= width-dvdSize ) {
        xspeed = -xspeed;
        x = width-dvdSize;
	}else if(x<=0){ 
		xspeed = -xspeed;
		x = 0;
	}
	if (y >= height-dvdSize ) {
		yspeed = -yspeed;
		y = height-dvdSize;
	}else if(y <= 0){
		yspeed = -yspeed;
		y = 0;
	}

	//logic for corner hits 
	if (x <= 0 && y <= 0) {
        cornerHit();
	}else if (x <= 0 || y >= height-dvdSize){ 
		cornerHit();
	}else if (x >= width-dvdSize && y <= 0) {
		cornerHit();
	}else if(x >= width-dvdSize &&  y >= height-divSize){
		cornerHit();
	}


}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;  
  canvas.size(w,h);
  width = w;
  height = h;

  dvdSize=innerWidth/6;
}