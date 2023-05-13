class Game {
    constructor() {
      this.createTarget();
      targetAppear.play();
  
      this.score = createP("Pontuação: " + score);
      this.score.position(width / 2 - 630, height / 2 - 320);
      this.score.class("SAText");
  
      this.arrows = createP("Flechas: " + arrowsLeft);
      this.arrows.position(width / 2 - 630, height / 2 - 280);
      this.arrows.class("SAText");
  
      this.inactivityTimeout = null;
      this.restartInactivityTimeout();
    }
  
    restartInactivityTimeout() {
      clearTimeout(this.inactivityTimeout);
      this.inactivityTimeout = setTimeout(() => {
        this.target.remove();
        this.createTarget();
      }, 3000);
    }
  
    createTarget() {
      this.target = createSprite(random(250, 750), random(100, 400));
      this.target.addImage(targetImg);
      this.target.scale = random(0.04, 0.07);
      targetAppear.play();
  
      if (arrowsLeft > 0) {
        this.target.onMousePressed = () => {
          clearTimeout(this.inactivityTimeout);
          this.restartInactivityTimeout();
  
          bowShootSound.play();
          score += 100;
          arrowsLeft -= 1;
  
          this.score.html("Pontuação: " + score);
          this.arrows.html("Flechas: " + arrowsLeft);
  
          this.target.remove();
          setTimeout(() => {
            this.createTarget();
          }, 1000);
  
          if (arrowsLeft === 0) {
            this.arrowsReloadText = createP("RECARREGUE SUAS FLECHAS!");
            this.arrowsReloadText.position(width / 2 - 630, height / 2 - 240);
            this.arrowsReloadText.style("color", "red");
            this.arrowsReloadText.style("font-size", "20px");
            this.arrowsReloadText.style("opacity", "100%");
          }
        };
      }
    }
  
    reloadArrows() {
      if (arrowsLeft === 0) {
        arrowsLeft = 5;
        this.target.remove();
        this.createTarget();
        this.arrowsReloadText.style("opacity", "0%");
        this.arrows.html("Flechas: " + arrowsLeft);
        bowReloadSound.play();
      }
    }
  }
  