export default class Comet {
   constructor(width) {
      this.x = Math.random() * width - Math.random() * 1000;
      this.y = 0 - Math.random() * 1000;
      this.radius = 4;
      this.dy = 0.75;
      this.dx = 2;
      this.color = 'rgb(254,245,187)';
      this.image = '../Comet2.png';
   }

   drawComet(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
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
