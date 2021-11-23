import './background.css'

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


const UNIT = "1cm"; // 1 unit in the scene equals how much in the real world
// Something we need to read off the device:
const FOVX = "75degrees"; // usually in landscape, regular webcam, not phone
const FOVY = "?"; // usually less than FOVX, except Portrait mode on Phone

const WEBCAM_FOV = 75; // usually in landscape, regular webcam, not phone
const ALPHA = 75 * 3.1415 / 180;
const FACE_WIDTH = 20; // cm


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( WEBCAM_FOV, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#bg'),});
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

camera.position.set(0, 50, 150);

const geometry = new THREE.TorusGeometry( 8, 6, 16, 100 );  // 8 cm in radii, 6cm tube radii
// const material = new THREE.MeshBasicMaterial( { color: 0xFF6347, wireframe: true } );
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347 } );
const torus = new THREE.Mesh(geometry, material);
torus.rotation.x = 3.1415/2;
scene.add(torus)

const pointLight = new THREE.PointLight( 0xffffff );
pointLight.position.set(50,50,0);
scene.add(pointLight);

const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);

const controls = new OrbitControls( camera, renderer.domElement );


// function webcam_coordinates_to_xyz_cm(position: Array<number>) {
    

// }


function animate(position: Array<number>, r: number) { // idk if this typehint format is correct
    // console.log( 'position ' + position);

    // controls.update();
    
    // console.log( 'position[0] '+ position[0]);
    // console.log( 5 );
    // requestAnimationFrame( animate );

    // torus.rotation.x += 0.01;
    // torus.rotation.y += 0.005;
    // torus.rotation.z += 0.01;
    // torus.position.x = position[0]*10;
    // torus.position.z += 0.1;
    // camera.position.x = -position[0]*5;
    // camera.position.y = position[1]*10;
    // console.log(torus.position.x);
    // camera.position.set(0, 50, 80);
    // camera.position.y += 1;
    // camera.rotation.set(0, 0, 0);
    // console.log(camera.rotation);
    // camera.lookAt(camera.position.x, camera.position.y, camera.position.z - 10);
    
    // camera.position.z = FACE_WIDTH / r / 2 / Math.tan(ALPHA/2);

    renderer.render( scene, camera);

}

// animate()

export { animate as bgAnimate };