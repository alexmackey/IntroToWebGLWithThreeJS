var demo = (function(){

    "use strict";

    Physijs.scripts.worker = 'scripts/physijs_worker.js';
    Physijs.scripts.ammo = 'ammo.js';

    var scene=new Physijs.Scene(),
        light= new THREE.AmbientLight(0xffffff),
        renderer,
        camera,              
        renderer = new THREE.WebGLRenderer(),
        box,
        ground;

        var initScene = function(){
    
            scene.setGravity(new THREE.Vector3( 0, -50, 0 ));

            renderer.setSize( window.innerWidth, window.innerHeight );
            
            document.getElementById("webgl-container").appendChild(renderer.domElement);

            scene.add(light);
                      
            camera = new THREE.PerspectiveCamera(
                    35,
                    window.innerWidth / window.innerHeight,
                    1,
                    1000
                );
            
            camera.position.set( 60, 50, 60 );
            camera.lookAt( scene.position );
            scene.add( camera );           
                
            var boxMaterial= Physijs.createMaterial(
                new THREE.MeshBasicMaterial({ color: 0xFF0000 }),
                0, //friction
                0.8 //restitution/bounciness
            );
                
            box= new Physijs.BoxMesh(
                new THREE.CubeGeometry( 15, 15, 15 ),
                boxMaterial
            );

            box.position.y=40;
            box.rotation.z=90;
            box.rotation.y=50;

            box.addEventListener( 'collision', function( 
                otherObject, 
                relative_velocity, 
                relative_rotation, 
                contact_normal ) {
                
                if(otherObject.name=="ground"){
                   alert('hit ground')
                }                

            });

            scene.add(box);           

             var groundMaterial = Physijs.createMaterial(
                new THREE.MeshBasicMaterial({ color: 0x008888 }),
                0, //friction
                0 //restitution/bounciness
            );

            ground = new Physijs.BoxMesh(
                new THREE.CubeGeometry(150, 5, 150),
                groundMaterial,
                0
            );

            ground.name='ground';
            ground.position.y = -25;
            scene.add( ground );           

            requestAnimationFrame(render);
        };

        function render() {
            scene.simulate();
            renderer.render( scene, camera); 
            requestAnimationFrame(render);
        };

        window.onload = initScene;

})();
