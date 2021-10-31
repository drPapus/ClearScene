import { WebGLRenderer, sRGBEncoding } from 'three';


function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true, alpha: true });


   // start the loop
   renderer.setAnimationLoop(() => {
    //renderer.render(scene, camera);
  });

  renderer.physicallyCorrectLights = true;
  renderer.shadowMap.enabled = true;
  //renderer.outputEncoding = sRGBEncoding;

  return renderer;
}

export { createRenderer };