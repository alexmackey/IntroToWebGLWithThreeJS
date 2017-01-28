06 Detecting mouse clicks
----------------------------------------------------------------------
Sooner or later you will want to enable a user to interact with your scene. 

To do this we will use a technique called ray casting to draw an imaginary line from where the mouse is clicked to the point in our scene and detect any objects that touch this line. 

To make this work we will need to project from mouse coordinates to scene coordinates – don’t worry too much about the Maths behind this – you probably won’t ever need to modify it! 

The first thing we will need to do is listen for a mouse event and stop the default event:

```js
document.addEventListener('mousedown', onDocumentMouseDown, false);
```

Create a function to handle the click & make sure it doesn’t fire any other DOM events:

```js
function onDocumentMouseDown(event) {
        event.preventDefault();
}
```

We will then create a projector which we will use to do raycasting:
```js
var projector = new THREE.Projector();
```

Now we can project from the mouse clicked coordinates to the scene with the following formula:

```js    
var vector = new THREE.Vector3((event.clientX / window.innerWidth) * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5);
```

Finally we need to unproject & normalize the vector

```js
projector.unprojectVector(vector, camera);
var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
```

This will give us a collection of intersections that we can iterate through to look at any objects we are interested in:

```js
var intersects = raycaster.intersectObjects(scene.children);
```

And to illustrate the click has occurred we will change the colour of the object:

```js
if (intersects.length > 0) {
            intersects[0].object.material.color.setHex(Math.random() * 0xffffff);
}
```

----------------------------------------------------------------------
Exercise
----------------------------------------------------------------------
*	Create a simple game. Position a number of objects randomly on the screen. When the user clicks on any of them they are awarded 10 points. When a user clicks on an object animate it shrinking and then remove it from the scene.