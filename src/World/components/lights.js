import { AmbientLight,
  DirectionalLight,
  HemisphereLight, PointLight } from 'three';

function createLights() {
  // Create a directional light
  const ambientLight = new HemisphereLight(
    'white',
    'darkslategrey',
    5,
     );

  const mainLight = new DirectionalLight('white', 5);
  mainLight.position.set(10, 10, 10);




  return { ambientLight, mainLight };
}

export { createLights };