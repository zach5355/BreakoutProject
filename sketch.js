var ball;
var paddle;
var tiles;
var rows;
var columns;
var tilePadding;
var tileLength;
var tileHeight;
function setup() {
  createCanvas(1100, 700);
  ball = new ball();
  paddle = new paddle();
  rows = 5;
  columns = 7;
  tilePadding = 10;
  tiles = new Array(columns);
  for(i = 0; i < columns; i++)
  {
    tiles[i] = new Array(rows);
  }
  tileLength = (width - (columns* tilePadding)) / columns;
  tileHeight = ((height/3) - (rows * tilePadding)) / rows;
  // add loop to create matrix of tiles

  for(c =0; c < columns; c++)
  {

    for(r = 0; r < rows; r++)
    {
      tiles[c][r] = new tile(c*(tilePadding + tileLength),r*(tilePadding + tileHeight),tileLength,tileHeight);
    }
  }


}

function draw() {
    background(0);
    ball.show();
    paddle.show();
    showTiles();
    paddle.update();
    ball.update();
  
    checkCollision();

  


}


function checkCollision()
{
  if(ball.y + ball.dy < ball.radius/2 || ball.y +ball.dy > height - ball.radius/2)
  {
    ball.dy = -ball.dy;
  }
  
  if( ball.x + ball.dx < ball.radius/2 || ball.x + ball.dx > width - ball.radius/2)
  {
    ball.dx = -ball.dx;
  }
  if(((ball.y + ball.dy > (paddle.y - ball.radius/2)) && ball.dy > 0 )&& (((ball.x + ball.dx) > paddle.x) && ((ball.x + ball.dx) < (paddle.x + paddle.length))))
  {
    ball.dy = -ball.dy;
  }



}

function showTiles()
{
  for(c = 0; c< columns; c++)
  {
    for(r = 0; r < rows; r++)
    {
      tiles[c][r].show();
    }
  }
}

