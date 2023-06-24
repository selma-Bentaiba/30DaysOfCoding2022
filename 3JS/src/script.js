import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1

mesh.position.set(-5,  0, 0)

//SCALE
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
mesh.scale.set(2, 0.5, 0.5)

//Rotation
mesh.rotation.reorder('YXZ')
mesh.rotation.y = Math.PI * 0.25
mesh.rotation.x = Math.PI * 0.25


//AXES HELPER
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)



/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

camera.lookAt(mesh.position)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


// moving with arrows


document.onkeydown = function(e) {

  

    if (e.keycode === '38') {
        mesh.position.z -= 1;    }


    else if (e.keycode === '40') {
        mesh.position.z += 1;    }

        // down arrow
    
    else if (e.keycode === '37') {
        mesh.position.x -= 1;
       // left arrow
    }
    else if (e.keycode ==='39') {
        mesh.position.x += 1;

       // right arrow
    }

};