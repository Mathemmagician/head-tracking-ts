import './background.css'

import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

camera.position.setZ(10);

renderer.render( scene, camera );

const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshBasicMaterial( { color: 0xFF6347, wireframe: true } );
// const material = new THREE.MeshStandardMaterial( { color: 0xFF6347 } );
const torus = new THREE.Mesh(geometry, material);

scene.add(torus)

const pointLight = new THREE.PointLight( 0xffffff );
pointLight.position.set(50,20,20);

scene.add(pointLight);

function animate(position: Array<number>) { // idk if this typehint format is correct
    console.log( 'position ' + position);
    
    // console.log( 'position[0] '+ position[0]);
    // console.log( 5 );
    // requestAnimationFrame( animate );

    // torus.rotation.x += 0.01;
    // torus.rotation.y += 0.005;
    // torus.rotation.z += 0.01;
    // torus.position.x = position[0]*10;
    // torus.position.z += 0.1;
    camera.position.x = -position[0]*5;
    camera.position.y = position[1]*10;
    // console.log(torus.position.x);
    
    renderer.render( scene, camera);

}

// animate()

export { animate as bgAnimate };