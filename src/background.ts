import './background.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const WEBCAM_FOV_Y = 54; // https://developer.apple.com/documentation/modelio/mdlcamera/1391726-fieldofview
const WEBCAM_FOV_X = 75; // maybe?
const DEG2RAD = Math.PI / 180;
const FACE_WIDTH_CM = 15;  // double check

const loader = new GLTFLoader();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( WEBCAM_FOV_Y, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#bg'),});
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

camera.position.set(0, 50, 50);

const geometry = new THREE.TorusGeometry( 8, 6, 16, 100 );  // 8 cm in radii, 6cm tube radii
// const material = new THREE.MeshBasicMaterial( { color: 0xFF6347, wireframe: true } );
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347 } );
const torus = new THREE.Mesh(geometry, material);
torus.rotation.x = 3.1415/2;
torus.position.x = 100
scene.add(torus)

const width = 100;
const height = 100;
const intensity = 100;
const rectLight = new THREE.RectAreaLight( 0xffffff, intensity,  width, height );
rectLight.position.set( 0, 0, 5 );
rectLight.lookAt( 0, 0, 0 );
scene.add( rectLight )

/*
const rectLightHelper = new THREE.RectAreaLightHelper( rectLight );
rectLight.add( rectLightHelper );

const light = new THREE.AmbientLight( 0xffffff); // soft white light
scene.add( light );
*/
/*
const pointLight = new THREE.PointLight( 0xffffff );
pointLight.position.set(0,10,0);
scene.add(pointLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
//const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper);
*/

const controls = new OrbitControls( camera, renderer.domElement );

loader.load( "assets/scene.gltf", function ( gltf ){
  let sc = gltf.scene;
  sc.scale.x = 10;
  sc.scale.y = 10;
  sc.scale.z = 10;

  console.log(sc);
  scene.add(sc);

  }, undefined, function ( error ) {

  	console.error( error );
});

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
