class Title extends GameElement{
    constructor(){
        
        super();
        this.width=game.myCanvas.width*429/480;
        this.height=game.myCanvas.width*84/480;
        
    }

    update(){
       if(game.is_start){
        game.gameItems = game.gameItems.filter(obj => {
            if (obj == this) {
                return false;
            } else {
                return true;
            }
        });
       }
    }
    render(){
        
        game.ctx.drawImage(game.imgCache["title"],(game.myCanvas.width-this.width)/2, game.myCanvas.height*0.33,this.width,this.height);
        
        
        
    }
}