import './style.css'

import * as THREE from 'three';
import { cos } from 'mathjs'
import { sin } from 'mathjs'
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default 

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);
camera.position.setY(20);
const a = new THREE.Vector3( 0, 1, 0 );
//camera.setFromAxisAngle( new THREE.Vector3( 0, 1, 0 ), Math.PI / 2 );

renderer.render(scene, camera);

//earth
const earthTexture = new THREE.TextureLoader().load('earth.jpg');
const earthnormalTexture = new THREE.TextureLoader().load('earthnormal.jpeg');

const earthGeometry = new THREE.SphereGeometry( 5, 32, 32 );
const earthMaterial = new THREE.MeshStandardMaterial( {map:earthTexture,});
const sphere = new THREE.Mesh( earthGeometry, earthMaterial );
sphere.castShadow = true;
sphere.receiveShadow = true;
scene.add( sphere );

camera.lookAt(sphere.position);

//moon

const moonTexture = new THREE.TextureLoader().load('moon.jpg');
//const normalTexture = new THREE.TextureLoader().load('normal.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(2, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
  })
);
moon.castShadow = true;
moon.receiveShadow = true;
scene.add(moon);

moon.position.x = 20;
moon.position.z = 20;


const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(200, 0, 200);
pointLight.castShadow = true;

//const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight);

//Set up shadow properties for the light
pointLight.shadow.mapSize.width = 512; // default
pointLight.shadow.mapSize.height = 512; // default
pointLight.shadow.camera.near = 0.5; // default
pointLight.shadow.camera.far = 500; // default

//renderer.render(scene, camera);

function addStar() {
  const geometry = new THREE.SphereGeometry(0.1, 20, 20);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}
Array(200).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load('space.jpg');
scene.background = spaceTexture;

var moonx = 0;
var moonz = 0;
var moonr = 20;
var moona = 0;



function animate() {
  requestAnimationFrame(animate);
  sphere.rotation.y += 0.01
  moona -= 0.003;
  if(moona == -360){
    moona = 0;
  }
  moonx = moonr*(cos(moona));
  moonz = moonr*(sin(moona));
  moon.position.x = moonx;
  moon.position.z = moonz;
  moon.rotation.y += 0.003;
  renderer.render(scene, camera);
}

animate();