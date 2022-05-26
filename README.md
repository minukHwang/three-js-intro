# WebGL과 Three.js

## WebGL

- 자바스크립트 API
- GPU 기반
    - 병렬 처리로 인해서 살짝 느리긴 하지만 구현에 적합
- `<canvas>`에 결과가 출력
- 2D, 3D 모두 표현

## Three.js 시작하기

### 스크립트 설치

---

1. 웹사이트에서 파일 다운로드 

[Three.js - JavaScript 3D library](https://threejs.org/)

1. 압축 풀고 build 폴더에서 three.js or three.min.js 파일 복제 후 작업 폴더로 가져오기
2. 작업 파일의 html에 script로 임포트 (단, 메인.js 위에 위치하도록!)

### First Scene

---

```jsx
const scene = new THREE.Scene()
```

[three.js](https://threejs.org/docs/index.html#api/en/scenes/Scene)

### Objects

---

1. geometry - box

```jsx
const geometry = new THREE.BoxGeometry(1, 1, 1) //매개변수는 박스의 사이즈
```

[three.js](https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry)

2. material

```jsx
const material = new THREE.MeshBasicMaterial({ color : '#ff0000' }) 
//MeshBasicMaterial은 많은 매개변수를 가지고 있음으로 객체로 변수를 넣는다.
```

[three.js](https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial)

3. Mesh (geometry + material)  형성하기

```jsx
const cube = new THREE.Mesh(geometry, material)
```

[three.js](https://threejs.org/docs/index.html#api/en/objects/Mesh)

4. Scene에 추가하기

```jsx
scene.add(mesh)
```

5. Camera 추가하기

```jsx
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
//매개변수: (field of view(화각), aspect ratio(화면 비율))
scene.add(camera)
```

6. html canvas 추가하기

```html
<canvas class="webgl"></canvas>
```

7. 렌더러 추가

```jsx
const canvas = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
```

8. 렌더러 사이즈 조정

```jsx
renderer.setSize(sizes.width, sizes.height)
```

9. 렌더

```jsx
renderer.render(scene, camera)
```

<aside>
⚠️ 여기까지만하면 검은창이 나올 것이다. 그 이유는 카메라의 포지션이 큐브 안에 위치해있기 때문!

</aside>
</br>
</br>

10. 카메라 포지션 설정하기
- 포지션은 xyz 축으로 이루어져 있다. (x축: 오른쪽, y축: 위쪽, z축: 앞쪽)

```jsx
camera.position.z = 3
```
