// fps example code:
// https://github.com/mrdoob/three.js/blob/master/examples/games_fps.html
import './background.css'
import * as THREE from 'three';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls';

import { scene } from './scene';
import { Vector3 } from 'three';

const WEBCAM_FOV_Y = 54; // https://developer.apple.com/documentation/modelio/mdlcamera/1391726-fieldofview
const WEBCAM_FOV_X = 75; // maybe?
const DEG2RAD = Math.PI / 180;
const FACE_WIDTH_CM = 15;  // double check

const clock = new THREE.Clock();

const camera = new THREE.PerspectiveCamera( WEBCAM_FOV_Y, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#bg'),});
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.set(0, 50, 50);

// const controls = new OrbitControls( camera, renderer.domElement );
const controls = new FlyControls( camera, renderer.domElement );
controls.dragToLook = true;


window.addEventListener( 'resize', onWindowResize );

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function faceCentroid2xyz(faceCentroid: Vector3, faceWidth: number) {
    // This function converts faceCentroid (x, y, z) with coordinates
    // ranging from about 0 to 1 to (X, Y, Z) measured in cm

    const RATIO2CM = FACE_WIDTH_CM / faceWidth;

    const Z = RATIO2CM / 2 / Math.tan(WEBCAM_FOV_Y / 2 * DEG2RAD);
    const X = (faceCentroid.x - 0.5) * 100;
    const Y = -(faceCentroid.y - 0.5) * 100;
    return new THREE.Vector3(X, Y, Z);
}

//didn't really work, has a problem where going from 100 -> 110 may be much different than 0.1 -> 0.11
//each dimension probably needs to be transformed to their equivelant [0,1] representation for to work.
function isSteady(prior: Vector3, current: Vector3, sensitivity: double){
  function isDimSteady(u: double, v: double){
    if (Math.abs(u) < 0.5){
      u += Math.sign(u);
      v += Math.sign(u);
    }
    return (Math.abs(u - v) / u) < sensitivity;
  }
  return !isDimSteady(prior.x,current.x) || !isDimSteady(prior.y,current.y) || !isDimSteady(prior.z,current.z);
}

const coords = [];
const smoothingConstant = 10;
for(let i=0;i<smoothingConstant;i++){
  coords.push(new THREE.Vector3(0, 0, 0));
}

const coord = new THREE.Vector3(0,0,0);
const priorCameraCoordinate = new THREE.Vector3(0, 0, 0);
let ind = 0;

function animate(faceCentroid: Vector3, faceWidth: number) {

    const deltaTime = Math.min( 0.05, clock.getDelta() ) * 100; // / STEPS_PER_FRAME; - check
    controls.update(deltaTime);
    const shift = faceCentroid2xyz(faceCentroid, faceWidth);

    // const final = camera.localToWorld(shift);
    // const final = camera.worldToLocal(new THREE.Vector3(0, 0, 0));

    /*console.log("x",priorCameraCoordinate.x,shift.x);
    console.log("y",priorCameraCoordinate.y,shift.y);
    console.log("z",priorCameraCoordinate.z,shift.z);*/

    //let sufficentChange = isSteady(coord,shift,0.01)
    coords[ind].x = shift.x;
    coords[ind].y = shift.y;
    coords[ind].z = shift.z;

    ind += 1;
    ind %= smoothingConstant;

    coord.x = 0; coord.y = 0; coord.z = 0;

    for(let i=0;i<smoothingConstant;i++){
      coord.addVectors(coord,coords[i]);
    }
    coord.multiplyScalar(1/smoothingConstant);

    camera.translateX(coord.x);
    camera.translateY(coord.y);
    camera.translateZ(coord.z);

    // camera.position.add(shift);
    // camera.lookAt(0, 0, 0);
    // camera.position.set(final.x, final.y, final.z);

    //console.log(shift.x, camera.position.x);
    renderer.render( scene, camera );

    // camera.position.sub(shift);
    camera.translateX( (-coord.x) );
    camera.translateY( (-coord.y) );
    camera.translateZ( (-coord.z) );

    // console.log(camera.matrixWorld.elements);
}


export { animate as bgAnimate };
