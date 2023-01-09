for (let i = 2; i <= 100; i += 2){
    ctx.beginPath();
    ctx.arc(150, 150, i, 0, 2 * Math.PI);
    ctx.stroke();
  }