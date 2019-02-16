let x;
let y;
let xspeed;
let yspeed;
let dvd;
let dvdSize=innerWidth/6;
let canvas;

function preload() {
    dvd = loadImage("dvd.png");
}

function setup() {
    canvas = createCanvas(window.innerWidth, window.innerHeight);
    y = 100;
    x = 100;
    xspeed = 5;
	yspeed = 5;
}

function draw() {
    background(0);
	image(dvd, x, y, dvdSize, dvdSize);

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
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;  
  canvas.size(w,h);
  width = w;
  height = h;

  dvdSize=innerWidth/6;
}