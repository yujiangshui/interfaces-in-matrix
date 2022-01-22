// from https://dev.to/gnsp/making-the-matrix-effect-in-javascript-din
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const w = (canvas.width = document.body.offsetWidth);
const h = (canvas.height = document.body.offsetHeight);
const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

ctx.fillStyle = "#222";
ctx.fillRect(0, 0, w, h);

function matrix() {
  ctx.fillStyle = "#2221";
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "#0f0";
  ctx.font = "15pt monospace";

  ypos.forEach((y, ind) => {
    const text = String.fromCharCode(Math.random() * 128);
    const x = ind * 20;
    ctx.fillText(text, x, y);
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + 20;
  });
}

setInterval(matrix, 60);
setTimeout(() => {
  document.querySelector(".face").classList.add("show");
}, 1000);
