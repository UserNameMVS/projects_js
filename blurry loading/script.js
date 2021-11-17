const loadText = document.querySelector('.loading-text'),
  bg = document.querySelector('.bg');

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

let load = 0;

const int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
    loadText.style.display = 'none';
  }

  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

  loadText.innerHTML = `${load}%`;
}
