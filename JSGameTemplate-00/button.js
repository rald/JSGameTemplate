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

				Graphics.setFillStyle("#00000080");
				Graphics.setStrokeStyle("#FFFFFF80");
				Graphics.fillRect(this.x,this.y,this.w,this.h);
				Graphics.drawRect(this.x,this.y,this.w,this.h);

				Graphics.setFillStyle("#FFFFFF80");
				Graphics.setTextAlign("center");
				Graphics.setTextBaseline("middle");
				Graphics.setFont(this.font);
				Graphics.fillText(this.text,this.x+this.w/2,this.y+this.h/2);

				break;

			case Button.DOWN:

				Graphics.setFillStyle("#FFFFFF80");
				Graphics.setStrokeStyle("#00000080");
				Graphics.fillRect(this.x,this.y,this.w,this.h);
				Graphics.drawRect(this.x,this.y,this.w,this.h);

				Graphics.setFillStyle("#00000080");
				Graphics.setTextAlign("center");
				Graphics.setTextBaseline("middle");
				Graphics.setFont(this.font);
				Graphics.fillText(this.text,this.x+this.w/2,this.y+this.h/2);

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
