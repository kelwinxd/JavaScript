import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const canvas = document.getElementById('canvas')
const renderer = new THREE.WebGLRenderer({
	canvas:canvas,
	antialias:true
});

renderer.setSize(window.innerWidth, window.innerHeight) //define o tamanho do render
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1)//renderize com mais qualidade para dispositivos com alta resoluçao e mantenha o padrão para devices normais

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set(-1,3,7)
scene.add(camera)

const boxMesh = new THREE.Mesh(
	new THREE.BoxGeometry(2,2,2),
	new THREE.MeshBasicMaterial({color:'firebrick'})

)
scene.add(boxMesh)



const loader = new GLTFLoader();

function loadModels(src) {
    loader.load(src , function ( gltf ) {
	    scene.add( gltf.scene );
    }, undefined, function ( error ) {
        console.error( error );
    });
}

loadModels('./deadpool.glb');

//draw
renderer.render(scene, camera)

/*

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );

}

*/