import imgTitleUrl from '../assets/img/landscape.png';
import { ScenesTitle } from './scenesList';
import { initSceneInput } from './initSceneInput';

enum img {
  title = 'title',
}

let tileSprite: Phaser.GameObjects.TileSprite;

export class SceneTitle extends Phaser.Scene {
  constructor() {
    super(ScenesTitle);
  }

  preload() {
    this.load.image(img.title, imgTitleUrl);
  }

  create() {
    initSceneInput(this);
    tileSprite = this.add.tileSprite(0, 0, 0, 0, img.title);
  }

  update() {
    tileSprite.tilePositionX += 0.25;
  }
}
