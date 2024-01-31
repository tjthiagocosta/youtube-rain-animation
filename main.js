let cloud = document.querySelector("#cloud");

function rain() {
  let drop = document.createElement("div");
  let left = Math.floor(Math.random() * 315);
  let height = Math.random() * 40;
  let width = Math.random() * 4;
  let duration = Math.random() * 0.5;

  drop.classList.add("drop");
  drop.style.left = `${left}px`;
  drop.style.height = `${height}px`;
  drop.style.width = `${width}px`;
  drop.style.animationDuration = `${1 + duration}s`;
  cloud.appendChild(drop);

  setTimeout(() => {
    cloud.removeChild(drop);
  }, 2000);
}

function relampago() {
  let duration = Math.random() * 0.5;
  cloud.style.animationDuration = `${1 + duration}s`;
}

setInterval(() => rain(), 20);
setInterval(() => relampago(), 100);
