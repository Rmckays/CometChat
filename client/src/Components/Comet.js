import image from '../comet.png';

const cometImage = new Image();
cometImage.src = image;

export default class Comet {
   constructor(width) {
      this.x = Math.random() * width - Math.random() * 1000;
      this.y = 0 - Math.random() * 1500;
      this.radius = 4;
      this.dy = 1;
      this.dx = 2.5;
      this.color = 'rgb(254,245,187)';
      this.image = cometImage;
   }

   drawComet(ctx) {
      ctx.drawImage(this.image, this.x, this.y, 200, 200);
   }

   updateComet(ctx, width) {
      if (this.y > window.innerHeight) {
         this.y = 0;
      }

      if (this.x > window.innerWidth) {
         this.x = Math.random() * width - Math.random() * 500;
         this.y = 0 - Math.random() * 100;
      }

      this.x += this.dx;
      this.y += this.dy;
      this.drawComet(ctx);
   }
}
