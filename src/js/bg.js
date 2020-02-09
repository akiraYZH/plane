class Background extends GameElement{
    constructor(){
        
        super()
        //randomly pick the bg img.
        this.img = game.imgCache['bg'];
        this.is_picked=true;
        this.y=0;
        this.speed=1;
        this.is_bg=true;
 
    }

    update(){
        (this.y>=game.myCanvas.height)&&(this.y=0);
        this.y+=this.speed;
    }
    render(){
        
        game.ctx.drawImage(this.img,0,this.y,game.myCanvas.width,game.myCanvas.height);
        game.ctx.drawImage(this.img,0,-game.myCanvas.height+this.y,game.myCanvas.width,game.myCanvas.height);
        
    }
    
    start(){
        // (!this.is_picked)&&(this.img = this.pickBg());
        
    }
}