import { cn_animated } from './classNames';

export function createAnimatedButton(text: string) {
  const button = document.createElement('button');
  button.textContent = text;
  function onClick() {
    button.classList.add(cn_animated);
  }
  function onAnimationEnd() {
    button.classList.remove(cn_animated);
  }
  button.addEventListener('animationend', onAnimationEnd);
  button.addEventListener('click', onClick);
  return button;
}
