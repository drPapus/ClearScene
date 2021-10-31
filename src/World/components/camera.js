import { PerspectiveCamera } from 'three';


function createCamera() {

    const camera = new PerspectiveCamera(
      45, // fov = Field Of View
      2, // aspect ratio (dummy value)
      0.1, // near clipping plane
      1000, // far clipping plane
    );


    camera.position.set(0, 10, 50);

  
    return camera;
  }
  
  export { createCamera };