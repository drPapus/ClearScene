import { Color, Scene } from 'three';


function createScene() {
  const scene = new Scene();
  scene.background = new Color('lightblue');
  console.log(scene, 'Scene');


  return  scene ;
}

export { createScene };