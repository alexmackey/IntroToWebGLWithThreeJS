05 Loading 3d objects and textures
----------------------------------------------------------------------

It would take a long time to create an entire three.js scene using just the primitive shapes so more complex models will be designed using a 3d modelling package. 

Let's learn how to load & apply texture to a model. 

Three.js has loaders that can load many different types of model but the preferred format is three.js's json format (exporter extensions exist for converting other types to this type).

In the folder Assets/GooseModel you will find 2 files gooseFull.js (a JSON file defining the goose) & goose.jpg (the texture of the model). Copy these files into your exercise.

Now add the following code within app.js to load the model - note the use of a callback function to load the texture.

```js
var loader = new THREE.JSONLoader(),
    mesh;

    loader.load('gooseFull.js', function (geometry) {
      	var gooseMaterial = new THREE.MeshLambertMaterial({
       	map: THREE.ImageUtils.loadTexture('goose.jpg')
   	});

   	mesh = new THREE.Mesh(geometry, gooseMaterial);
   	mesh.scale.set(1000, 1000, 1000);
    
   	scene.add(mesh);
});
```

You should find a nice Goose textured Goose model has been loaded into the scene!

Note you may also want to declare the mesh and materials variables at the top level var in app.js to allow you to modify it from any function whilst you are experimenting.

This model is actually quite big so if you were doing this on a public website you would probably simplify the model – one way to do this is with the free open source 3d model package, Blender. 

----------------------------------------------------------------------
Exercise
----------------------------------------------------------------------
*	Create an animation to rotate the goose model
*	Create a simple scene for the goose with ground, a simple tree and a sun in the sky
*	Find and load another 3d model - note look for three.js format or you will need to use one of the other loaders