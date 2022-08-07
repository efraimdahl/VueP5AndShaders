
let p5;
let delegate
let canvas
export function main(_p5) {
  p5 = _p5

  let mandel;
  let vert
  let frag

  p5.preload = _ =>{
    vert = require('~/assets/shaders/shader.vert'); //Load the shader components from the assets folder
    frag = require('~/assets/shaders/shader.frag');
    console.log(vert.default)
  }
  

  p5.setup = _ => {
    var canvas = p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL);
    canvas.parent("p5Canvas");
    //Webpack creates file objects, so we have to access the object field to get the raw string.
    mandel = p5.createShader(vert.default, frag.default); 
    p5.shader(mandel);
    p5.noStroke();
    mandel.setUniform('p', [-0.74364388703, 0.13182590421]);
    p5.describe('zooming Mandelbrot set. a colorful, infinitely detailed fractal.');
    
  }
  
  p5.draw = _ => {
   // 'r' is the size of the image in Mandelbrot-space
    mandel.setUniform('r', 1.5 * p5.exp(-6.5 * (1 + p5.sin(p5.millis() / 2000))));
    p5.quad(-1, -1, 1, -1, 1, 1, -1, 1);
  }

  p5.windowResized = _ =>{
    p5.resizeCanvas(window.innerWidth, window.innerHeight);
  }
}


export function setDelegate(_delegate) {
  delegate = _delegate
}