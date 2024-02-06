// setup canvas for drawing
let WIDTH = 800;
let HEIGHT = 600;

//get access to canvas element 
let cvs = document.getElementById("canvas");
cvs.width = WIDTH;
cvs.height = HEIGHT;
//cvs.style.background = "blue";

//cts is what we will call when we want to draw to canvas
let ctx = cvs.getContext("2d");

class Rectangle
{
    constructor(xpos,ypos,width,height,color)
    {
        this.xpos= xpos;
        this.ypos= ypos;
        this.width= width;
        this.height= height;
        this.color= color;

    }

    draw(ctx)
    {
        ctx.fillStyle = this.color;
        Ctx.fillRect(this.xpos,this.ypos,this.width,this.height);
    }
}

class circle
{
    constructor(xpos,ypos,width,height,color)
    {
        this.xpos= xpos;
        this.ypos= ypos;
        this.radius= radius;
        this.color= color;

    }

    draw(ctx)
    {
        ctx.fillstyle = this.color;
        Cts.beginpath();
        ctx.arc(this.xpos,this.ypos,this.radius,0,2*Math.PI,false);
        ctx.fill();
        ctx.closePath();
    }
}
rect1 = new Rectangle(0,0,100,100,"red")
rect1.draw(ctx); //pass in the context
rec2 = new Rectangle(200,200,50,10,"white");
rec2.draw(ctx);
