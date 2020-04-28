var camera, scene, renderer;
var geometry, material, mesh;

window.onLoad
init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera(
    75, window.innerWidth / window.innerHeight, 0.01, 10000 );
	camera.position.z = 2;

	scene = new THREE.Scene();

	renderer = new THREE.WebGLRenderer( { antialias: true , alpha: true} );
  renderer.setClearColor(000000,0.0);
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

  geo1 = new THREE.DodecahedronGeometry(0.3, 0);
  mat1 = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shading: THREE.FlatShading
  });
  mesh1 = new THREE.Mesh( geo1, mat1 );
	mesh1.position.set(0.5, 0.5, 0.2);
  scene.add( mesh1 );

	geo2 = new THREE.IcosahedronBufferGeometry(0.6, 1);
	mat2 = new THREE.MeshPhongMaterial({
    color: 0x94D363,
    wireframe: true,
    side: THREE.DoubleSide});
	mesh2 = new THREE.Mesh ( geo2, mat2);
	mesh2.position.set(0.5, 0.5, 0.2);
	scene.add( mesh2 );


	geo3 = new THREE.TorusGeometry( 1, 0.5, 3, 20 );;
	mat3 = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    wireframe: true,
    side: THREE.DoubleSide});
	mesh3 = new THREE.Mesh ( geo3, mat3);
	mesh3.position.set(-1, -1.5, -0.2);
	scene.add( mesh3 );

	particle = new THREE.Object3D();
  var geoParticle = new THREE.SphereGeometry(1, 3, 3);
	var geoMat = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shading: THREE.FlatShading
  });
	scene.add (particle);

	for (var i = 0; i < 10000; i++) {
	var mesh = new THREE.Mesh(geoParticle, geoMat);
	mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
	mesh.position.multiplyScalar(90 + (Math.random() * 700));
	mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
	particle.add(mesh);
	}


	var light1 = new THREE.PointLight(0xffffff, 1, 1000);
	light1.position.set(10, 0, 10);
	scene.add( light1 );

	var light1 = new THREE.PointLight(0x8BFFE1, 1, 500);
	light1.position.set(-5, 10, 5);
	scene.add( light1 );


}

function animate() {

	var render = function() {
		requestAnimationFrame(render);
		mesh1.rotation.x += 0.01;
		mesh1.rotation.y += 0.01;

		mesh2.rotation.x -= 0.02;
		mesh2.rotation.y += 0.01;

		mesh3.rotation.x += 0.01;
		mesh3.rotation.y -= 0.02;
		mesh3.scale.x += 0.005;
		mesh3.scale.y += 0.005;

		particle.rotation.x += 0.0010;
		particle.rotation.y -= 0.0020;
		renderer.render (scene, camera);
	}

	render()

}
