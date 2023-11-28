import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects
const group = new THREE.Group()
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0xffff00})
)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: 0x00ffff})
)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(0.25, 0.25, 0.25),
    new THREE.MeshBasicMaterial({color: 0xff00ff})
)

const cube4 = new THREE.Mesh(
    new THREE.BoxGeometry(0.25, 0.25, 0.25),
    new THREE.MeshBasicMaterial({color: 0xff00ff})
)

const cube5 = new THREE.Mesh(
    new THREE.BoxGeometry(0.25, 0.25, 0.25),
    new THREE.MeshBasicMaterial({color: 0xff00ff})
)

const cube6 = new THREE.Mesh(
    new THREE.BoxGeometry(0.25, 0.25, 0.25),
    new THREE.MeshBasicMaterial({color: 0xf5005f})
)

cube3.position.x = 1.5
cube3.position.y = -1.5
cube4.position.x = -1.5
cube4.position.y = 1.5
cube5.position.x = 0.5
cube5.position.y = 1.5
cube6.position.x = -1.5
cube6.position.y = 0.5

group.add(cube1)
group.add(cube2)
group.add(cube3)
group.add(cube4)
group.add(cube5)
group.add(cube6)

// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)


//animation
const clock = new THREE.Clock()
gsap.to(cube4.position, {duration: 1, delay: 1, x: 2})
gsap.to(cube5.position, {duration: 1, delay: 1, z: 1.3})
gsap.to(cube6.position, {duration: 1, delay: 1, z: 2})

const tick = () =>
{
    // time
    const elapsedTime = clock.getElapsedTime()

    // update objects
    // cube1.rotation.y = elapsedTime
    cube1.position.x = Math.cos(elapsedTime)
    cube1.position.y = Math.sin(elapsedTime)
    cube1.rotation.x += 0.02
    cube1.rotation.y += 0.01
    cube2.position.x = -Math.cos(elapsedTime)
    cube2.position.y = -Math.sin(elapsedTime)
    cube2.rotation.x += 0.01
    cube2.rotation.y += 0.01
    cube3.rotation.x += 0.01
    cube3.rotation.y += 0.01
    cube4.rotation.x += 0.01
    cube4.rotation.y += 0.01
    cube5.rotation.x += 0.01
    cube5.rotation.y += 0.01
    cube6.rotation.x += 0.01
    cube6.rotation.y += 0.01

    if (cube6.scale.z < 4)
        cube6.scale.z += 0.01

    camera.lookAt(cube1.position)

    // render
    renderer.render(scene, camera)

    // call the tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
