class Bomb extends GameElement {
    constructor() {

        super();
        this.img = "bomb";
        this.width = game.myCanvas.width * 63 / 480;
        this.height = game.myCanvas.width * 53 / 480;
        this.x = 10;
        this.y = game.myCanvas.height - this.height - 40;
        this.num = 3;
        this.n1 = this.n2=parseInt(game.score/100);
        this.is_click =false;
        
    }

    update() {

        this.n2=parseInt(game.score/100);
        console.log(this.n2);
        
        if (this.n2>this.n1) {
            this.num++;
            this.n1=this.n2;
        }



    }
    render() {
        if(this.is_click){
            game.ctx.clearRect(0,0, game.myCanvas.width, game.myCanvas.height);
            game.ctx.save();
            game.ctx.fillStyle='white';
            game.ctx.fillRect(0,0, game.myCanvas.width, game.myCanvas.height);
            game.ctx.restore()
            setTimeout(() => {
                this.is_click=false;
            }, 100);
        }else{
            game.ctx.drawImage(game.imgCache[this.img], this.x, this.y, this.width, this.height);
        game.ctx.save();
        game.ctx.font='16px Arial';
        game.ctx.fillStyle='black';
        game.ctx.fillText(this.num,this.x+20, this.y+this.height+20);
        game.ctx.restore();
        }
        
    }

    bomb(ev) {
        
        if (this.num <= 0 ||
            ev.clientX < $(game.myCanvas).position().left + this.x ||
            ev.clientX > $(game.myCanvas).position().left + this.x + this.width ||
            ev.clientY < $(game.myCanvas).position().top + this.y ||
            ev.clientY > $(game.myCanvas).position().top + this.y + this.height) {
            return;
        }
        this.is_click=true;
        game.gameItems.forEach((obj,index)=>{
            if(obj.is_enemy){
                obj.crashed = true;
            }else if(obj.is_bullet){
                game.gameItems.splice(index,1);
            }
        })
        
        
        this.num--;
        console.log(this.num);
    }
}