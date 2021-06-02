
// ripple/druppel
int cols=1280;
int rows=720;
float[][] current= new float [cols][rows];
float[][] past= new float [cols][rows];
float damp=0.999;
float p;

//circular motion
int cx = 250;
int cy = 250;
int r = 100;

//tellers

float growth;
int count;

//random clicks
int randomX;
int randomY;

// mouseclicks
int [] posX;
int [] posY;
int currentPos;
int xpos;
int ypos;




void setup()
{
  size(1280, 720);
  cols=width;
  rows=height;
  current= new float [cols][rows];
  past= new float [cols][rows];
  posX = new int [0];
  posY = new int[0];
  frameRate(60);
}

void draw()
{

  background(0);
  loadPixels();
  textSize(50);
  fill(255);
  pixels [255] = color (255);
  updatePixels();
  ultron();
}

void ultron() {



  if (frameCount%100 ==0) {
    growth = growth + 100;
  }
  if (growth > 2000) {
    growth = 2000;
  }





  //  ;
  past[mouseX][mouseY]=random(1000);
  if (keyCode == ENTER) {
    loadPixels();
    for (int i=1; i<cols-1; i++) {
      for (int j=1; j<rows-1; j++) {
        current[i][j]  = (past[i-1][j]
          +past[i+1][j]
          +past[i][j-1]+past[i][j+1])/2-
          current[i][j];  
        int b=i+j*cols;
        int c=i+j*rows;
        current[i][j]=current[i][j]*damp;
        pixels[b]= color(current[i][j], 0, 0);
      }
    } 



    updatePixels();
    float [][] temp2=past;
    past=current;
    current=temp2;
    translate(width/2, height/2);
    past[width/2][height/2]=10;
  } else {
    loadPixels();

    for (int i=1; i<cols-1; i++) {
      for (int j=1; j<rows-1; j++) {
        current[i][j]  = (past[i-1][j]
          +past[i+1][j]
          +past[i][j-1]+past[i][j+1])/2-
          current[i][j];  
        int b=i+j*cols;
        current[i][j]=current[i][j]*damp;
        pixels[b]= color (constrain(255, current[i][j], 0));
      }
    }


    updatePixels();
    float [][] temp=past;
    past=current;
    current=temp;
    translate(width/2, height/2);
    float t = millis()/1000.0f;
    int x = (int)(cx+r*cos(t));
    int y = (int)(cy+r*sin(t));
    past[x+400][y+125]= random(-2000, growth);
    if (keyCode == '2') {
      past[x+400][y+125]= random(-2000, growth);
      past[x+100][y+125]=random(-2000, growth);
    }
    if (keyCode == '3') {
      past[x+400][y+125]= random(-2000, growth);
      past[x+700][y+125]=random(-2000, growth);
      past[x+100][y+125]=random(-2000, growth);
    }
  }
}


// elke buttonpress iets

void keyPressed() {

  count = count +10;
  randomX = int(random(0, 1280));
  randomY = int(random(0, 720));

  loadPixels();
  for (int i=1; i<cols-1; i++) {
    for (int j=1; j<rows-1; j++) {
      current[i][j]  = (past[i-1][j]
        +past[i+1][j]
        +past[i][j-1]+past[i][j+1])/2-
        current[i][j];  
      int b=i+j*cols;
      int c=i+j*rows;
      current[i][j]=current[i][j]*damp;
      pixels[b]= color(constrain(255, current[i][j], 0));
    }
  }
  updatePixels();
  float [][] temp=past;
  past=current;
  current=temp;
  translate(width/2, height/2);
  past[randomX][randomY]=1000 + count;

  //tellers

  count++;
}


//muiskliks om na te bootsen 
void mouseClicked() {

  posX = append(posX, mouseX);
  posY = append(posY, mouseY);

  loadPixels();
  for (int i=1; i<cols-1; i++) {
    for (int j=1; j<rows-1; j++) {
      current[i][j]  = (past[i-1][j]
        +past[i+1][j]
        +past[i][j-1]+past[i][j+1])/2-
        current[i][j];  
      int b=i+j*cols;
      int c=i+j*rows;
      current[i][j]=current[i][j]*damp;
      pixels[b]= color(constrain(255, current[i][j], 0));
    }
  }


  updatePixels();
  float [][] temp=past;
  past=current;
  current=temp;
  translate(width/2, height/2);
  for (int i = 0; i<posX.length; i++) {
    past[posX[i]][posY[i]]=3000;
  }
  randomX = int(random(0, 1280));
  randomY = int(random(0, 720));
  past[200][200]=3000;
  past[500][700]=3000;
  past[1000][120]=3000;
  past[800][500]=3000;
  past[50][350]=3000;
}
