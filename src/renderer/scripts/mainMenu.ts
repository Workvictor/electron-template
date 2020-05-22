import { createAnimatedButton } from './createAnimatedButton';
import { cn_active } from './classNames';
import { ipcRenderer } from 'electron';
import { ipc_quit } from 'common/ipcEvents';

let visible = false;

const layoutElem = document.querySelector('#menu-layout');
const menuElem = document.querySelector('#main-menu');

const btn_quit = createAnimatedButton('quit');

btn_quit.onclick = () => {
  ipcRenderer.send(ipc_quit, {});
};

menuElem?.append(
  createAnimatedButton('new game'),
  createAnimatedButton('options'),
  btn_quit
);

export const mainMenu = {
  setVisibility(state = !visible) {
    visible = state;
    if (visible) {
      layoutElem?.classList.add(cn_active);
    } else {
      layoutElem?.classList.remove(cn_active);
    }
  },
  getVisibility() {
    return visible;
  },
};
