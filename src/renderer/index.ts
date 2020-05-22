import './index.css';

import 'phaser';
import { SceneTitle } from './scenes/SceneTitle';

new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'renderer',
  width: 960,
  height: 540,
  disableContextMenu: true,
  scene: [SceneTitle],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
});
