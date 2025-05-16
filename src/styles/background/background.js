document.body.addEventListener("pointermove", (e) => {
  const { clientX: x, clientY: y } = e;
  const { left: l, top: t, width: w, height: h } = document.body.getBoundingClientRect();

  const targetX = x - l - w / 2;
  const targetY = y - t - h / 2;

  function lerp(start, end, factor) {
    return start + (end - start) * factor;
  }

  let posX = parseFloat(getComputedStyle(document.body).getPropertyValue("--posX")) || 0;
  let posY = parseFloat(getComputedStyle(document.body).getPropertyValue("--posY")) || 0;

  function animate() {
    posX = lerp(posX, targetX, 0.1); // 0.1 = ajustar para la velocidad de suavizado
    posY = lerp(posY, targetY, 0.1);

    document.body.style.setProperty("--posX", posX);
    document.body.style.setProperty("--posY", posY);

    if (Math.abs(posX - targetX) > 0.5 || Math.abs(posY - targetY) > 0.5) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
});