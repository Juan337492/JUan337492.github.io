const canvas = document.querySelector('#myCanvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(85, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setClearColor(0xffffff);

const geometry = new THREE.IcosahedronGeometry(2, 0);
const material = new THREE.LineBasicMaterial({ color: 0x000000 });
const icosahedron = new THREE.LineSegments(new THREE.WireframeGeometry(geometry), material);
scene.add(icosahedron);

let mouseX = 0;
let mouseY = 0;
let isSmallDevice = window.matchMedia("(max-width: 810px)").matches;



document.addEventListener('mousemove', onDocumentMouseMove, false);
window.addEventListener('resize', function() {
  isSmallDevice = window.matchMedia("(max-width: 810px)").matches;
});
function animate() {
  requestAnimationFrame(animate);
  
  if (isSmallDevice) {
    icosahedron.rotation.x += 0.01;
    icosahedron.rotation.y += 0.01;
  } else {
    icosahedron.rotation.x += (mouseY - icosahedron.rotation.x) * 0.0001;
    icosahedron.rotation.y += (mouseX - icosahedron.rotation.y) * 0.0001;
  }

  renderer.render(scene, camera);
}

function onDocumentMouseMove(event) {
  mouseX = (event.clientX - window.innerWidth / 2) / 2;
  mouseY = (event.clientY - window.innerHeight / 2) / 2;
}

animate();

//when phone orientationchanges webpage refresh
window.addEventListener("orientationchange", function() {
  location.reload();
});

//nav
const navLinks = document.querySelector('.navLink');

navLinks.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.classList.contains('navLink')) {
    // Remove active class from all links
    navLinks.querySelectorAll('.navLink').forEach(link => {
      link.classList.remove('active');
    });

    // Add active class to clicked link
    event.target.classList.add('active');
  }
});

