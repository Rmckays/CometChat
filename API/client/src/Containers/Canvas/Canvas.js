import React, { Component } from 'react';
import style from './Canvas.module.css';
import Comet from '../../Components/Comet';

class Canvas extends Component {
   constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
      this.state = {
         height: window.innerHeight,
         width: window.innerWidth,
         comets: [],
         numComets: 5,
      };
   }

   createComets() {
      for (let i = 0; i < this.state.numComets; i++) {
         let comet = new Comet(this.state.width);
         this.state.comets[i] = comet;
      }
   }

   componentDidMount() {
      const canvas = this.canvasRef.current;
      const ctx = canvas.getContext('2d');
      this.createComets();

      setInterval(() => this.drawCanvas(canvas, ctx), 70);
      setInterval(() => {
         for (let i = 0; i < this.state.numComets; i++) {
            this.state.comets[i].updateComet(ctx, this.state.width);
         }
      }, 15);
   }

   componentDidUpdate() {
      this.setState({ height: window.innerHeight });
      this.setState({ width: window.innerWidth });
      this.drawCanvas();
   }

   drawGradient(context) {
      const gradient = context.createRadialGradient(
         this.state.width / 2,
         this.state.height - 300,
         200,
         this.state.width / 2,
         this.state.height / 2,
         this.state.height * 1.25
      );
      gradient.addColorStop(0, 'rgba(254, 245, 187, 1)');
      gradient.addColorStop(0.13, 'rgba(252, 215, 140, 1)');
      gradient.addColorStop(0.25, 'rgba(248, 165, 123, 1)');
      gradient.addColorStop(0.39, 'rgba(184, 115, 187, 1)');
      gradient.addColorStop(0.57, 'rgba(75, 73, 156, 1)');
      gradient.addColorStop(0.8, 'rgba(38, 38, 80, 1)');

      return gradient;
   }

   drawCanvas(canvas, ctx) {
      const gradient = this.drawGradient(ctx);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, this.state.width, this.state.height);
   }

   render() {
      return (
         <canvas
            ref={this.canvasRef}
            id='backdrop'
            className={style.canvas}
            width={this.state.width}
            height={this.state.height}/>
      );
   }
}

export default Canvas;
