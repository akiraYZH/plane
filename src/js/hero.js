class Hero extends GameElement {
    constructor() {

        super()

        //hero img
        this.img = ['hero1', 'hero2', 'hero3', 'hero4', 'hero5', 'hero6'];
        this.count = 0;
        this.from = 2;
        this.is_changed = false;
        this.ready_to_shoot = false;

        // this.bullet = [];
        this.crashed = false;






        // coordinations needed to calculate collision

        this.width = game.myCanvas.width / 4.8;
        this.height = game.myCanvas.width * 1.24 / 4.8;
        this.x = (game.myCanvas.width - this.width) / 2;
        this.y = game.myCanvas.height - 100;

        this.x_origin = 0;
        this.y_origin = 0;
        this.touch_x = this.x;
        this.touch_y = this.y;

        //move
        game.myCanvas.onmousemove = function (ev) {

            let e = ev || window.event;
            if ((ev.clientX < $(game.myCanvas).position().left + game.bomb.x ||
                ev.clientX > $(game.myCanvas).position().left + game.bomb.x + game.bomb.width ||
                ev.clientY < $(game.myCanvas).position().top + game.bomb.y ||
                ev.clientY > $(game.myCanvas).position().top + game.bomb.y + game.bomb.height)
                &&
                (ev.clientX < $(game.myCanvas).position().left + game.stop_btn.x ||
                ev.clientX > $(game.myCanvas).position().left + game.stop_btn.x + game.stop_btn.width ||
                ev.clientY < $(game.myCanvas).position().top + game.stop_btn.y ||
                ev.clientY > $(game.myCanvas).position().top + game.stop_btn.y + game.stop_btn.height)) {
                this.x = e.clientX - $(game.myCanvas).offset().left - this.width / 2;
                this.y = e.clientY - $(game.myCanvas).offset().top - this.height / 2;
            }

        }.bind(this);

        game.myCanvas.ontouchstart = function (ev) {
            let e = ev || window.event;
            let touch = ev.targetTouches[0];
            if (event.targetTouches.length > 1 || event.scale && event.scale !== 1) {
                return;
            };
            this.x_origin = touch.clientX;
            this.y_origin = touch.clientY;


        }.bind(this);

        game.myCanvas.ontouchmove = function (ev) {
            let e = ev || window.event;
            let touch = ev.targetTouches[0];
            //当屏幕有多个touch或者页面被缩放过，就不执行move操作
            if (event.targetTouches.length > 1 || event.scale && event.scale !== 1) {
                return;
            };


            console.log(touch.clientX - this.x_origin);
            this.x = this.touch_x + (touch.clientX - this.x_origin) - $(game.myCanvas).offset().left - this.width / 2;
            this.y = this.touch_y + (touch.clientY - this.y_origin) - $(game.myCanvas).offset().top - this.height / 2;
        }.bind(this);


    }

    update() {

        // bullet section
        if (!this.ready_to_shoot) {
            this.ready_to_shoot = true;



            setTimeout(() => {
                if (!this.crashed) {
                    new HeroBullet(this.x + this.width * 0.1, this.y);
                    new HeroBullet(this.x + this.width * 0.9 - game.myCanvas.width * 9 / 480, this.y);
                }


                // this.bullet.push(bullet);
                this.ready_to_shoot = false;

            }, 200);
        }





        // switch images to 'fly'
        if (!this.is_changed) {
            this.is_changed = true;
            if (!this.crashed) {
                (++this.count > 1) && (this.count = 0);
            } else {
                game.myCanvas.onmousemove = null;
                this.count = this.from++;
                if (this.count >= 6) {
                    game.is_crashed = true;
                    game.gameItems = game.gameItems.filter((obj) => {
                        if (obj == this) {
                            return false;
                        } else {
                            return true;
                        }
                    })
                }
            }

            setTimeout(() => {
                this.is_changed = false;
            }, 200);
        }



    }
    render() {



        game.ctx.drawImage(game.imgCache[this.img[this.count]], this.x, this.y, this.width, this.height);
        // game.ctx.restore();


    }







}