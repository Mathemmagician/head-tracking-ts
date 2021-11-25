import './background.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { scene } from './scene';

const WEBCAM_FOV_Y = 54; // https://developer.apple.com/documentation/modelio/mdlcamera/1391726-fieldofview
const WEBCAM_FOV_X = 75; // maybe?
const DEG2RAD = Math.PI / 180;
const FACE_WIDTH_CM = 15;  // double check

const camera = new THREE.PerspectiveCamera( WEBCAM_FOV_Y, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#bg'),});
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.set(0, 50, 50);

const controls = new OrbitControls( camera, renderer.domElement );


window.addEventListener( 'resize', onWindowResize );

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function faceCentroid2xyz(faceCentroid: Array<number>, faceWidth: number) {
    // This function converts faceCentroid (x, y, z) with coordinates ranging
    // from about 0 to 1 to (X, Y, Z) measured in cm

    const RATIO2CM = FACE_WIDTH_CM / faceWidth;

    const Z = RATIO2CM / 2 / Math.tan(WEBCAM_FOV_Y / 2 * DEG2RAD);
    const X = (faceCentroid[0] - 0.5) * 100;
    const Y = -(faceCentroid[1] - 0.5) * 100;
    return new THREE.Vector3(X, Y, Z);
}


function animate(faceCentroid: Array<number>, faceWidth: number) {
    // console.log( 'position ' + position);

    controls.update();
    const shift = faceCentroid2xyz(faceCentroid, faceWidth);

    camera.position.add(shift);
    camera.lookAt(0, 0, 0);

    renderer.render( scene, camera );

    camera.position.sub(shift);

}


export { animate as bgAnimate };
