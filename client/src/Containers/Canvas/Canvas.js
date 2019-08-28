import React, { Component } from 'react';

const canvas = document.getElementById('canvas');
import React, { Component } from 'react';

let height = window.innerHeight;
let width = window.innerWidth;
let comets = {};
let cometIndex = 0;
let numComets = 5;
let colors = ['rgb(254, 245, 187)', 'rgb(254, 245, 187)', 'rgb(254, 245, 187)'];

canvas.width = width;
canvas.height = height;
canvas.style.backgroundColor = 'rgba(35, 35, 35, 0.15)';
const ctx = canvas.getContext('2d');
const gradient = ctx.createRadialGradient(
   width / 2,
   height - 300,
   200,
   width / 2,
   height / 2,
   2000
);
gradient.addColorStop(0, 'rgba(254, 245, 187, 0.5)');
gradient.addColorStop(0.13, 'rgba(252, 215, 140, 0.5)');
gradient.addColorStop(0.25, 'rgba(248, 165, 123, 0.5)');
gradient.addColorStop(0.39, 'rgba(184, 115, 187, 0.5)');
gradient.addColorStop(0.57, 'rgba(75, 73, 156, 0.5)');
gradient.addColorStop(0.7, 'rgba(38, 38, 80, 0.5)');

for (let i = 0; i < numComets; i++) {
   let color = colors[Math.floor(Math.random() * colors.length)];
   let comet = new Comet(color);
   comets[i] = comet;
}

setInterval(() => {
   for (let i = 0; i < numComets; i++) {
      comets[i].updateComet(ctx);
   }
}, 5);

setInterval(() => {
   ctx.fillStyle = gradient;
   ctx.fillRect(0, 0, width, height);
}, 70);

class Canvas extends Component {
   drawCanvas() {
      const canvas = this.refs.backdrop;
      if(canvas){
         const context = canvas.getContext('2d');
         if()
      }
   }
   render() {
      return <canvas ref='backdrop' id='backdrop' width={this.props.width} height={this.props.height}></canvas>;
   }
}
