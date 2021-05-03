var canvas=document.getElementById("canvas");
var ctx=canvas.getContext("2d");

var btnA;
var btnB;

var animation=null;



function rnd(x) {
	return Math.floor(Math.random()*x);
}



function resize() {
	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;

  btnA = new Button("32px monospace", "L", 32, canvas.height - 80, 64, 64);

  btnB = new Button("32px monospace", "R", canvas.width - 96, canvas.height - 80, 64, 64);
 	
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
	
	Graphics.drawText(ctx,"sa aking paglalakbay",0,0,4,font,['transparent','black']);

	btnA.draw(ctx);	
	btnB.draw(ctx);	

	btnA.handleEvents(touches);	
	btnB.handleEvents(touches);	

}



function main() {
	resize();

	window.onresize=resize;
 
	animation=setInterval(draw,1000/60);
}


main();
