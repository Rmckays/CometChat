import React, { Component } from 'react';
import style from './Canvas.module.css';

class Canvas extends Component {
   constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
      this.state = {
         height: window.innerHeight,
         width: window.innerWidth,
      };
   }

   componentDidMount() {
      this.drawCanvas();
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
      gradient.addColorStop(0.7, 'rgba(38, 38, 80, 1)');

      return gradient;
   }

   drawCanvas() {
      const canvas = this.canvasRef.current;
      canvas.width = this.state.width;
      canvas.height = this.state.height;
      const context = canvas.getContext('2d');
      const gradient = this.drawGradient(context);
      context.fillStyle = gradient;
      context.fillRect(0, 0, this.state.width, this.state.height);
      console.log('height:', this.state.height);
      console.log('width:', this.state.width);
   }

   render() {
      return (
         <canvas
            ref={this.canvasRef}
            id='backdrop'
            className={style.canvas}
            width={this.state.width}
            height={this.state.height}></canvas>
      );
   }
}

export default Canvas;
