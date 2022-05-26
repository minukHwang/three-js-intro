// Scene
const scene = new THREE.Scene()

// Red cube
const geometry = new THREE.BoxGeometry(1, 1, 1) //매개변수는 박스의 사이즈
const material = new THREE.MeshBasicMaterial({ color : '#ff0000' }) //MeshBasicMaterial은 많은 매개변수를 가지고 있음으로 객체로 변수를 넣는다.
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height) //매개변수: (field of view(화각), aspect ratio(화면 비율))
camera.position.z = 3
scene.add(camera)

// Renderer
const canvas = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})

//사이즈 설정
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)