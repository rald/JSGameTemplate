var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

var btnU,btnD,btnL,btnR;
var btnA,btnB;

var animation=null;

var x=0,y=0;

var bounceSound=null;
var selectSound=null;

var speedX=10,speedY=10;

var upButtonPressed=false;
var downButtonPressed=false;
var leftButtonPressed=false;
var rightButtonPressed=false;



function rnd(x) {
	return Math.floor(Math.random()*x);
}



function resize() {
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;
  
  btnU = new Button("32px monospace", "U", 96, canvas.height -80-96-64, 64, 64);
  
  btnD = new Button("32px monospace", "D", 96, canvas.height-80-16-16, 64, 64);
  
  btnL = new Button("32px monospace", "L", 32, canvas.height-80-96, 64, 64);
  
  btnR = new Button("32px monospace", "R", 160, canvas.height-80-96, 64, 64);
  
  btnA = new Button("32px monospace", "A", canvas.width -96-64-32, canvas.height - 80-96, 64, 64);

  btnB = new Button("32px monospace", "B", canvas.width - 96, canvas.height - 80 - 96, 64, 64);
 	
	draw();
}



function draw() {

/*

	let h="0123456789ABCDEF";
	let size=4;
	let ox=16;
	let oy=16;

	Graphics.fillRect(ctx,0,0,canvas.width,canvas.height,palette[0]);

	for(let i=0;i<16;i++) {
		let x=(i+1)*fontBitmap.width*(size+1)+ox;
		let y=(i+1)*fontBitmap.height*(size+1)+oy;
		Graphics.drawRect(ctx,x,oy,fontBitmap.width*size,fontBitmap.height*size,palette[10]);
		Graphics.drawRect(ctx,ox,y,fontBitmap.width*size,fontBitmap.height*size,palette[10]);
		Graphics.drawBitmap(ctx,h.charCodeAt(i),x,oy,size,fontBitmap,[palette[0],palette[12]]);
		Graphics.drawBitmap(ctx,h.charCodeAt(i),ox,y,size,fontBitmap,[palette[0],palette[12]]);
	}

	for(let i=0;i<256;i++) {
		let x=(i%16+1)*fontBitmap.width*(size+1)+ox;
		let y=Math.floor(i/16+1)*fontBitmap.height*(size+1)+oy;
		Graphics.drawRect(ctx,x,y,fontBitmap.width*size,fontBitmap.height*size,palette[10]);
		Graphics.drawBitmap(ctx,i,x,y,size,fontBitmap,[palette[0],palette[6]]);
	}

//*/
	
	Graphics.fillRect(ctx,0,0,canvas.width,canvas.height,palette[0]);

	Graphics.drawBitmap(ctx,0,x-mouseBitmap.hotspot_x,y-mouseBitmap.hotspot_y,4,mouseBitmap,['transparent',palette[2]]);
	
	

	btnU.draw(ctx);	
	btnD.draw(ctx);	
  btnL.draw(ctx);	
  btnR.draw(ctx);	

	btnA.draw(ctx);	
	btnB.draw(ctx);	

	btnU.handleEvents(touches);	
	btnD.handleEvents(touches);	
	btnL.handleEvents(touches);	
	btnR.handleEvents(touches);	

	btnA.handleEvents(touches);	
	btnB.handleEvents(touches);	

  if(btnU.state==Button.DOWN) upButtonPressed=true;
  if(btnD.state==Button.DOWN) downButtonPressed=true;
  if(btnL.state==Button.DOWN) leftButtonPressed=true;
  if(btnR.state==Button.DOWN) rightButtonPressed=true;

  if(btnU.state==Button.UP) upButtonPressed=false;
  if(btnD.state==Button.UP) downButtonPressed=false;
  if(btnL.state==Button.UP) leftButtonPressed=false;
  if(btnR.state==Button.UP) rightButtonPressed=false;

// if(btnA.state==Button.DOWN) bounceSound.play();
// if(btnB.state==Button.DOWN) selectSound.play();

    if(upButtonPressed)    y-=speedY;
    if(downButtonPressed)  y+=speedY;
    if(leftButtonPressed)  x-=speedX;
    if(rightButtonPressed) x+=speedX;
  
}



function main() {
	resize();
	window.onresize=resize;
	bounceSound = new Sound("sounds/bounce.mp3");
	selectSound = new Sound("sounds/select.mp3");
	animation=setInterval(draw,1000/60);
}



main();
