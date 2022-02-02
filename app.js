import * as THREE from './three.js-master/three.js-master/build/three.module.js';
import Stats from './three.js-master/three.js-master/examples/jsm/libs/stats.module.js';

let scene, camera, renderer, ambient, dLight, stats;

// texture de la balle
const loader = new THREE.TextureLoader();
loader.load("../img/ball_texture.jpg",
(texture) =>{
    material3.map = texture;
});

// Window resize manager

const onResize = () => {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth - 1, window.innerHeight - 1);
};

// init three.js

function init() {
	// scene
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0xc170ff);

	// lights
	ambient = new THREE.AmbientLight(0xffffff, 0.5);
	scene.add(ambient);

	dLight = new THREE.DirectionalLight();
	dLight.position.set(-400, 1000, -1000);
	scene.add(dLight);

	// stats
	stats = new Stats();
	document.body.appendChild(stats.dom);

	// camera
	const aspect = window.innerWidth / window.innerHeight;
	camera = new THREE.PerspectiveCamera(50, aspect, 0.5, 5000);
	camera.position.setZ(10);
	camera.position.setY(2.5);
	// renderer
	renderer = new THREE.WebGLRenderer({ antialias: true });

	document.body.appendChild(renderer.domElement);

	window.addEventListener('resize', onResize);

	onResize();
}

init();

// MY APP

// création de la piste :
const geometry = new THREE.BoxGeometry( 5, 500, 1 );
const material = new THREE.MeshPhysicalMaterial( {color : 0xffffff,} )
const cube = new THREE.Mesh( geometry, material );
cube.rotateX(1.55);
cube.position.setY(0.6);
scene.add(cube);

// material de la piste
const loader2 = new THREE.TextureLoader();
loader2.load("../img/texture.jpg",
(texture) =>{
    material.map = texture;
});

// création de cones de droite
const geometry1 = new THREE.ConeGeometry( 0.6, 1.5, 50);
const material1 = new THREE.MeshBasicMaterial( {color: 0x7b2cbf} );
const cone = new THREE.Mesh( geometry1, material1 );
var bbox = new THREE.Box3().setFromObject(cone);
console.log(bbox);

cone.position.setY(2);
cone.position.setX(1.6);
cone.position.setZ(0);
scene.add( cone );

const geometry4 = new THREE.ConeGeometry( 0.6, 1.5, 50);
const material4 = new THREE.MeshBasicMaterial( {color: 0x9d4edd} );
const cone1 = new THREE.Mesh( geometry4, material4);
cone1.position.setY(2);
cone1.position.setZ(-14);
cone1.position.setX(1.6);
scene.add( cone1 );
var bbox = new THREE.Box3().setFromObject(cone1);
console.log(bbox);

const geometry6 = new THREE.ConeGeometry( 0.6, 1.5, 50);
const material6 = new THREE.MeshBasicMaterial( {color: 0xc77dff} );
const cone4 = new THREE.Mesh( geometry6, material6);
cone4.position.setY(2);
cone4.position.setZ(-4);
cone4.position.setX(1.6);
scene.add( cone4 );
var bbox = new THREE.Box3().setFromObject(cone4);
console.log(bbox);

const geometry10 = new THREE.ConeGeometry( 0.6, 1.5, 50);
const material10 = new THREE.MeshBasicMaterial( {color: 0xc77dff} );
const cone8 = new THREE.Mesh( geometry10, material10);
cone8.position.setY(2);
cone8.position.setZ(-28);
cone8.position.setX(1.6);
scene.add( cone8 );
var bbox = new THREE.Box3().setFromObject(cone8);
console.log(bbox);


// création de cones de gauche
const geometry2 = new THREE.ConeGeometry( 0.6, 1.5, 50);
const material2 = new THREE.MeshBasicMaterial( {color: 0x7b2cbf} );
const cone2 = new THREE.Mesh( geometry2, material2 );
cone2.position.setY(2);
cone2.position.setX(-1.3);
cone2.position.setZ(6);
scene.add( cone2 );
var bbox = new THREE.Box3().setFromObject(cone2);
console.log(bbox);

const geometry5 = new THREE.ConeGeometry( 0.6, 1.5, 50);
const material5 = new THREE.MeshBasicMaterial( {color: 0x9d4edd} );
const cone3 = new THREE.Mesh( geometry5, material5 );
cone3.position.setY(2);
cone3.position.setX(-1.3);
cone3.position.setZ(-10);
scene.add( cone3 );
var bbox = new THREE.Box3().setFromObject(cone3);
console.log(bbox);

const geometry7 = new THREE.ConeGeometry( 0.6, 1.5, 50);
const material7 = new THREE.MeshBasicMaterial( {color: 0xc77dff} );
const cone5 = new THREE.Mesh( geometry7, material7 );
cone5.position.setY(2);
cone5.position.setX(-1.3);
cone5.position.setZ(-21);
scene.add( cone5 );
var bbox = new THREE.Box3().setFromObject(cone5);
console.log(bbox);

const geometry8 = new THREE.ConeGeometry( 0.6, 1.5, 50);
const material8 = new THREE.MeshBasicMaterial( {color: 0x9d4edd} );
const cone6 = new THREE.Mesh( geometry8, material8 );
cone6.position.setY(2);
cone6.position.setX(-1.3);
cone6.position.setZ(-18);
scene.add( cone6 );
var bbox = new THREE.Box3().setFromObject(cone6);
console.log(bbox);

