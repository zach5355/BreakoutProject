function tile(x,y, length, height)
{
this.length = length;
this.height = height;
this.x = x;
this.y = y;

this.show = function()
{
    fill(50,255,50);
    rect(this.x, this.y, this.length, this.height);

}

}


