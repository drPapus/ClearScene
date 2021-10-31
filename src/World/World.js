import { GUI } from 'three/examples/jsm/libs/dat.gui.module'
import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { createCube } from './components/cube.js';


import {
  createAxesHelper,
  createGridHelper,
} from './components/helpers.js';

import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';





let controls;
let camera;
let renderer;
let scene;
let loop;
let cube;



class World {
  constructor(container) {
    
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();

    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);
    controls = createControls(camera, renderer.domElement);
    cube = createCube();
  
 
    const { ambientLight, mainLight } = createLights();

    
    scene.add(ambientLight, mainLight);

    loop.updatables.push(cube);

    

 


    const resizer = new Resizer(container, camera, renderer);
    
    scene.add(createAxesHelper(), createGridHelper(), cube);

  }




  render() {
    // draw a single frame
    renderer.render(scene, camera);

  }

  start() {
    loop.start();
  }
  
  stop() {
    loop.stop();
  }
}

export { World };
