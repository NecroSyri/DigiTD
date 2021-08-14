import { menu } from "./menu.js";
import { spriter } from "./spriter.js";

// GLOBAL VARIABLES
let fps = 300;
let spriteV1 = {
    url : "./img/v1sprite1.svg",
    height : 16,
    width : 16,
    horizontal : 16,
    vertical : 14
};

let botaIdle = {
    url : spriteV1.url,
    height : spriteV1.height,
    width : spriteV1.width,
    horizontal : spriteV1.horizontal,
    vertical : spriteV1.vertical,
    start : 1,
    frames : 2,
    loop : true,
    fps : fps,
    callback : 0
};

// ELEMENTS

// EVENTS CALLBACK
/*
function keydown(e){
    clearInterval(sprite.spriteLoop);
}
*/

// BIND EVENTS
/*
function b_keydown(){
    document.addEventListener("keydown",keydown);
}
*/

// FUNCTIONS

// MAIN
spriter.init();
menu.init();
//sprite.spriteAnimate(botaIdle);