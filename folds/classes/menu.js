class Menu {
    constructor() {

      this.menuText = createP("Tiro ao Alvo");
      this.menuText.class("menuText");
      this.menuText.position(width / 2 - 100, height / 2 - 300);

      this.nameInput = createInput("").attribute("placeholder", "Nickname");
      this.nameInput.class("nameInput");
      this.nameInput.position(width / 2 - 150, height / 2 - 70);

      this.playButton = createButton("Jogar");
      this.playButton.class("playButton");
      this.playButton.position(width / 2 - 60, height / 2 - 20);

      this.playButton.mousePressed(this.handlePlayButtonClick.bind(this));

      this.nameInputError = createP("Digite algo!");
      this.nameInputError.style("color", "red")
      this.nameInputError.style("font-size", "20px");
      this.nameInputError.style("opacity", "0%");
      this.nameInputError.position(width / 2 - 70, height / 2 - 115);

      //Controls Menu / Title

      this.controlsMenu = createDiv();
      this.controlsMenu.class("controlsMenu");
      this.controlsMenu.position(width / 2 - 500, height / 2 - 200);

      this.controlsTitle = createP("Controles");
      this.controlsTitle.class("controlsTitle");
      this.controlsTitle.position(width / 2 - 465, height / 2 - 210);

      //Controls Shoot

      this.controlsTextShootDiv1 = createDiv();
      this.controlsTextShootDiv1.class("controlsTextShootDiv1");
      this.controlsTextShootDiv1.position(width / 2 - 490, height / 2 - 135)

      this.controlsTextShootDiv2 = createDiv();
      this.controlsTextShootDiv2.class("controlsTextShootDiv2");
      this.controlsTextShootDiv2.position(width / 2 - 480, height / 2 - 125)

      this.controlsTextShoot = createP("Botão Direito → Atirar");
      this.controlsTextShoot.class("controlsTextShoot");
      this.controlsTextShoot.position(width / 2 - 472, height / 2 - 140);

      this.controlsTextShootDiv2.mousePressed(function() {
        bowShootSound.play();
      });

      //Controls Reload

      this.controlsTextReloadDiv1 = createDiv();
      this.controlsTextReloadDiv1.class("controlsTextReloadDiv1");
      this.controlsTextReloadDiv1.position(width / 2 - 490, height / 2 - 90)

      this.controlsTextReloadDiv2 = createDiv();
      this.controlsTextReloadDiv2.class("controlsTextReloadDiv2");
      this.controlsTextReloadDiv2.position(width / 2 - 480, height / 2 - 80)

      this.controlsTextReload = createP("R → Recarregar");
      this.controlsTextReload.class("controlsTextReload");
      this.controlsTextReload.position(width / 2 - 472, height / 2 - 95);

      this.controlsTextReloadDiv2.mousePressed(function() {
        bowReloadSound.play();
      });

      //Objective Menu

      this.infoMenu = createDiv();
      this.infoMenu.class("infoMenu");
      this.infoMenu.position(width / 2 + 300, height / 2 - 200);

      this.infoTitle = createP("Informações");
      this.infoTitle.class("infoTitle");
      this.infoTitle.position(width / 2 + 321, height / 2 - 210);

      this.infoText = createP("Você precisa atirar nos alv<br>os, e acertar o máximo de<br> alvos possível em 30 segun<br> dos para aparecer em uma <br> maior posição no rank.<br><br>Você tem 5 vidas, e quando<br>você erra um alvo, você<br> perde uma.<br><br>O alvo normal dá 1 ponto,<br> e o dourado, 5.<br><br>Lembre-se de recarregar<br>seu arco! Você tem 5 fle<br>chas.");
      this.infoText.class("infoText");
      this.infoText.position(width / 2 + 315, height / 2 - 140);
      
      }

      undisplay() {
        this.menuText.remove();
        this.nameInput.remove();
        this.playButton.remove();
        this.nameInputError.remove();
        this.controlsMenu.remove();
        this.controlsTitle.remove();
        this.controlsTextShootDiv1.remove();
        this.controlsTextShootDiv2.remove();
        this.controlsTextShoot.remove();
        this.controlsTextReloadDiv1.remove();
        this.controlsTextReloadDiv2.remove();
        this.controlsTextReload.remove();
        this.infoMenu.remove();
        this.infoTitle.remove();
        this.infoText.remove();
      }
      
    
      handlePlayButtonClick() {
        if (this.nameInput.value() === "") {
          this.nameInputError.style("opacity", "100%");
          setTimeout(() => {
            this.nameInputError.style("opacity", "0%");
          }, 3000);
        } else {
          gameState = 1;
          this.undisplay();
        }
      }
    }