export let spriter = {
    init : function(){
        HTMLElement.prototype.spriteAnimate = function(options){
            this.style.backgroundImage = "url(" + options.url + ")";
            this.style.backgroundRepeat = "no-repeat";
            this.style.backgroundPositionX = "0px";
            this.style.backgroundPositionY = "0px";

            // Background size = targetElement size * number of sprites
            this.style.backgroundSize = options.horizontal * this.scrollWidth + "px " + options.vertical * this.scrollHeight + "px";

            this.spriteOptions = options;
            this.spriteOptions.position = options.start;
            this.spriteOptions.cursorX = options.start;
            this.spriteOptions.cursorY = options.start;

            setCursors(this);
            spriteDraw(this);

            this.spriteLoop = setInterval(spriteDraw,options.fps,this);

            function spriteDraw(target){
                setCursors(target);
                target.style.backgroundPositionX = "-"+ target.spriteOptions.cursorX * target.scrollWidth + "px";
                target.style.backgroundPositionY = "-"+ target.spriteOptions.cursorY * target.scrollWidth + "px";
                
                if(target.spriteOptions.position < (target.spriteOptions.start + (target.spriteOptions.frames-1))){
                    target.spriteOptions.position++;
                }else{
                    target.spriteOptions.position = target.spriteOptions.start;
                    if(!target.spriteOptions.loop){
                        clearInterval(target.spriteLoop);
                    }
                    if(typeof(target.spriteOptions.callback) === "function"){
                        target.spriteOptions.callback();
                    }
                }
            }

            function setCursors(target){
                let p = target.spriteOptions.position;
                let h = target.spriteOptions.horizontal;
                let x = 0;
                let y = 0;

                x = (p-1)%h;
                y = Math.floor((p-1)/h);
                target.spriteOptions.cursorX = x;
                target.spriteOptions.cursorY = y;
            }
        }
    }
}