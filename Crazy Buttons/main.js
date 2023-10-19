
const crazyButton = document.querySelector('.crazy-button');


crazyButton.addEventListener('mouseenter', goBtnWild);


function goBtnWild() {
  const offsetTop = Math.random() * (window.innerHeight - crazyButton.clientHeight);
  const offsetLeft = Math.random() * (window.innerWidth - crazyButton.clientWidth);

  crazyButton.style.position = 'relative';

  crazyButton.style.top = offsetTop + 'px';
  crazyButton.style.left = offsetLeft + 'px';
}