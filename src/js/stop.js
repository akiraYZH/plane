class Stop extends GameElement{
    constructor(){
        
        super();
        // this.is_stop=false;
        this.img = "stop";
        this.width=game.myCanvas.width*42/480;
        this.height=game.myCanvas.width*45/480;
        this.x= game.myCanvas.width-this.width-10;
        this.y = game.myCanvas.height -this.height -10;
        
    }

    update(){

        
        if (game.is_stop) {
            this.img='return';
        }else{
            this.img='stop';
        }
        

   
    }
    render(){
        
        game.ctx.drawImage(game.imgCache[this.img],this.x, this.y,this.width,this.height);
        
        
        
    }
}