const geometry9 = new THREE.ConeGeometry( 0.6, 1.5, 50);
const material9 = new THREE.MeshBasicMaterial( {color: 0x7b2cbf} );
const cone7 = new THREE.Mesh( geometry9, material9 );
cone7.position.setY(2);
cone7.position.setX(-1.3);
cone7.position.setZ(-24);
scene.add( cone7 );
var bbox = new THREE.Box3().setFromObject(cone7);
console.log(bbox);

// Material des cones
let tab_cone_material = [material1, material2, material4, material5, material6, material7, material8, material9, material10];

for(let j=0; j < tab_cone_material.length; j++){
	const loader = new THREE.TextureLoader();
	loader.load("",
	(texture) =>{
		tab_cone_material[j].map = texture;
	});
}

// création de la balle
const geometry3 = new THREE.SphereGeometry( 0.29, 32, 16 );
const material3 = new THREE.MeshPhongMaterial( { color: 0xffffff } );
const sphere = new THREE.Mesh( geometry3, material3 );
sphere.geometry.computeBoundingBox();
sphere.position.setY(2);
sphere.position.setX(1.1);
sphere.position.setZ(8);
scene.add( sphere );
var bbox = new THREE.Box3().setFromObject(sphere);
console.log(bbox);

// création des déplacements
window.addEventListener("keydown", checkKeyPress, false);

function checkKeyPress(key){
	let ball_position = sphere.position.x;
	console.log(ball_position); 
	
	if(ball_position > 0 && key.keyCode == "37"){
		sphere.position.x += -2;
	}else{
		sphere.position.x += 0;
	}

	if(ball_position < 0 && key.keyCode == "39"){
		sphere.position.x += 2;
	}else{
		sphere.position.x += 0;
	}
}

// lancer le jeu via le bouton start
document.getElementById("button").addEventListener("click", function start(){

	// création d'un timer
	document.getElementById("timer").style.display = "block";
	const departMinutes = 0.001;
	let temps = departMinutes * 60;

	const timerElement = document.getElementById("timer");

	setInterval(() => {
	let minutes = parseInt(temps / 60, 10);
	let secondes = parseInt(temps % 60, 10);

	minutes = minutes < 10 ? "0" + minutes : minutes;
	secondes = secondes < 10 ? "0" + secondes : secondes;

	timerElement.innerText = `${minutes}:${secondes}`
	temps = temps <= 0 ? 0 : temps + 1;
	}, 1000);

	requestAnimationFrame(render);
})

// cacher le timer
let timer = document.getElementById("timer");

if (timer.style.display === "none") {
	timer.style.display = "block";
}else{
	timer.style.display = "none";
}

// cacher la card game over
let game_over = document.getElementById("card2");

if (game_over.style.display === "none") {
	game_over.style.display = "block";
}else{
	game_over.style.display = "none";
}

// cacher la card starter une fois le jeu lancé
document.getElementById("card1").addEventListener("click", function hide(){
	let div = document.getElementById("card1");
	if (div.style.display === "none") {
		div.style.display = "block";
	}else{
		div.style.display = "none";
	}
})

// cacher le background animé
document.getElementById("card1").addEventListener("click", function hide(){
	let div2 = document.getElementById("box");
	if (div2.style.display === "none") {
		div2.style.display = "block";
	}else{
		div2.style.display = "none";
	}
})

// détection des collisions entre les cones et la sphère
let tab_cone_position = [cone.position.z, cone1.position.z, cone2.position.z, cone3.position.z, cone4.position.z, cone5.position.z, cone7.position.z, cone8.position.z];
console.log(tab_cone_position);

for(let h=0; h < tab_cone_position.length; h++){
	if(sphere.position.z >= tab_cone_position[h]){
		console.log("colliding");
		
		// affichage de la card game over
		document.getElementById("card2").style.display = block; 
		
		// Afficher le score (=temps) 
		const timerElement = document.getElementById("timer")
		timerElement.innerHTML += `<h5 class="card-title">Your time is : ${timerElement} </h5>`
	}
}

function render() {
	// update
	sphere.rotation.x += - 0.15; 

	// faire en sorte que les cones avancent
	cone.position.z += 0.1;
	cone.position.y = 2;
	cone1.position.z += 0.1;
	cone1.position.y = 2;
	cone2.position.z += 0.1;
	cone2.position.y = 2;
	cone3.position.z += 0.1;
	cone3.position.y = 2;
	cone4.position.z += 0.1;
	cone4.position.y = 2;
	cone5.position.z += 0.1;
	cone5.position.y = 2;
	cone6.position.z += 0.1;
	cone6.position.y = 2;
	cone7.position.z += 0.1;
	cone7.position.y = 2;
	cone8.position.z += 0.1;
	cone8.position.y = 2; 

	// faire réapparaitre les cones au fond de la piste
	let tab_cones = [cone, cone1, cone2, cone3, cone4, cone5, cone6, cone7, cone8];

	for(let i=0; i < tab_cones.length; i++){
		if(tab_cones[i].position.z > 10){
			tab_cones[i].position.z = -27;
		} 
	}

	// rendu final
	renderer.render(scene, camera);

	stats.update();

	requestAnimationFrame(render);
}