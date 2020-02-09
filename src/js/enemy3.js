class Enemy3 extends GameElement {
    constructor() {

        super()

        //hero img
        this.img = ['enemy3_1', 'enemy3_2', 'enemy3_3', 'enemy3_4', 'enemy3_5','enemy3_6','enemy3_7', 'enemy3_8','enemy3_9'];
        this.count = 0;
        this.from = 2;
        this.is_enemy=true;
        this.is_changed = false;
        this.ready_to_shoot = false;
        // this.bullet = [];
        this.crashed = false;
        this.hp=30;
        this.score=10;




        // coordinations needed to calculate collision
        
        this.width = game.myCanvas.width * 165 / 480;
        this.height = game.myCanvas.width * 246 / 480;
        this.x = this.getRdm(0, game.myCanvas.width - this.width);
        this.y = -this.height;



    }

    update() {

        if(this.hp==0){
            this.crashed=true;
        }
        // bullet section
        if (!this.ready_to_shoot) {
            this.ready_to_shoot = true;



            setTimeout(() => {

                //create bullet
                if(!this.crashed){
                    new EnemyBullet(this.x + (this.width - 9) / 2,this.y+this.height);
                }
                this.ready_to_shoot = false;

            }, 1000);
        }


        this.y+=0.5;
        if (this.y > game.myCanvas.height) {
            game.gameItems.forEach((obj, index) => {
                if (obj == this) {
                    game.gameItems.splice(index, 1);
                }
            });
        }
        // switch images to 'fly'
        if (!this.is_changed) {
            this.is_changed = true;
            if (!this.crashed) {
                if(this.count++>0){
                    this.count = 0;
                }
                
            } else {
                
                this.count = this.from++;
                if (this.count >= 9) {
                    game.gameItems.forEach((obj, index) => {
                        if(obj==this){
                            game.score+=this.score;
                            game.gameItems.splice(index,1);
                        }
                        
                    })
                }
            }

            setTimeout(() => {
                this.is_changed = false;
            }, 200);
        }

       

        
        
        

        //detect if hero collides the enemy
        if(game.hero.x+game.hero.width>this.x&&
            game.hero.x<this.x+this.width&&
            game.hero.y<this.y+this.height&&
            game.hero.y+game.hero.height> this.y&&
            this.crashed==false){
                game.hero.crashed=true;
            }
    }
    render() {

        // game.ctx.save();

        if(game.imgCache[this.img[this.count]]){
            game.ctx.drawImage(game.imgCache[this.img[this.count]], this.x, this.y, this.width, this.height);
        }
        
        // game.ctx.restore();


    }




 



}