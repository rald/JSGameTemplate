var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

var btnU,btnD,btnL,btnR;
var btnA,btnB;

var animation=null;

var x=0,y=0;

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
		let x=(i+1)*font.width*(size+1)+ox;
		let y=(i+1)*font.height*(size+1)+oy;
		Graphics.drawRect(ctx,x,oy,font.width*size,font.height*size,palette[10]);
		Graphics.drawRect(ctx,ox,y,font.width*size,font.height*size,palette[10]);
		Graphics.drawBitmap(ctx,h.charCodeAt(i),x,oy,size,font,[palette[0],palette[12]]);
		Graphics.drawBitmap(ctx,h.charCodeAt(i),ox,y,size,font,[palette[0],palette[12]]);
	}

	for(let i=0;i<256;i++) {
		let x=(i%16+1)*font.width*(size+1)+ox;
		let y=Math.floor(i/16+1)*font.height*(size+1)+oy;
		Graphics.drawRect(ctx,x,y,font.width*size,font.height*size,palette[10]);
		Graphics.drawBitmap(ctx,i,x,y,size,font,[palette[0],palette[6]]);
	}

*/
	
	Graphics.fillRect(ctx,0,0,canvas.width,canvas.height,palette[0]);

	
	Graphics.drawText(ctx,"X",x,y,4,font,['transparent',palette[1]]);

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

  if(btnU.state==Button.DOWN) y--;
  if(btnD.state==Button.DOWN) y++;
  if(btnL.state==Button.DOWN) x--;
  if(btnR.state==Button.DOWN) x++;

}



function main() {
	resize();
	window.onresize=resize;
	animation=setInterval(draw,1000/60);
}



main();
