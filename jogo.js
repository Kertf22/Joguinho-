const sprites = new Image();
sprites.src = "./sprites.png";

const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")


//Bird
const Bird = {
    Spritex : 0,
    Spritey : 0,
    width: 33,
    height: 24,
    x: 10,
    y: 140,
    desenha(){
        ctx.drawImage(
            sprites
            ,Bird.Spritex, Bird.Spritey //Sprite x / Sprite y
            ,Bird.width, Bird.height    //Mensure of the Sprite
            ,Bird.x, Bird.y
            ,Bird.width, Bird.height,
        )
    }
    
}

//Ground 
const Ground ={
    Spritex : 0,
    Spritey : 600,
    width: 220,
    height: 106,
    x: 0,
    y: canvas.height - 106,
    desenha(){
        ctx.drawImage(
            sprites
            ,Ground.Spritex, Ground.Spritey //Sprite x / Sprite y
            ,Ground.width, Ground.height    //Mensure of the Sprite
            ,(Ground.x ), Ground.y
            ,Ground.width , Ground.height,
        )
        ctx.drawImage(
            sprites
            ,Ground.Spritex, Ground.Spritey //Sprite x / Sprite y
            ,Ground.width, Ground.height    //Mensure of the Sprite
            ,(Ground.x + Ground.width), Ground.y
            ,Ground.width , Ground.height,
        )
    }

}

//BackGround

const BackGround = {
    Spritex : 390,
    Spritey : 0,
    width: 275,
    height: 284,
    x: 0,
    y: canvas.height - 204,
    desenha(){
        ctx.fillStyle = '#70c5ce';
        ctx.fillRect( 0 ,0 ,canvas.width ,canvas.height);


        ctx.drawImage(
            sprites
            ,BackGround.Spritex, BackGround.Spritey //Sprite x / Sprite y
            ,BackGround.width, BackGround.height    //Mensure of the Sprite
            ,BackGround.x , BackGround.y
            ,BackGround.width , BackGround.height,
        )
        ctx.drawImage(
            sprites
            ,BackGround.Spritex, BackGround.Spritey //Sprite x / Sprite y
            ,BackGround.width, BackGround.height    //Mensure of the Sprite
            ,BackGround.x + BackGround.width, BackGround.y
            ,BackGround.width , BackGround.height,
        )

    }
}

function loop(){
    BackGround.desenha()
    Bird.desenha()
    Ground.desenha()
    requestAnimationFrame(loop);
}

loop()