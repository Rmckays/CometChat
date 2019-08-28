import React, { Component } from 'react';

class Canvas extends Component {
   constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
      this.height = this.props.height;
      this.width = this.props.width;
   }

   componentDidMount() {
      const canvas = this.canvasRef.current;
      const context = canvas.getContext('2d');
      const gradient = context.createRadialGradient(
         50,
         100,
         100,
         100,
         200,
         200
      );
      gradient.addColorStop(0, 'rgba(254, 245, 187, 0.5)');
      gradient.addColorStop(0.13, 'rgba(252, 215, 140, 0.5)');
      gradient.addColorStop(0.25, 'rgba(248, 165, 123, 0.5)');
      gradient.addColorStop(0.39, 'rgba(184, 115, 187, 0.5)');
      gradient.addColorStop(0.57, 'rgba(75, 73, 156, 0.5)');
      gradient.addColorStop(0.7, 'rgba(38, 38, 80, 0.5)');
      context.fillStyle = gradient;
      context.fillRect(0, 0, 300, 300);
   }

   // drawGradient(ctx) {
   //    const gradient = ctx.createRadialGradient(1000, 700, 200, 500, 500, 2000);
   //    gradient.addColorStop(0, 'rgba(254, 245, 187, 0.5)');
   //    gradient.addColorStop(0.13, 'rgba(252, 215, 140, 0.5)');
   //    gradient.addColorStop(0.25, 'rgba(248, 165, 123, 0.5)');
   //    gradient.addColorStop(0.39, 'rgba(184, 115, 187, 0.5)');
   //    gradient.addColorStop(0.57, 'rgba(75, 73, 156, 0.5)');
   //    gradient.addColorStop(0.7, 'rgba(38, 38, 80, 0.5)');

   //    return gradient;

   // drawCanvas() {

   //    const canvas = this.canvasRef.current;
   //    const context = canvas.getContext('2d');
   //    const gradient = context.createRadialGradient(
   //       50,
   //       100,
   //       100,
   //       100,
   //       200,
   //       200
   //    );
   //    gradient.addColorStop(0, 'rgba(254, 245, 187, 0.5)');
   //    gradient.addColorStop(0.13, 'rgba(252, 215, 140, 0.5)');
   //    gradient.addColorStop(0.25, 'rgba(248, 165, 123, 0.5)');
   //    gradient.addColorStop(0.39, 'rgba(184, 115, 187, 0.5)');
   //    gradient.addColorStop(0.57, 'rgba(75, 73, 156, 0.5)');
   //    gradient.addColorStop(0.7, 'rgba(38, 38, 80, 0.5)');
   //    context.fillStyle = gradient;
   //    context.fillRect(0, 0, this.canvas.width, this.canvas.height);
   // }

   render() {
      return (
         <canvas
            ref={this.canvasRef}
            id='backdrop'
            width={this.props.width}
            height={this.props.height}></canvas>
      );
   }
}

export default Canvas;
