// fps example code:
// https://github.com/mrdoob/three.js/blob/master/examples/games_fps.html
import './background.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
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


function animate(faceCentroid: Vector3, faceWidth: number) {

    const deltaTime = Math.min( 0.05, clock.getDelta() ) * 100; // / STEPS_PER_FRAME; - check

    controls.update(deltaTime);
    const shift = faceCentroid2xyz(faceCentroid, faceWidth);
    // const final = camera.localToWorld(shift);
    // const final = camera.worldToLocal(new THREE.Vector3(0, 0, 0));
    camera.translateX( shift.x );
    camera.translateY( shift.y );
    camera.translateZ( shift.z );

    // camera.position.add(shift);
    // camera.lookAt(0, 0, 0);
    // camera.position.set(final.x, final.y, final.z);

    renderer.render( scene, camera );

    // camera.position.sub(shift);
    camera.translateX( (-shift.x) );
    camera.translateY( (-shift.y) );
    camera.translateZ( (-shift.z) );

    // console.log(camera.matrixWorld.elements);
}


export { animate as bgAnimate };
