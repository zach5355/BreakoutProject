function tile(x,y)
{
this.length = 120;
this.height = 10;
this.x = x;
this.y = y;

this.show = function()
{
    fill(50,255,50);
    rect(this.x, this.y, this.length, this.height);

}

}


