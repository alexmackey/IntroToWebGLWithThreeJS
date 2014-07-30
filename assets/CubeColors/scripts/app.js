var demo = (function(){

    "use strict";
    
    var scene=new THREE.Scene(),
        light= new THREE.DirectionalLight (0xffffff, 1),
        light2= new THREE.DirectionalLight (0xffffff, 0.5),
        
        renderer,
        camera,
        renderer = new THREE.WebGLRenderer(),
        box,
        ground,
        controls=null;

        light.position.set( -10, 20, 0 );
        light2.position.set( 10, 20, 0 );


        var initScene = function(){
    
            renderer.setSize( window.innerWidth, window.innerHeight );
            document.getElementById("webgl-container").appendChild(renderer.domElement);

            scene.add(light);
            scene.add(light2);
            
            camera = new THREE.PerspectiveCamera(
                    35,
                    window.innerWidth / window.innerHeight,
                    1,
                    1000
                );
            
            camera.position.set( 0, 20, 100 );
            camera.lookAt(new THREE.Vector3(0,1,0));

            scene.add( camera );  

            box = new THREE.Mesh(
              new THREE.CubeGeometry(
                20,
                20,
                20),
              new THREE.MeshBasicMaterial({ 
                color: 0xffffff, 
                //shading: THREE.FlatShading, 
                vertexColors: THREE.VertexColors 
            }));

            for (var i = 0; i <12; i+=2) {
                var r= Math.random(); 
                var g= Math.random(); 
                var b= Math.random(); 
                              
                box.geometry.faces[i].color.setRGB(r,g,b);
                box.geometry.faces[i+1].color.setRGB(r,g,b);                
            }
           
            scene.add(box);

            requestAnimationFrame(render);   
        
        };

        function render() {
            box.rotation.y +=0.1;
            renderer.render(scene, camera); 
            requestAnimationFrame(render);
        };

        window.onload = initScene;

})();
