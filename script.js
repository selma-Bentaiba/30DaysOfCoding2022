

/* console.log("Hello three js");
console.log(THREE); */


// scene 
const scene = new THREE.Scene();

//red cube
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:'red'}) // color:#ff0000 or 0xff0000
const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)
// size
const sizes = {
    width : 800,
    height: 600
}
// Camera
const camera = new THREE.PerspectiveCamera(75 , sizes.width / sizes.height) 
camera.position.z = 3
/* camera.position.x = 2
camera.position.y = 2 */

scene.add(camera)
// renderer

const canvas = document.querySelector('.webgl')
console.log(canvas)
const renderer= new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
// nothing visible bc the camera is inside the cube we need to love the camera backward















