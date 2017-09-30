var ball;
var paddle;
function setup() {
  createCanvas(1100, 700);
  ball = new ball();
  paddle = new paddle();

}

function draw() {
    background(0);
    ball.show();
    paddle.show();
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

