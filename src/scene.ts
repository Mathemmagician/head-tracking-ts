// This file defines the objects in the scene

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const loader = new GLTFLoader();

const torusGeometry = new THREE.TorusGeometry( 8, 6, 16, 100 );  // 8 cm in radii, 6cm tube radii
// const material = new THREE.MeshBasicMaterial( { color: 0xFF6347, wireframe: true } );
const material = new THREE.MeshStandardMaterial( { color: 0xFF6347 } );
const torus = new THREE.Mesh(torusGeometry, material);
torus.rotation.x = 3.1415/2;
// torus.position.x = 100;
scene.add(torus);

// const width = 100;
// const height = 100;
// const intensity = 100;
// const rectLight = new THREE.RectAreaLight( 0xffffff, intensity,  width, height );
// rectLight.position.set( 0, 0, 25 );
// rectLight.lookAt( 0, 0, 0 );
// scene.add( rectLight );

/*
const rectLightHelper = new THREE.RectAreaLightHelper( rectLight );
rectLight.add( rectLightHelper );
*/
const light = new THREE.AmbientLight( 0xffffff, 0.5); // soft white light
scene.add( light );

const pointLight = new THREE.PointLight( 0xe0e0e0 );
pointLight.position.set(0, 10, 40);
scene.add(pointLight);

/*
const lightHelper = new THREE.PointLightHelper(pointLight);
//const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper);
*/

// loader.load( "assets/scene.gltf", function ( gltf ){
//   let sc = gltf.scene;
//   sc.scale.set(10, 10, 10);
//   scene.add(sc);
//   }, undefined, function ( error ) {
//   console.error( error );
// });






// scene from https://github.com/mrdoob/three.js/blob/master/examples/games_fps.html
loader.load( 'assets/collision-world.glb', ( gltf ) => {
    let sc = gltf.scene;
    sc.scale.set(10, 10, 10);
    scene.add( sc );

    // worldOctree.fromGraphNode( gltf.scene );

    // gltf.scene.traverse( child => {

    //     if ( child.isMesh ) {

    //         child.castShadow = true;
    //         child.receiveShadow = true;

    //         if ( child.material.map ) {

    //             child.material.map.anisotropy = 8;

    //         }

    //     }

    // } );

    // animate();

} );




export { scene, light };
