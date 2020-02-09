class EnemyBullet extends GameElement {
    constructor(x, y) {

        super()

        this.img = 'bullet2';
        this.hit = false;
        this.is_bullet =true;

        // coordinations needed to calculate collision
        this.x = x;
        this.y = y;
        this.width = game.myCanvas.width * 9 / 480;
        this.height = game.myCanvas.width * 21 / 480;



    }

    update() {
        this.y += 4;
        if (this.y > game.myCanvas.height || this.hit) {
            game.gameItems.forEach((obj, index) => {
                if (obj == this) {
                    game.gameItems.splice(index, 1);
                }
            });
        }

        // game.gameItems.forEach((obj,Index)=>{
        //     if(obj.is_enemy==true){
        //         if(this.x+this.width>obj.x&&
        //             this.x<obj.x+obj.width&&
        //             this.y<obj.y+obj.height+10&&
        //             obj.crashed==false){
        //                 this.hit=true;
        //                 obj.hp--;
        //             }
        //     }
        // })

        // detect if enemy's bullet is hit

        if (this.x + this.width > game.hero.x+5&&
            this.x < game.hero.x + game.hero.width-5 &&
            this.y < game.hero.y + game.hero.height-5 &&
            this.y + this.height > game.hero.y+5 &&
            game.hero.crashed == false) {
            this.hit = true;
            game.hero.crashed = true;
        }





    }
    render() {

        // game.ctx.save();



        game.ctx.drawImage(game.imgCache[this.img], this.x, this.y, this.width, this.height);
        // game.ctx.restore();


    }




    // start() {
    //     (!this.is_picked) && (this.bird = this.pickBird());
    //     this.x = game.viewHeight / 8;
    //     this.y = game.viewHeight / 3;
    //     this.downSpeed = 0;
    //     this.gravity = 29 * (game.viewHeight / 512) * parseFloat((game._interval / 1000).toFixed(2));
    //     this.jump();
    // }



}