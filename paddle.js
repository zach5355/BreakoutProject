
function paddle()
{
    this.length = 120
    this.height = 10;
    this.x = width/2 - this.length/2;
    this.y = height - this.height;


this.show = function()
{
    fill(50,255,50);
    rect(this.x, this.y, this.length, this.height);

}
this.update = function()
{
    if(keyIsDown(65) && this.x > 0)
    {
        this.moveleft();
    }
    if(keyIsDown(68) && this.x+this.length <width)
    {
        this.moveright();
    }
}

this.moveleft = function()
{
    this.x -=4;
}

this.moveright = function()
{
    this.x+=4;
}
}