class Game {
    constructor(id) {
        this.myCanvas = document.querySelector('#game');
        this.ctx = this.myCanvas.getContext('2d');
        this.dataURL = '../js/resourses.json';
        this.imgsURL = {};
        this.imgCache = {};
        this.timer = null;
        this.enemy1_timer = null;
        this.enemy2_timer = null;
        this.enemy3_timer = null;
        this._interval = 20;
        // this.frameNum = 0;
        // this.is_built = false;
        this.is_crashed=false;
        this.is_start = false;
        this.is_stop = false;
        this.gameItems = [];
        this.speed = 0;
        this.score = 0;
        this.best = 0;




        if ($(window).width() < 500) {
            $(this.myCanvas).attr('width', $(window).width());
            $(this.myCanvas).attr('height', $(window).height());
        }

        this.getData().then((data) => {


            this.imgsURL = {
                ...data
            };
            let count = 0;
            let imgsAmount = Object.keys(this.imgsURL).length;;
            
            
            for (let k in this.imgsURL) {
                // Create image tags
                this.imgCache[k] = new Image();
                //Cache the images
                this.imgCache[k].src = this.imgsURL[k];

                this.imgCache[k].addEventListener('load', () => {
                    this.ctx.clearRect(0, 0, this.myCanvas.width, this.myCanvas.height);
                    count++;
                    //write lodaing text
                    this.ctx.font = '30px impact';
                    this.ctx.fillStyle = 'white';
                    this.ctx.textAlign = 'center';
                    this.ctx.fillText(`Loading...(${count}/${imgsAmount})`, this.myCanvas.width / 2, this.myCanvas.height / 2);

                    //loading complete
                    if (count == imgsAmount) {
                        // alert('载入完成'); 
                        this.init();

                        // callback.call(this);
                    }
                })
            }

        });
    }

    getData() {
        return $.ajax({
            "url": this.dataURL
        })
    }

    


    init() {
        this.bg = new Background();
        this.gameover = new Gameover();
        // this.floor = new Floor();
        this.title = new Title();
        // this.gameover = new Gameover();
        this.myCanvas.onclick = this.start.bind(this);


        this.timer = setInterval(this.main.bind(this), this._interval);

    }


    //Main loop
    main() {

        //clear everything
        this.ctx.clearRect(0, 0, this.viewWidth, this.viewHeight);




        //Update every game items here
        this.gameItems.forEach(item => {

           item.render();
            item.update();
            

        })

        // write score
        this.ctx.save()
        this.ctx.textAlign = 'left';
        this.ctx.fillStyle = 'white';
        this.ctx.strokeStyle = 'grey';
        this.ctx.lineWidth = 2;
        this.ctx.fillText(this.score, 20, 40);
        this.ctx.strokeText(this.score, 20, 40);
        this.ctx.restore();
        //write.best
        (this.score > this.best) && (this.best = this.score);
        this.ctx.save()
        this.ctx.font = '14px impact';
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText('Best: ' + this.best, game.myCanvas.width * 7 / 8, 38);
        this.ctx.restore();



    }

    //Game starts!!
    start() {
        this.hero = new Hero();
        this.stop_btn = new Stop();
        this.bomb = new Bomb();
        
        this.myCanvas.onclick = this.clickable.bind(this);

        this.enemy1_timer = setInterval(() => {
            new Enemy1();
        }, 2000);
        this.enemy2_timer = setInterval(() => {
            new Enemy2();
        }, 4000);
        this.enemy3_timer = setInterval(() => {
            new Enemy3();
        }, 8000);

        this.is_start = true;
        this.is_crashed=false;

       
        

        this.score = 0;

    }
    clickable(ev){
        this.stop(ev);
        this.bomb.bomb(ev);
    }
    // game stops
    stop(ev) {

        var ev = ev || window.event;
        

        if (ev.clientX < $(this.myCanvas).position().left + game.stop_btn.x ||
            ev.clientX > $(this.myCanvas).position().left + game.stop_btn.x+game.stop_btn.width||
            ev.clientY < $(this.myCanvas).position().top + game.stop_btn.y ||
            ev.clientY > $(this.myCanvas).position().top + game.stop_btn.y+game.stop_btn.height) {
            return;
        }

        
        if (!this.is_stop) {
            this.is_stop = true;
            
            clearInterval(this.timer);
            clearInterval(this.enemy1_timer);
            clearInterval(this.enemy2_timer);
            clearInterval(this.enemy3_timer);
            this.gameItems.forEach(item => {

           
                item.update();
                item.render();
    
            })

        } else {
            game.is_stop = false;
            this.timer = setInterval(this.main.bind(this), this._interval);
            this.enemy1_timer = setInterval(() => {
            new Enemy1;
        }, 2000);
        this.enemy2_timer = setInterval(() => {
            new Enemy2;
        }, 4000);
        this.enemy3_timer = setInterval(() => {
            new Enemy3();
        }, 8000);
            
        }
        
    }


}