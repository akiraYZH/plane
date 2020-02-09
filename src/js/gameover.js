class Gameover extends GameElement {
    constructor() {

        super()
        this.is_gameover=true;
        this.confirm_width = game.myCanvas.width*112/480;
        this.confirm_height = game.myCanvas.width*28/480;
        this.confirm_left = (game.myCanvas.width-this.confirm_width)/ 2;
        this.confirm_right = this.confirm_left + this.confirm_width;
        this.confirm_top =game.myCanvas.height-100;
        this.confirm_bottom = this.confirm_top + this.confirm_height;
        this.resumeY = this.confirmY=game.myCanvas.height;
        this.opacity = 0;
        this.showSpeed = 40;
    }

    update() {
        if (!game.is_crashed) {
            this.resumeY = this.confirmY = game.myCanvas.height;
        } else {
            this.resumeY=0;
            this.confirmY = game.myCanvas.height-100;
            
            clearInterval(game.enemy1_timer);
            clearInterval(game.enemy2_timer);
            clearInterval(game.enemy3_timer);
            game.gameItems.forEach((obj,index)=>{
                if(!(obj.is_bg||obj.is_gameover)){
                    game.gameItems.splice(index,1);
                }
            })


            if(game.score>game.best){
                game.best = game.score;
            }

            game.myCanvas.onclick=this.restore.bind(this);
            // console.log(game.gameItems);
            
            
        }


    }
    render() {
        // game.ctx.clearRect(0,0, game.viewWidth,game.viewHeight);
        game.ctx.save();

        
        
        game.ctx.drawImage(game.imgCache["gameover"], 0, this.resumeY,game.myCanvas.width , game.myCanvas.height);
        game.ctx.save()
        game.ctx.textAlign='center';
        game.ctx.fillStyle='black';
        game.ctx.font='20px impact';
        game.ctx.fillText(game.score, game.myCanvas.width/2+this.resumeY ,game.myCanvas.height*0.75);
        game.ctx.fillText(game.best, game.myCanvas.width/2+this.resumeY,game.myCanvas.height*0.4);
        game.ctx.restore()
        game.ctx.drawImage(game.imgCache["restore"], this.confirm_left, this.confirmY, this.confirm_width, this.confirm_height);
        game.ctx.restore();

    }

    restore(ev) {
        // console.log((ev.clientX-$(game.myCanvas).position().left > this.confirm_left &&
        //     ev.clientX-$(game.myCanvas).position().left < this.confirm_right &&
        //     ev.clientY-$(game.myCanvas).position().top > this.confirm_top &&
        //     ev.clientY-$(game.myCanvas).position().top < this.confirm_bottom));
        // console.log(this.confirm_left, this.confirm_right, this.confirm_top,this.confirm_bottom);
        
        
        
        if (ev.clientX-$(game.myCanvas).position().left > this.confirm_left &&
            ev.clientX-$(game.myCanvas).position().left < this.confirm_right &&
            ev.clientY-$(game.myCanvas).position().top > this.confirm_top &&
            ev.clientY-$(game.myCanvas).position().top < this.confirm_bottom) {

            game.start();
        }
    }
}