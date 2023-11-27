import * as THREE from 'three';

console.log('Javascript is working');

//canvas
const canvas = document.querySelector('canvas.webgl');

//scene
const scene = new THREE.Scene();

//object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0055 });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

//sizes
const sizes = {
    width: 800,
    height: 600
};

//camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 2;
camera.position.x = 0;
camera.position.y = 0;
scene.add(camera);

//renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);