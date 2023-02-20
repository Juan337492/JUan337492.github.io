// Get a reference to the canvas element
const canvas = document.querySelector('#myCanvas');

// Create a new Three.js scene
const scene = new THREE.Scene();

// Create a new camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a new renderer with a white background
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setClearColor(0xffffff);

// Create a new Icosahedron and add it to the scene
const geometry = new THREE.IcosahedronGeometry(2, 0);
const material = new THREE.LineBasicMaterial({ color: 0x000000 });
const icosahedron = new THREE.LineSegments(new THREE.WireframeGeometry(geometry), material);
scene.add(icosahedron);

// Set the initial mouse position
let mouseX = 0;
let mouseY = 0;

// Animate the Icosahedron
function animate() {
  requestAnimationFrame(animate);

  // Rotate the object based on the mouse position
  icosahedron.rotation.x += 0.005;
  icosahedron.rotation.y += 0.005;
  icosahedron.rotation.x += (mouseY - icosahedron.rotation.x) * 0.05;
  icosahedron.rotation.y += (mouseX - icosahedron.rotation.y) * 0.05;

  renderer.render(scene, camera);
}

// Listen for mouse movement and update the mouse position
canvas.addEventListener('mousemove', (event) => {
  mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
});

animate();
