
function ball()
{
    this.y = height/2;
    this.x  = width/2;
    this.dx = 2;
    this.dy = 2;
    this.radius = 20;


this.update = function()
{
this.y += this.dy;
this.x += this.dx;
}

this.show = function()
{
    fill(255);
    ellipse(this.x,this.y,this.radius,this.radius);
}
}