import { Mesh,
     BoxBufferGeometry,
     MeshPhongMaterial,
     Matrix4,
     Vector3,
     MathUtils
 } from "three";



function createCube() {
const cube = new Mesh(
    new BoxBufferGeometry(8, 8, 8),
    new MeshPhongMaterial({color: 'red'}),
 );

// cube.rotation.set(-0.5, -0.1, 0.8);
 console.log(cube, 'Cube1');

const radiansPerSecond = MathUtils.degToRad(30);

 //this method will be called once per frame
 cube.tick = (delta) => {
    // increase the cube's rotation each frame
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

// createjs.Tween.get(cube.rotation, { loop: true}).wait(500).to( { y:Math.PI*2 }, 1500, createjs.Ease.getPowInOut(3)).wait(500);

    



 return  cube ;

}

export { createCube }