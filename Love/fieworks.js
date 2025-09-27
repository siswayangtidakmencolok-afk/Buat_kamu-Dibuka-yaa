function makeFullCircleFirework(fire) {
  let color = randcolor();
  let velocity = Math.random() * 8 + 8;
  let firenumber = fire.number || 10;
  let max = firenumber * 3;
  const range = 100;
  let fireworks = [];

  for (let i = 0; i < max; i++) {
    let rad = (i * Math.PI * 2) / max;
    let firework = {
      x: fire.x,
      y: fire.y,
      size: Math.random() + 1.5,
      fill: color,
      vx: Math.cos(rad) * velocity + (Math.random() - 0.5) * 0.5,
      vy: Math.sin(rad) * velocity + (Math.random() - 0.5) * 0.5,
      ay: 0.06,
      alpha: 1,
      life: Math.round((Math.random() * range) / 2) + range / 1.5
    };
    fireworks.push(firework);
  }

  return fireworks;
}
