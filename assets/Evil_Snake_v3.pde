int grid = 20; //How big each grid square will be
PVector food;
int speed = 10;
boolean dead = true;
int highscore = 0;
Snake snake;

float charSize = 16;
PFont fontDOS;

boolean displayMessage = true;
boolean displayX = false;

void setup() {
  size(500,400);
  snake = new Snake();
  food = new PVector();
  newFood();
  fontDOS = createFont("MorePerfectDOSVGA", charSize);
  textFont(fontDOS);
  frameRate(30);
}

void draw() {
  background(0);
  fill(255);
  startGame();
  if (!dead) {

    if (frameCount % speed == 0) {
      snake.update();
    }
    snake.show();
    snake.eat();
    fill(255, 0, 0);
    noStroke();
    rect(food.x, food.y, grid, grid);
    textAlign(LEFT);
    textSize(15);
    fill(255);
    text("Score: " + snake.len, 10, 20);
  } else {
    textSize(25);
    textAlign(CENTER, CENTER);
    text("Snake\npress ENTER to start" + "\nHighscore: " + highscore, width/2, height/2);
  }
}

void newFood() {
  food.x = floor(random(width));
  food.y = floor(random(height));
  food.x = floor(food.x/grid) * grid;
  food.y = floor(food.y/grid) * grid;
}

void startGame() {
  if (keyCode == ENTER) {
    if (dead) {
      snake = new Snake();
      newFood();
      speed = 10 ;
      dead = false;
    }
  }
}
