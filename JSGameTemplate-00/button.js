function Button(font,text,x,y,w,h) {
	this.x=x;
	this.y=y;
	this.w=w;
	this.h=h;
	this.font=font;
	this.text=text;
	this.state=Button.UP;

	this.draw=function() {

		switch(this.state) {
			case Button.UP:

				ctx.fillStyle="#00000080";
				ctx.strokeStyle="#FFFFFF80";
				ctx.rect(this.x,this.y,this.w,this.h);
				ctx.fill();
				ctx.stroke();

				ctx.fillStyle="#FFFFFF80";
				ctx.textAlign="center";
				ctx.textBaseline="middle";
				ctx.font=this.font;
				ctx.fillText(this.text,this.x+this.w/2,this.y+this.h/2);

				break;

			case Button.DOWN:

        ctx.beginPath();
				ctx.fillStyle="#FFFFFF80";
				ctx.strokeStyle="#00000080";
				ctx.rect(this.x,this.y,this.w,this.h);
				ctx.fill();
				ctx.stroke();
        ctx.closePath();

				ctx.fillStyle="#00000080";
				ctx.textAlign="center";
				ctx.textBaseline="middle";
				ctx.font=this.font;
				ctx.fillText(this.text,this.x+this.w/2,this.y+this.h/2);

				break;
		}
	}

	this.handleEvents=function(touches) {
		this.state=Button.UP;
		if(touches!=null) {
			for(var i=touches.length-1;i>=0;i--) {
			  var touch=touches[i];
			  if(inrect(touch.clientX,touch.clientY,this.x,this.y,this.w,this.h)) {
					this.state=Button.DOWN;
					return true;
			  }
			}
		}
		return false;
	}

}

Button.UP=0;
Button.DOWN=1;
