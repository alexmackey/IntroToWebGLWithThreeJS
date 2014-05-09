var demo = (function(){

    "use strict";

    Physijs.scripts.worker = 'scripts/physijs_worker.js';
    Physijs.scripts.ammo = 'ammo.js';
  

    var scene=new Physijs.Scene(),
        light= new THREE.AmbientLight(0xffffff),
        renderer,
        camera,
        containerWidth = 800,
        containerHeight = 600,        
        renderer = new THREE.WebGLRenderer(),
        box,
        ground,
        controls=null;

     var initScene = function(){

    
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.getElementById("webgl-container").appendChild(renderer.domElement);

        scene.add(light);

        scene.setGravity(new THREE.Vector3( 0, -50, 0 ));
       
        camera = new THREE.PerspectiveCamera(
                35,
                window.innerWidth / window.innerHeight,
                1,
                1000
            );
            camera.position.set( 60, 50, 60 );
            camera.lookAt( scene.position );
            scene.add( camera );           
            
            // var material = new THREE.MeshBasicMaterial( { color: 0xFF0000 } );

            var material = Physijs.createMaterial(
                new THREE.MeshBasicMaterial({ color: 0xFF0000 }),
                0, //friction
                0.8 //restitution/bounciness
            );
                 
            box = new Physijs.BoxMesh(
                new THREE.CubeGeometry( 15, 15, 15 ),
                material
            );
                
            box.position.y=40;
            box.rotation.z=90;
            box.rotation.y=50;

            

            scene.add(box);

            var groundMaterial = Physijs.createMaterial(
                new THREE.MeshBasicMaterial({ color: 0x008888 }),
                0, //friction
                0.5 //restitution/bounciness
            );

            ground = new Physijs.BoxMesh(
                new THREE.CubeGeometry(150, 5, 150),
                groundMaterial,
                 0, 
                { restitution: 0.3, friction: 0.5 }
            );

            ground.name='ground';
            ground.position.y = -25;
            scene.add( ground );

            /*
            box.addEventListener( 'collision', function( otherObject, relative_velocity, relative_rotation, contact_normal ) {
                
                if(otherObject.name=="ground"){
                   alert('hit ground')
                }                

            });
            */

            requestAnimationFrame( render );            
        };

        var render = function() {
                scene.simulate(); // run physics
                renderer.render( scene, camera); // render the scene
                requestAnimationFrame( render );
            };

        window.onload = initScene;

})();
