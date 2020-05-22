import { mainMenu } from '../scripts/mainMenu';

export function initSceneInput(scene: Phaser.Scene) {
  const { KeyCodes } = Phaser.Input.Keyboard;
  console.log('initSceneInput', KeyCodes.ESC, KeyCodes);
  scene.input.keyboard.on('keydown', (e: KeyboardEvent) => {
    if (e.keyCode === KeyCodes.ESC) {
      mainMenu.setVisibility();
    }
    console.log('keyboard keyCode', e.keyCode);
  });
}
