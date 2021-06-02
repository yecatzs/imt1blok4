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
  //fontDOS = createFont("MorePerfectDOSVGA.ttf", charSize);
  //textFont(fontDOS);
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

class Snake {
  PVector pos;
  PVector vel;
  ArrayList<PVector> hist;
  int len;
  int moveX = 0;
  int moveY = 0;

  Snake() {
    pos = new PVector(0, 0);
    vel = new PVector();
    hist = new ArrayList<PVector>();
    len = 0;
  }

  void update() {
    hist.add(new PVector(pos.x, pos.y));
    pos.x += vel.x*grid;
    pos.y += vel.y*grid;
    moveX = int(vel.x);
    moveY = int(vel.y);

    pos.x = (pos.x + width) % width;
    pos.y = (pos.y + height) % height;

    if (hist.size() > len) {
      hist.remove(0);
    }

    for (PVector p : hist) {
      if (p.x == pos.x && p.y == pos.y) {
        dead = true;
        if (len > highscore) highscore = len;
      }
    }
  }

  void eat() {
    if (pos.x == food.x && pos.y == food.y) {
      len++;
      if (speed > 5) speed--;
      newFood();
    }
  }

  void show() {
    noStroke();

    if (snake.len >= 15) {
      fill(random(0, 255), random(0, 255), random(0, 255));
    } else {
      fill(125);
    }
    rect(pos.x, pos.y, grid, grid);
    for (PVector p : hist) {
      rect(p.x, p.y, grid, grid);
    }
    if (snake.len == 19) {
      fill(255);
      textSize(25);
      textAlign(CENTER, CENTER);
      text("You think you got this?", width/2, height/2);
    }
    if (snake.len == 21) {
      fill(255);
      textSize(25);
      textAlign(CENTER, CENTER);
      text("DO U HAVE CONTROL", width/2, height/2);
    }
    if (snake.len >= 22) {
      dead = false;
      noFill();
      strokeWeight(5);
      stroke(random(0, 255));
      rect(0, 0, width, height);
    }
    if (snake.len >= 22 && displayMessage) {
      fill(255);
      textSize(25);
      textAlign(CENTER, CENTER);
      text("WANT TO ESCAPE?\nPRESS ENTER", width/2, height/2);
    }
    if (snake.len >= 22 && keyCode == ENTER) {
      displayMessage = false;
      fill(255);
      textSize(25);
      textAlign(CENTER, CENTER);
      text("PRESS SHIFT", width/4, height/4);
    }
    if (snake.len >= 22 && keyCode == SHIFT) {
      fill(255);
      textSize(25);
      textAlign(CENTER, CENTER);
      text("PRESS BACKSPACE", width * 0.75, height * 0.75);
    }
    if (snake.len >= 22 && keyCode == BACKSPACE) {
      fill(255);
      textSize(25);
      textAlign(CENTER, CENTER);
      text("PRESS 1", width/4, height/4);
    }
    if (snake.len >= 22 && key == '1') {
      fill(255);
      textSize(25);
      textAlign(CENTER, CENTER);
      text("PRESS X", width * 0.75, height/8);
    }
    if (snake.len >= 22 && key == 'x') {
      fill(255);
      textSize(25);
      textAlign(CENTER, CENTER);
      text("PRESS F & U AT THE SAME TIME", 500, height*0.75);
      delay(100);
      text("U JUST FOLLOWED ORDERS FROM A COMPUTER\nBYE", width/2, height/2);
    }
    if (snake.len >= 22 && key == 'f') {
      fill(255);
      textSize(25);
      textAlign(CENTER, CENTER);

      dead = true;
    }
  }
}

void keyPressed() {
  if (snake.len < 15) {
    if (keyCode == LEFT && snake.moveX != 1) {
      snake.vel.x = -1;
      snake.vel.y = 0;
    } else if (keyCode == RIGHT && snake.moveX != -1) {
      snake.vel.x = 1;
      snake.vel.y = 0;
    } else if (keyCode == UP && snake.moveY != 1) {
      snake.vel.y = -1;
      snake.vel.x = 0;
    } else if (keyCode == DOWN && snake.moveY != -1) {
      snake.vel.y = 1;
      snake.vel.x = 0;
    }
  }
  if (snake.len >=15 && snake.len <20) {
    if (keyCode == RIGHT && snake.moveX != 1) {
      snake.vel.x = -1;
      snake.vel.y = 0;
    } else if (keyCode == LEFT && snake.moveX != -1) {
      snake.vel.x = 1;
      snake.vel.y = 0;
    } else if (keyCode == UP && snake.moveY != 1) {
      snake.vel.y = -1;
      snake.vel.x = 0;
    } else if (keyCode == DOWN && snake.moveY != -1) {
      snake.vel.y = 1;
      snake.vel.x = 0;
    }
  }
  if (snake.len >=20) {
    if (keyCode == RIGHT && snake.moveX != 1) {
      snake.vel.x = -1;
      snake.vel.y = 0;
    } else if (keyCode == LEFT && snake.moveX != -1) {
      snake.vel.x = 1;
      snake.vel.y = 0;
    } else if (keyCode == DOWN && snake.moveY != 1) {
      snake.vel.y = -1;
      snake.vel.x = 0;
    } else if (keyCode == UP && snake.moveY != -1) {
      snake.vel.y = 1;
      snake.vel.x = 0;
    }
  }
}
